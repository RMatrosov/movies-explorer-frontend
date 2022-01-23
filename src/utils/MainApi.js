import {BASE__URL} from "./constants";
import {checkResponse} from "./utils";

export const getUserInfo = (token) => {
  return fetch(`${BASE__URL}/users/me`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      })
      .then(res => checkResponse(res))
}

export const getSavedMovies = (token) => {
  return fetch(`${BASE__URL}/movies`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
      .then(res => checkResponse(res))
}

export const patchProfileInfo = (name, email, token) => {
  return fetch(`${BASE__URL}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({name, email})
  })
      .then(res => checkResponse(res))
}

export const saveMovie = (movie, token) => {
  const newOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      country: movie.country || 'null',
      director: movie.director || 'null',
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink
          ? movie.trailerLink.startsWith('https')
              ? movie.trailerLink
              : 'https://www.youtube.com'
          : 'https://www.youtube.com',
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id.toString(),
      nameRU: movie.nameRU,
      nameEN: movie.nameEN || 'null',
    }),
  };
  return fetch(`${BASE__URL}/movies`, newOptions).then(res => checkResponse(res))
}

export const deleteMovies = (id, token) => {
  return fetch(`${BASE__URL}/movies/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
  )
      .then(res => checkResponse(res))
}
