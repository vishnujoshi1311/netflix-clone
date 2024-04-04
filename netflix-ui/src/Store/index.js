import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { API_KEY,  TMBD_BASE_URL } from "../Utils/Constants";


const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres",async() => {
       const {data} = await axios.get((`${TMBD_BASE_URL}/genre/movie/list?api_key${API_KEY}`))
}); console.log(data);

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {},
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
});

