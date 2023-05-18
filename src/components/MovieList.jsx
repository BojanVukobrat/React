import Movie from "./Movie";

const MovieList = ({ movies, addMovie, isScheduled, size, removeFromSchedule }) => {
    return ( 
        <div className="movie-list">
            {isScheduled ? <h1>Schedule</h1>:<h1>Movies</h1>}
            {movies && movies.map((movie) => (
                <Movie movie={movie} addMovie={addMovie} isScheduled={isScheduled} size={size} removeFromSchedule={removeFromSchedule} key={movie.id}/>
            ))}
        </div>
     );
}
 
export default MovieList;