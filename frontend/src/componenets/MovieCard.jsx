import { Link } from "react-router"

const MovieCard = ({ id, year, runtime, genre, language }) => {
    return (
        <div className="card">
            <img className="movieImage" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" alt="" />

            <div className="cardDetails">
                <h2>Avatar</h2>
                <div className="detailDiv">
                    <p>שנת הוצאה</p>
                    <p>2009</p>
                </div>
                <div className="detailDiv">
                    <p>זמן צפייה</p>
                    <p>162 דקות</p>
                </div>
                <div className="detailDiv">
                    <p>ז'אנר</p>
                    <p>Action, Adventure, Fantasy</p>
                </div>
                <div className="detailDiv">
                    <p>שפה</p>
                    <p>English, Spanish</p>
                </div>

                <Link to={`/movieData:${id}`} className="chooseChairs">בחירת מושבים</Link>
            </div>
        </div>
    )
}

export default MovieCard