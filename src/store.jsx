import { configureStore } from "@reduxjs/toolkit";

/* This is the slice's reducer (the default export from the file above).
The import path must match where that file actually lives. */
import favouritesReducer from "./reducers/favouritesReducer"

const store = configureStore({ reducer: { favourites: favouritesReducer} })

export default store;