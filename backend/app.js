import express from "express";
import morgan from "morgan";
import cors from "cors"
import moviesDataRoutes from "./src/routes/movies.routes.js"

const app = express();
const PORT = 5005;

app.use(express.json());

app.use(morgan("tiny"));

app.use(cors())

app.get("/", async (request, response) => {
    response.json({
        message: "Welcome to Movie Night Picker List API",
        version: "1.0.0",
    });
});

app.use("/data", moviesDataRoutes)

app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
});