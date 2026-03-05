import express from "express";
import { getMoviesData } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/", getMoviesData)

export default router;