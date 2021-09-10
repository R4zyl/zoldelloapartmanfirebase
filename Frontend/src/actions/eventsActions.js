import {
    LOAD_EVENTS_DATA,
  } from '../constants/actionTypes';
  
  export const loadEventsAction = (payload) => ({
    type: LOAD_EVENTS_DATA,
    payload,
  });