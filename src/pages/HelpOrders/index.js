import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { formatRelative, parseISO } from 'date-fns';
import { pt } from 'date-fns/esm/locale';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  ContainerButton,
  CardResponse,
  Title,
  DataResponse,
  TextResponse,
  TextHeaderResponse,
  List,
  TextTitle,
} from './styles';

export default function HelpOrders({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${profile.id}/help-orders`);
      const data = response.data.map(item => {
        const dataAskFormatted = formatRelative(
          parseISO(item.answer ? item.answer_at : item.createdAt),
          new Date(),
          {
            locale: pt,
            addSuffix: true,
          }
        );
        const answered = !!item.answer;

        return {
          dataAskFormatted,
          answered,
          ...item,
        };
      });

      setHelpOrders(data);
    }

    loadHelpOrders();
  }, [profile.id]);

  return (
    <Background>
      <ContainerButton>
        <Button onPress={() => navigation.navigate('NewHelpOrder')}>
          Novo pedido de auxílio
        </Button>
      </ContainerButton>
      <List
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardResponse key={item.id}>
            <TextHeaderResponse>
              <Title>
                <Icon
                  name="check-circle"
                  size={20}
                  color={item.answered ? '#42cb59' : '#999999'}
                />
                <TextTitle answered={item.answered}>
                  {item.answered ? 'Respondido' : 'Sem resposta'}
                </TextTitle>
              </Title>
              <DataResponse>{item.dataAskFormatted}</DataResponse>
            </TextHeaderResponse>

            <TextResponse>{item.question}</TextResponse>
          </CardResponse>
        )}
      />
    </Background>
  );
}
