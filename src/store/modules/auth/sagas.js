import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { idStudent } = payload;

    const response = yield call(api.post, 'sessionStudent', {
      id: idStudent,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
