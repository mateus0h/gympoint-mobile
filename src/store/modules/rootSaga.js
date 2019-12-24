import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import helpOrder from './helpOrder/sagas';

export default function* rootSaga() {
  return yield all([auth, helpOrder]);
}
