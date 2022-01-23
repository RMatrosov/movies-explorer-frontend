import Main from "../Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../Error404/Error404";
import {Route, Routes, useNavigate} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useCallback, useEffect, useState} from "react";
import {Context} from "../../context/Context";
import ProtectedRoute from "../ProtectedRoute";
import {authorize, checkToken, register, signOut} from "../../utils/AuthApi";
import {deleteMovies, getSavedMovies, getUserInfo, patchProfileInfo, saveMovie} from "../../utils/MainApi";
import {getAllMovies} from "../../utils/MoviesApi";
import {searchMovies} from "../../utils/utils";
import {shortDuration} from "../../utils/constants";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({email: "", name: ""});
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setAuthorizeError] = useState(null);
  const [profileUpdateError, setProfileUpdateError] = useState("");
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState(
      localStorage.getItem("foundMovies")
          ? JSON.parse(localStorage.getItem("foundMovies"))
          : []
  );
  const [shortSearched, setShortSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = useState(false);
  const [savedKeyWord, setSavedKeyWord] = useState("");
  const [isSavedShortSearched, setSavedShortSearched] = useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const navigation = useNavigate();


  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [navigation]);

  useEffect(() => {
    if (loggedIn) {
      const jwt = localStorage.getItem("jwt");
      Promise.all([getUserInfo(jwt), getSavedMovies(jwt)])
          .then(([userData, savedMoviesRes]) => {
            setCurrentUser(userData.data);
            setSavedMovies(savedMoviesRes.data);
            setSavedMoviesId(savedMoviesRes.data.map((movie) => movie.movieId));
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  function handleAuthorize(email, password) {
    authorize(email, password)
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigation("/movies");
        })
        .catch((err) => {
          console.log(err);
          setAuthorizeError(err);
        })
  }

  function handleRegister(name, email, password) {
    register(name, email, password)
        .then((res) => {
          handleAuthorize(email, password);
        })
        .catch((err) => {
          console.log(err);
          setRegisterError(err);
        })
  }

  function handleSignOut() {
    signOut()
        .then((res) => {
          setCurrentUser({email: "", name: ""});
          setLoggedIn(false);
          localStorage.removeItem("jwt");
          localStorage.removeItem("foundMovies");
          localStorage.removeItem("movies");
          setMovies([]);
          navigation("/");
        })
        .catch((err) => {
          console.log(err);
        });
  }

  function handleUpdateUser(name, email) {
    const jwt = localStorage.getItem("jwt");
    patchProfileInfo(name, email, jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setUpdateSuccessful(true);
          setTimeout(() => {
            setUpdateSuccessful(false);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          setProfileUpdateError(err);
        })
  }


  async function handleSearchMovies(value) {
    setSearchLoading(true);
    setNotFound(false);
    setSearchError(false);
    try {
      let movies = JSON.parse(localStorage.getItem("movies"));

      if (!movies) {
        const films = await getAllMovies();
        localStorage.setItem("movies", JSON.stringify(films));
        movies = JSON.parse(localStorage.getItem("movies"));
      }
      const foundMovies = searchMovies(movies, value);
      localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
      handleShortSearch();
    } catch (err) {
      console.log(err);
      setSearchError(true);
    } finally {
      setSearchLoading(false);
    }
  }

  useEffect(() => {
    if (savedMovies.length || foundSavedMovies.length) {
      searchSavedMovies(savedKeyWord);
    }
  }, [isSavedShortSearched]);

  function searchSavedMovies(value) {
    setIsOnlyCheckedSearch(false);
    if (!value) {
      setIsOnlyCheckedSearch(true);
    }
    setSavedKeyWord(value);
    const movies = searchMovies(savedMovies, value, isSavedShortSearched);
    setFoundSavedMovies(movies);
  }

  function handleShortSearch() {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

    const shortMovies = foundMovies.filter((movie) => {
      if (shortSearched) {
        if (movie.duration < shortDuration) {
          return true;
        }
      } else if (movie.duration >= shortDuration) {
        return true;
      }
    });
    setMovies(shortMovies);
    setNotFound(!shortMovies.length);
  }

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      handleShortSearch();
    }
  }, [shortSearched]);

  function handleSaveMovie(movie) {
    const jwt = localStorage.getItem("jwt");
    saveMovie(movie, jwt)
        .then((res) => {
          setSavedMovies([...savedMovies, res.data]);
          setSavedMoviesId([...savedMoviesId, movie.id]);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  function handleDeleteMovie(movie) {
    const jwt = localStorage.getItem("jwt");
    let movieId = savedMovies.filter(
        (f) => f.movieId === movie.id || f.data?.movieId === movie.id
    )[0];
    if (movieId) {
      movieId = movieId._id || movieId._id;
    }
    deleteMovies(movie.owner ? movie._id : movieId, jwt)
        .then((deleted) => {
          setSavedMovies(
              savedMovies.filter((film) => film._id !== deleted.data._id)
          );
          setSavedMoviesId(
              savedMoviesId.filter((id) => id !== deleted.data.movieId)
          );
        })
        .catch((err) => {
          console.error(err);
        });
  }

  return (
      <div className="App">
        <Context.Provider value={{currentUser: currentUser, loggedIn: loggedIn}}>
          <Routes>
            <Route exact path="/" element={
              <>
                <Header/>
                <Main/>
                <Footer/>
              </>}/>
            <Route exact path="/profile" element={<ProtectedRoute><Profile
                handleSignOut={handleSignOut} handleUpdateUser={handleUpdateUser}
                profileUpdateError={profileUpdateError} updateSuccessful={updateSuccessful}
            /></ProtectedRoute>}/>
            <Route exact path="/signup"
                   element={<Register registerError={registerError} handleRegister={handleRegister}/>}/>
            <Route exact path="/signin" element={<Login loginError={loginError} handleAuthorize={handleAuthorize}/>}/>
            <Route exact path="/movies" element={<ProtectedRoute><Movies
                notFound={notFound}
                searchError={searchError}
                searchLoading={searchLoading}
                onChangeDuration={setShortSearched}
                onSearch={handleSearchMovies}
                movies={movies}
                savedMoviesId={savedMoviesId}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
            /></ProtectedRoute>}/>
            <Route exact path="/saved-movies" element={<ProtectedRoute><SavedMovies
                savedMovies={savedKeyWord || isOnlyCheckedSearch
                    ? foundSavedMovies?.length
                        ? foundSavedMovies
                        : "NotFound"
                    : savedMovies}
                onSavedDelete={handleDeleteMovie}
                searchSavedMovies={searchSavedMovies}
                setSavedShortSearched={setSavedShortSearched}
            /></ProtectedRoute>}/>
            <Route exact path="*" element={<Error404/>}/>
          </Routes>
        </Context.Provider>
      </div>
  );
}

export default App;
