import {
    SET_BOOKING_PENDING,
    SET_BOOKING_FINISHED,
    UNLOAD_BOOKING_STATE
  } from '../constants/actionTypes';
  
  const initialState = {
    events: '',
  };
  
  export const eventsReducer = (state = initialState, action) => {
    if (action.type === SET_BOOKING_PENDING) {
      return {
        ...state,
        events: action.payload,
      };
    }
    if (action.type === SET_BOOKING_FINISHED) {
        return {
          ...state,
          events: action.payload,
        };
      }
      if (action.type === UNLOAD_BOOKING_STATE) {
        return initialState;
      }
    return state;
  }