import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import { useSelector } from 'react-redux';

import { formatRelative, parseISO } from 'date-fns';
import { pt } from 'date-fns/esm/locale';

import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  Container,
  CheckinBar,
  Title,
  DateCheckIn,
  TextBar,
  List,
  ContainerButton,
} from './styles';
import api from '~/services/api';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const [loadingPlus, setLoadingPlus] = useState(false);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);

  const profile = useSelector(state => state.user.profile);

  function formatDate(date) {
    const dateParsed = formatRelative(parseISO(date), new Date(), {
      locale: pt,
      addSuffix: true,
    });

    return dateParsed;
  }

  useEffect(() => {
    async function loadCheckins() {
      setLoading(true);
      const response = await api.get(`students/${profile.id}/checkins`, {
        params: {
          page: 0,
        },
      });

      let nCheckIns = 0;
      const data = response.data.map(check => {
        nCheckIns += 1;

        return {
          dateParsed: formatDate(check.createdAt),
          nCheckIns,
          ...check,
        };
      });
      setLoading(false);

      setCheckins(data);
    }

    loadCheckins();
  }, [profile.id]);

  async function updateList(nPage) {
    setLoadingPlus(true);

    const response = await api.get(`students/${profile.id}/checkins`, {
      params: {
        page: nPage,
      },
    });

    let nCheckIns = nPage * 7;

    const data = response.data.map(check => {
      nCheckIns += 1;

      return {
        nCheckIns,
        dateParsed: formatDate(check.createdAt),
        ...check,
      };
    });

    const newList = [...checkins, ...data];

    setCheckins(newList);
    setLoadingPlus(false);
  }

  async function loadMore(nPage) {
    if (checkins.length / (nPage + 1) >= 7) {
      const nextPage = nPage + 1;

      setPage(nextPage);

      updateList(nextPage);
    }
  }

  async function handleNewCheckIn() {
    try {
      const response = await api.post(`students/${profile.id}/checkin`);

      const data = {
        nCheckIns: ' Agora',
        dateParsed: formatDate(response.data.createdAt),
        ...response.data,
      };

      const newList = [data, ...checkins];

      setCheckins(newList);
    } catch (err) {
      Alert.alert('Aviso', 'Máximo de logins alcançado!');
    }
  }

  function handleConfirmCheckIn() {
    Alert.alert(
      'Aviso',
      'Deseja fazer check-in ?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => handleNewCheckIn() },
      ],
      { cancelable: false }
    );
  }

  return (
    <Background>
      <Container>
        <ContainerButton>
          <Button onPress={handleConfirmCheckIn}>Novo check-in</Button>
        </ContainerButton>

        {loading && <ActivityIndicator color="#ee4e61" />}

        <List
          onEndReachedThreshold={0.01}
          onEndReached={() => loadMore(page)}
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CheckinBar>
              <TextBar>
                <Title>Check-in #{item.nCheckIns}</Title>
                <DateCheckIn>{item.dateParsed}</DateCheckIn>
              </TextBar>
            </CheckinBar>
          )}
        />
        {loadingPlus && <ActivityIndicator color="#ee4e61" />}
      </Container>
    </Background>
  );
}
