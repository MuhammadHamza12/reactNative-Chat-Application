import * as actionTypes from '../Actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const defaultState = {
  allStatus:[],
  isLoading:false,
};

export default function setAllUserOnlineStatus(state = defaultState, action = {}) {
  switch (action.type) {
    
    case actionTypes.SET_ALL_STATUS_TO_REDUX:
    return {
        allStatus: [...action.payload],
      };

    
    default:
      return state;
  }
};