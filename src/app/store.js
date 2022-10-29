import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "../features/movie/movieSlice"
import userReducer from "../features/user/userSlice"

const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  }
})

export default store