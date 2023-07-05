import { GET_DOGS } from "../actions/types";

let initalState = {
  allDogs: [],
};

function dogReducer(state = initalState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: payload
      };

    default:
      return state;
  }
}

export default dogReducer;
