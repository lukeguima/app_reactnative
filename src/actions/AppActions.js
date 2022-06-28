import {
  SET_APP
} from './Types';

export const setFeedCupons = (texto) => {
  return {
    type: SET_APP,
    payload: texto
  }
}
