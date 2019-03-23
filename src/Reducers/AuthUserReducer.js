import * as actionTypes from '../Actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const defaultState = {
  isAuth: false,
  users: {},
  isLoading:false,
};

export default function setUserReducer(state = defaultState, action = {}) {
  switch (action.type) {
    
    case actionTypes.SET_CURRENT_USER:
       
    return {
        isAuth: !isEmpty(action.payload),
        users: action.payload,
      };
    case actionTypes.SET_LOADING_FLAG:  
    return { ...state,
        isLoading:action.payload,
    };
    
    default:
      return state;
  }
};