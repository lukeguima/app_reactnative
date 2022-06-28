import {
  SET_APP
} from '../actions/Types';

const INITIAL_STATE = {
  feed: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_APP:
      return { ...state, feed: action.payload }
     
    default:
      return state;
  }
}

export default reducer;