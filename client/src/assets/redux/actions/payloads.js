import axios from "axios";
import { CLEAR_INFO, GET_BY_ID, GET_BY_NAME, GET_DOGS, GET_TEMPERAMENTS } from "./types";
import { getAllDogs, getAllTemps, getDogByID, searchDogs } from "../../services/fetchingAPI";

export function getDogs() {
  return async function (dispatch) {
    const dogs = await getAllDogs();
    return dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
}

export function getDogByName(name) {
  return async function (dispatch) {
    const filteredDogs = await searchDogs(name);
    return dispatch({
      type: GET_BY_NAME,
      payload: filteredDogs,
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
      payload: prop
    })
  }
}

export function getTemperaments() {
  return async function (dispatch){
    const temps = await getAllTemps()
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: temps
    })
  }
}