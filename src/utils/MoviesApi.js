import {checkResponse} from "./utils";
import {MOVIES_URL} from "./constants";


export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    method: 'GET',
  })
      .then((res) => {
        return checkResponse(res);
      })
      .then((res) => {
        return res;
      })
};
