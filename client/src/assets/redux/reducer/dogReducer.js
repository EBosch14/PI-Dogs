import {
  filterByTemps,
  filterFromAPI,
  filterFromDB,
  orderByAZ,
  orderByAscWeight,
  orderByDescWeight,
  orderByZA,
} from "../../utils/filtersFunctions";
import {
  CLEAR_INFO,
  FILTER_DOGS,
  GET_BY_ID,
  GET_BY_NAME,
  GET_DOGS,
} from "../actions/types";

let initalState = {
  dogs: [],
  filterDogs: [],
  detailDog: {},
};

function dogReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        filterDogs: payload,
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
    case FILTER_DOGS: {
      let filterData = state.dogs;
      const { selectedTemps, orderBy, whereFrom } = payload;
      if (orderBy === "azOpt") {
        filterData = orderByAZ(filterData);
      } else if (orderBy === "zaOpt") {
        filterData = orderByZA(filterData);
      } else if (orderBy === "ascWeight") {
        filterData = orderByAscWeight(filterData);
      } else if (orderBy === "descWeight") {
        filterData = orderByDescWeight(filterData);
      }

      if (selectedTemps.length) {
        filterData = filterByTemps(filterData, selectedTemps);
      }

      if (whereFrom === "API") {
        filterData = filterFromAPI(filterData);
      } else if (whereFrom === "DB") {
        filterData = filterFromDB(filterData);
      }
      return {
        ...state,
        filterDogs: filterData,
      };
    }
    default:
      return state;
  }
}

export default dogReducer;
