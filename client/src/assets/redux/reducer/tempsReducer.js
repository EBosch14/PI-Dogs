import { GET_TEMPERAMENTS } from "../actions/types";

let initalState = {
  temperaments: [],
};

function tempsReducer(state = initalState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload
      };

    default:
      return state;
  }
}

export default tempsReducer;
