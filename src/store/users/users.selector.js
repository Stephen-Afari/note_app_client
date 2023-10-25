import { createSelector } from "reselect";
//This is the notes reducer
const selectUsersReducer = (state) => state.users;

export const selectUsers = createSelector(
  //if the notes reducer changes, then we return the notes object on the notesSlice.
  [selectUsersReducer],
  (usersSlice) => usersSlice.users
);