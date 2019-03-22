import { combineReducers } from 'redux';
import setAuthUser from '../AuthUserReducer';
const rootReducer = combineReducers({
  setAuthUser,
});

export default rootReducer;