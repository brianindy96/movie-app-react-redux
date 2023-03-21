import { createSlice, current } from '@reduxjs/toolkit'

// Add Movie
export const movieSlice = createSlice({
    name: "movieListing",
    initialState: {
        movies: [],
        favoriteMovies: [],
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
            // console logging the current state
            console.log(current(state))
        },
        addFavoriteMovie: (state, action) => {
            state.favoriteMovies.push(action.payload);
            console.log(current(state))
        },
        removeFavoriteMovie: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id);
            console.log(current(state))
        }
    }
})

// Action creators are generated for each case reducer function
export const { addMovie, addFavoriteMovie, removeFavoriteMovie } =  movieSlice.actions

export default movieSlice.reducer

// SelectedOption
export const selectedOptionSlice = createSlice({
    name: 'selectedOption',
    initialState: 'featured',
    reducers: {
        selectOption: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { selectOption } = selectedOptionSlice.actions;

export const selectedOptionReducer = selectedOptionSlice.reducer;

export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: '',
    reducers: {
      setSearchQuery: (state, action) => {
        state = action.payload;
        return state;
      },
    },
  });
  
  export const { setSearchQuery } = searchQuerySlice.actions;
  
  export const searchQueryReducer = searchQuerySlice.reducer;