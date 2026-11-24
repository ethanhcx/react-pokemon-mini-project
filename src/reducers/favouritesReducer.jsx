/* createSlice bundles together: the initial state, the reducers (functions that change the state),
and the action creators (functions that build action objects) */

import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: [],

    // Each key is one way the state can change
    reducers: {
        // state = the current favourites array
        // action = { type: "favourites/addFavourites", payload: "pikachu"}
        addFavourites: (state, action) => {
            state.push(action.payload)
        },
        removeFavourites: (state, action) => {
            return state.filter((name) => name !== action.payload)
        }
    }
})

export const { addFavourites, removeFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer