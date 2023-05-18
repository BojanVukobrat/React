import Movie from "./Movie";

const MovieList = ({ movies, addMovie, isScheduled, size, removeFromSchedule={removeFromSchedule} }) => {
    return ( 
        <div className="movie-list">
            {movies && movies.map((movie) => (
                <Movie movie={movie} addMovie={addMovie} isScheduled={isScheduled} size={size} removeFromSchedule={removeFromSchedule} key={movie.id}/>
            ))}
        </div>
     );
}
 
export default MovieList;