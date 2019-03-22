import * as actionTypes from '../Actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const defaultState = {
  isAuth: false,
  users: {},
};

export default function setUserReducer(state = defaultState, action = {}) {
  switch (action.type) {
    
    case actionTypes.SET_CURRENT_USER:
    debugger;
    return {
        isAuth: !isEmpty(action.payload),
        users: action.payload,
      };
    
    default:
      return state;
  }
};