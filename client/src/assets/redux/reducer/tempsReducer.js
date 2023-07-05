import { GET_TEMPERAMENTS } from "../actions/types";

let initalState = {
  temperaments: [],
};

function tempsReducer(state = initalState, action) {
  switch (action.type) {
    case GET_TEMPERAMENTS:
      return {};

    default:
      return state;
  }
}

export default tempsReducer;
