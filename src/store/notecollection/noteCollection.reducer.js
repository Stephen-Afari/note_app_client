import { createSlice } from "@reduxjs/toolkit";

import { getNoteCollection } from "./notecollection.actions.js";

// const addObjectToArray = (myArr, objToAdd) => {
//   return [...myArr, { ...objToAdd }];
// };

export const NOTECOLLECTION_INITIAL_STATE = {
  notecollection: [],
};

export const notecollectionSlice = createSlice({
  name: "notecollection",
  initialState: NOTECOLLECTION_INITIAL_STATE,
  
  extraReducers: (builder) => {
    builder.addCase(getNoteCollection.fulfilled, (state, action) => {
      // return action.payload;
      state.notecollection = action.payload.data.notes;
      //return state;
    });
  },
});


export const notecollectionReducer = notecollectionSlice.reducer;