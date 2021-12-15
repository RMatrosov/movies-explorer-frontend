import Main from "../Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../Error404/Error404";
import {Route, Routes} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function App() {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Main/>
              <Footer/>
            </>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/saved-movies" element={<SavedMovies/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </div>

  );
}

export default App;
