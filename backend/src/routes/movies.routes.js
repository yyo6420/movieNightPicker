import express from "express";
import { getMoviesData } from "../controllers/movies.controllers";

const router = express.Router();

router.get("/", getMoviesData)

export default router;