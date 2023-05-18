import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Movie from './components/Movie';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Guardians of the Galaxy",
      genre: "science-fiction",
      runningTime: 150,
      date: ''
    },
    {
      id: 2,
      name: "Avengers",
      genre: "science-fiction",
      runningTime: 124,
      date: ''
    },
    {
      id: 3,
      name: "The Godfather",
      genre: "mafia",
      runningTime: 154,
      date: ''
    },
    {
      id: 4,
      name: "The Lord of the Rings",
      genre: "action",
      runningTime: 123,
      date: ''
    },
    {
      id: 5,
      name: "Harry potter",
      genre: "action",
      runningTime: 161,
      date: ''
    },
  ]);

  const [movies, setMovies] = useState(data);

  function sortByGenre(genre){
    if(genre!="all"){
      setMovies(data.filter((movie)=>movie.genre===genre))
    }
    else{
      setMovies(data)
    }
  }
  function sortByLength(){
    setMovies([...data].sort((a, b) => b.runningTime - a.runningTime));
    setSchedule([...schedule].sort((a, b) => b.runningTime - a.runningTime));
  }

  const [schedule, setSchedule] = useState([]);

  function addMovie(movie){
    setSchedule([...schedule, movie])
  }

  function removeFromSchedule(movie){
    setSchedule(schedule.filter((element) => element.id != movie.id));
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar sortByGenre={sortByGenre} sortByLength={sortByLength} numberOfMovies={schedule.length}/>
      <div className="body">
        <Routes>
            <Route path="/" element={<MovieList movies={movies} addMovie={addMovie} isScheduled={false} removeFromSchedule={removeFromSchedule} size={schedule.length}/>}/>
            <Route path="/schedule" element={<MovieList movies={schedule} addMovie={addMovie} isScheduled={true} removeFromSchedule={removeFromSchedule}/>}/>\
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
