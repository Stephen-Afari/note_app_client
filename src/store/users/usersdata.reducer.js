import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser } from "./users.actions.js";

// const addObjectToArray = (myArr, objToAdd) => {
//   return [...myArr, { ...objToAdd }];
// };

export const USERSDATA_INITIAL_STATE = {
  usersdata: {},
};

export const usersdataSlice = createSlice({
  name: "usersdata",
  initialState: USERSDATA_INITIAL_STATE,
  // reducers: {
  //   setUsers(state, action) {
  //     //assigns the payload to the note state
  //     //once you setCategories anywhere in the code, it updates the initial state to include  what has been set into the array

  //     state.users = addObjectToArray(state.users, action.payload);
  //   },
  extraReducers: (builder) => {
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      // return action.payload;
    //state.users = action.payload.data.user;
      state.usersdata = action.payload.token;
      
    });
  },
});

// export const { setUsersd } = usersdataSlice.actions;
export const usersdataReducer = usersdataSlice.reducer;
