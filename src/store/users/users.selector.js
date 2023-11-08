import { createSelector } from "reselect";
import { usersdataSlice } from "./usersdata.reducer";
//This is the notes reducer
const selectUsersReducer = (state) => state.users;

export const selectUsers = createSelector(
  //if the users State changes, return the users object
  [selectUsersReducer],
  (usersSlice) => usersSlice.users
);
export const extractDataFromPayload = (action) => {
  return action.payload; // You can modify this to extract specific data from payload
};

const selectUsersDataReducer = (state) => state.usersdata;
export const selectUserdata = createSelector(
  [selectUsersDataReducer],
  (usersdataSlice)=> usersdataSlice.usersdata
)

// export const selectUserdata = createSelector(
//   //if the users State changes, return the data on the users object
//   [selectUsers],
//   (usersDataSlice) => usersDataSlice.data
// );
// //
// export const selectUser = createSelector(
//   //if the data on the users object changes, return the user on the data object
//   [selectUserdata],
//   (userSlice) => userSlice.user
// );




// export const selectUserToken = createSelector(
//   //if the notes reducer changes, then we return the notes object on the notesSlice.
//   [selectUsers],
//   (usersTokenSlice) => usersTokenSlice.token
// );