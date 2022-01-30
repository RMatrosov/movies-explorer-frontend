import {BASE__URL} from "./constants";
import {checkResponse} from "./utils";

export const register = (name, email, password) => {
  return fetch(`${BASE__URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password})
  })
      .then(res => checkResponse(res))
}

export const authorize = (email, password) => {
  return fetch(`${BASE__URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
      .then(res => checkResponse(res))
}

export const checkToken = (token) => {
  return fetch(`${BASE__URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: "include",
  }).then(res => checkResponse(res))
};
