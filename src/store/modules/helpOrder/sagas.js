import { Alert } from 'react-native';

import { takeLatest, call, all } from 'redux-saga/effects';

import api from '~/services/api';

export function* setQuestion({ payload }) {
  try {
    const { question, idStudent } = payload;
    yield call(api.post, `students/${idStudent}/help-orders`, {
      question,
    });
    Alert.alert('Aviso', 'Pedido de ajuda enviado com sucesso');
  } catch (err) {
    Alert.alert('Falha no cadastro', `${err.response.data.msg}`);
  }
}

export default all([takeLatest('@helpOrder/QUESTION_HELP_ORDER', setQuestion)]);
