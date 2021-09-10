import {
  CHANGE_LANGUAGE_HUN,
  CHANGE_LANGUAGE_ENG,
  UNLOAD_STORE,
} from '../constants/actionTypes';

export const changeLanguageToHunAction = () => ({
  type: CHANGE_LANGUAGE_HUN,
});

export const changeLanguageToEngAction = () => ({
  type: CHANGE_LANGUAGE_ENG,
});

export const unloadStoreAction = () => ({
  type: UNLOAD_STORE,
});
