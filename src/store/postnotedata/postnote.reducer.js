import { createSlice } from "@reduxjs/toolkit";

import { postNoteData } from "./postnotedata.actions";

// const addObjectToArray = (myArr, objToAdd) => {
//   return [...myArr, { ...objToAdd }];
// };

export const POSTNOTE_INITIAL_STATE = {
  postnotedata: {},
};

export const postnotedataSlice = createSlice({
  name: "postnotedata",
  initialState: POSTNOTE_INITIAL_STATE,
  
  extraReducers: (builder) => {
    builder.addCase(postNoteData.fulfilled, (state, action) => {
      // return action.payload;
      state.postnotedata = action.payload;
      //return state;
    });
  },
});


export const postnotedataReducer = postnotedataSlice.reducer;