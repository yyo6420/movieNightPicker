import { useEffect } from "react"
import MovieCard from "./MovieCard"
import { useState } from "react"

const MoviesArea = () => {
    const [moviesData, setMoviesData] = useState([])

    const fecthMoviesData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("data not found :(");
            const data = await response.json();
            setMoviesData(data.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fecthMoviesData("http://localhost:5005/data")
    }, [])

    return <div className="moviesArea">(
        {moviesData.map((movie) => <MovieCard key={movie.imdbID} imdbID={movie.imdbID} Poster={movie.Poster} Title={movie.Title} Year={movie.Year} Runtime={movie.Runtime} Genre={movie.Genre} Language={movie.Language} />)}
        )

    </div>
}

export default MoviesArea