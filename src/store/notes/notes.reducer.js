import { createSlice } from "@reduxjs/toolkit";

const addObjectToArray = (myArr, objToAdd) => {
  return [ ...myArr , { ...objToAdd }];
};

export const NOTES_INITIAL_STATE = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: NOTES_INITIAL_STATE,
  reducers: {
    setNotes(state, action) {
      //assigns the payload to the note state
      //once you setCategories anywhere in the code, it updates the initial state to include  what has been set into the array

      state.notes = addObjectToArray(state.notes, action.payload);
    },
  },
});

export const { setNotes } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
