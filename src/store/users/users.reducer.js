import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser } from "./users.actions.js";

// const addObjectToArray = (myArr, objToAdd) => {
//   return [...myArr, { ...objToAdd }];
// };

export const USERS_INITIAL_STATE = {
  users: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState: USERS_INITIAL_STATE,
  // reducers: {
  //   setUsers(state, action) {
  //     //assigns the payload to the note state
  //     //once you setCategories anywhere in the code, it updates the initial state to include  what has been set into the array

  //     state.users = addObjectToArray(state.users, action.payload);
  //   },
  extraReducers: (builder) => {
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      // return action.payload;
      state.users = action.payload.data.user;
    });
  },
});

export const { setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
