import { Alert } from 'react-native';

import { takeLatest, call, all } from 'redux-saga/effects';

import api from '~/services/api';

export function* setQuestion({ payload }) {
  try {
    const { question, idStudent } = payload;
    yield call(api.post, `students/${idStudent}/help-orders`, {
      question,
    });
  } catch (err) {
    Alert.alert(err.menn);
  }
}

export default all([takeLatest('@helpOrder/QUESTION_HELP_ORDER', setQuestion)]);
