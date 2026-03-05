import { create } from "zustand";

const useMoviesStore = create((set) => ({

    movies: [],

    data: async () =>
        set(async (state) => {
            try {
                const readData = await fetch("../../../backend/src/data/movies.json");
                const data = await readData.json();
                return [...state.movies, data]
            } catch (error) {
                console.error(error)
            }
        })


}))

export default useMoviesStore