import axios from "axios";
import { GET_DOGS } from "./types";


export function getDogs() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:4444/dogs/breeds");
    return dispatch({
      type: GET_DOGS,
      payload: response.data,
    });
  };
}