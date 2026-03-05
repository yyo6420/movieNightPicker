import { Link } from "react-router"

const MovieCard = ({ imdbID, Poster, Title, Year, Runtime, Genre, Language }) => {
    return (
        <div className="card">
            <img className="movieImage" src={Poster} alt="אין תמונה" />

            <div className="cardDetails">
                <h2>{Title}</h2>
                <div className="detailDiv">
                    <p>שנת הוצאה</p>
                    <p>{Year}</p>
                </div>
                <div className="detailDiv">
                    <p>זמן צפייה</p>
                    <p>{`${Runtime}`}</p>
                </div>
                <div className="detailDiv">
                    <p>ז'אנר</p>
                    <p>{Genre}</p>
                </div>
                <div className="detailDiv">
                    <p>שפה</p>
                    <p>{Language}</p>
                </div>

                <Link to={`/movieData:${imdbID}`} className="chooseChairs">בחירת מושבים</Link>
            </div>
        </div>
    )
}

export default MovieCard