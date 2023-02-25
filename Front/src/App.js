import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form.jsx";
import Favorites from "../src/components/Favorites/Favorites.jsx";


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const username = "esteban@mail.com";
  const password = "hear1234";

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  /* const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  }; */

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`) //`https://rickandmortyapi.com/api/character/${character}`
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No Character Found");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
