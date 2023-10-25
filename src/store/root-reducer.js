import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./notes/notes.reducer";
import { usersReducer } from "./users/users.reducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
});
