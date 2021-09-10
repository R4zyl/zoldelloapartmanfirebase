import {
    LOAD_EVENTS_DATA,
  } from '../constants/actionTypes';
  
  const initialState = {
    events: '',
  };
  
  export const eventsReducer = (state = initialState, action) => {
    if (action.type === LOAD_EVENTS_DATA) {
      return {
        ...state,
        events: action.payload,
      };
    }
    return state;
  }