import { configureStore } from "@reduxjs/toolkit"
import movieReducer, { searchQueryReducer, selectedOptionReducer } from "./Reducer"

export default configureStore({
    reducer: {
        movies: movieReducer,
        selectedOptions: selectedOptionReducer,
        searchQuery: searchQueryReducer,
    },
})