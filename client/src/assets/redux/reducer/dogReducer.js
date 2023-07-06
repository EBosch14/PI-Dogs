import { CLEAR_INFO, GET_BY_ID, GET_BY_NAME, GET_DOGS } from "../actions/types";

let initalState = {
  dogs: [],
  detailDog: {},
};

function dogReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        dogs: payload,
      };

    case GET_BY_ID:
      return {
        ...state,
        detailDog: payload,
      };
    case CLEAR_INFO:
      if (payload === "detailDog")
        return {
          ...state,
          detailDog: {},
        };
      if (payload === "dogs")
        return {
          ...state,
          dogs: [],
        };
    default:
      return state;
  }
}

export default dogReducer;
