import MoviesArea from "../componenets/MoviesArea"

const HomePage = () => {
    return (
        <div className="homePage">
            <nav className="homePageNavBar">
                <div className="titleDiv">
                    <h1 className="homePageTitle">מרכז הקולונוע</h1>
                    <p className="homePageDesripton">בחרו את הסרט ולאחר מכן בחרו מושבים</p>
                </div>
                <input type="text" className="searchMovie" placeholder="כאן ניתן לחפש סרט..." />
            </nav>

            <MoviesArea />


        </div>
    )
}

export default HomePage