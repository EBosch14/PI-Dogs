import { combineReducers } from "redux";
import dogReducer from "./dogReducer";
import tempsReducer from "./tempsReducer";

const rootReducer = combineReducers({
  dogs: dogReducer,
  temperaments: tempsReducer,
});

export default rootReducer;
