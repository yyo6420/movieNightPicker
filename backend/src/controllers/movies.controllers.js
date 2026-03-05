import fs from "fs"



export const getMoviesData = async (request, response) => {
    try {
        const readData = fs.readFileSync("./src/data/movies.json");
        const data = await JSON.parse(readData);
        response.status(200).json({ massage: "The database was installed successfully", data: data })
    } catch (error) {
        response.status(500).json({ massage: "failed by getting the data :(" })
        console.error(error)
    }
}