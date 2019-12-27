import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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
  const [page, setPage] = useState(0);

  const profile = useSelector(state => state.user.profile);

  function formatDate(item) {
    return formatRelative(
      parseISO(item.answer ? item.answer_at : item.createdAt),
      new Date(),
      {
        locale: pt,
        addSuffix: true,
      }
    );
  }

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${profile.id}/help-orders`, {
        params: {
          page: 0,
        },
      });
      const data = response.data.map(item => {
        const dataAskFormatted = formatDate(item);

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

  function handleSetResponse(question) {
    navigation.navigate('ResponseHelpOrder', {
      question,
    });
  }

  async function updateList(nPage) {
    const response = await api.get(`students/${profile.id}/help-orders`, {
      params: {
        page: nPage,
      },
    });

    const data = response.data.map(item => {
      const dataAskFormatted = formatDate(item);

      const answered = !!item.answer;

      return {
        dataAskFormatted,
        answered,
        ...item,
      };
    });

    const newList = [...helpOrders, ...data];
    setHelpOrders(newList);
  }

  function loadMore(nPage) {
    if (helpOrders.length / (nPage + 1) >= 4) {
      const nextPage = nPage + 1;

      setPage(nextPage);

      updateList(nextPage);
    }
  }

  return (
    <Background>
      <ContainerButton>
        <Button onPress={() => navigation.navigate('NewHelpOrder')}>
          Novo pedido de auxílio
        </Button>
      </ContainerButton>
      <List
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore(page)}
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardResponse key={item.id} onPress={() => handleSetResponse(item)}>
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

HelpOrders.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]),
};

HelpOrders.defaultProps = {
  navigation: {},
};
