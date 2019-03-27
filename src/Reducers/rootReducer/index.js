import { combineReducers } from 'redux';
import setAuthUser from '../AuthUserReducer';
import setAllUserStatus from '../AllUserStatusRed';
const rootReducer = combineReducers({
  setAuthUser, setAllUserStatus,
});

export default rootReducer;