import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import helpOrder from './helpOrder/reducer';

export default combineReducers({
  auth,
  user,
  helpOrder,
});
