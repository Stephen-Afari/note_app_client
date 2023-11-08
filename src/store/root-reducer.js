import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./notes/notes.reducer";
import { usersReducer } from "./users/users.reducer";
import { notecollectionReducer } from "./notecollection/noteCollection.reducer";
import { usersdataReducer } from "./users/usersdata.reducer";
import { postnotedataReducer } from "./postnotedata/postnote.reducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
  usersdata: usersdataReducer,
  notecollection: notecollectionReducer,
  postnotedata: postnotedataReducer
  
});
