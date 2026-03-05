import fs from "fs/promises"

const MOVIES_PATH = "../data/movies.json";

export const getMoviesData = async (request, response) => {
    try {
        const data = await fs.readFile(MOVIES_PATH);
        response.status(200).json({ massage: "The database was installed successfully" })
    } catch (error) {
        console.error("failed by getting the data :(")
    }
}