import fs from "fs/promises"

const MOVIES_PATH = "../data/movies.json";


export const getMoviesData = async (request, response) => {
    try {
        const readData = await fs.readFile(MOVIES_PATH);
        const data = await readData.json()
        response.status(200).json({ massage: "The database was installed successfully", data: data })
    } catch (error) {
        console.error("failed by getting the data :(")
    }
}