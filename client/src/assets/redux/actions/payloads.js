import {
  CLEAR_INFO,
  FILTER_DOGS,
  GET_BY_ID,
  GET_BY_NAME,
  GET_DOGS,
  GET_TEMPERAMENTS,
} from "./types";
import {
  getAllDogs,
  getAllTemps,
  getDogByID,
} from "../../services/fetchingAPI";

export function getDogs(setIsLoading) {
  return async function (dispatch) {
    const dogs = await getAllDogs();
    setIsLoading(false);
    return dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
}

export function getDogByName(name) {
  return async function (dispatch) {
    return dispatch({
      type: GET_BY_NAME,
      payload: name,
    });
  };
}

export function getDetailDog(id) {
  return async function (dispatch) {
    const dog = await getDogByID(id);
    return dispatch({
      type: GET_BY_ID,
      payload: dog,
    });
  };
}

export function clearInfo(prop) {
  return function (dispatch) {
    return dispatch({
      type: CLEAR_INFO,
      payload: prop,
    });
  };
}

export function filterDogs(filters) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_DOGS,
      payload: filters,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    const temps = await getAllTemps();
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: temps.sort((a, b) => a.localeCompare(b)),
    });
  };
}
