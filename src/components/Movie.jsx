import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, addMovie, isScheduled, size, removeFromSchedule }) => {
    const navigate = useNavigate();
    const [newMovie, setNewMovie] = useState(movie);
    function CheckaddMovie(checkMovie){
        if(checkMovie.date === ""){
            alert("Enter date");
        }
        else{
            addMovie(newMovie);
        }
    }
    return ( 
        <div className="movie">
            <div className="title">
                <h3>{movie.name} ({movie.runningTime})</h3>
                <p>{movie.date != "" ? <>{movie.date}</> : <>{movie.genre}</>}</p>
            </div>
            <div className="details">
            {isScheduled ? <></> : <label htmlFor="date">Date:</label>}
                {isScheduled ? <></> : <input type="text" id="date" onChange={(e) => setNewMovie({ ...movie, date: e.target.value, id:(size+1) })}/>}
                {isScheduled ? <button className="pagination-btn"
                 style={{ backgroundColor: '#006680', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                  onClick={() => removeFromSchedule(movie)}>Cancel</button> : <button className="pagination-btn"
                 style={{ backgroundColor: '#006680', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                  onClick={() => CheckaddMovie(newMovie)}>Schedule movie</button>}
            </div>
            
        </div>
     );
}
 
export default Movie;