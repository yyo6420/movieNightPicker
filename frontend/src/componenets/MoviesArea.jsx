import MovieCard from "./MovieCard"

const MoviesArea = () => {
    return <div className="moviesArea">
        <MovieCard key={""} id year runtime genre language />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
}

export default MoviesArea