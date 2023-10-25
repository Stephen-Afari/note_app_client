import { createAsyncThunk } from "@reduxjs/toolkit";
//import MyLogin from "../../components/login/login.components";
export const getLoggedInUser = createAsyncThunk(
  //The email and password were dispatched from the login Component
  "user/addUserToServer",
  async ({ email, password }) => {
    try {
      let loggedInUserResponse = await fetch(
        "http://localhost:5000/api/v1/users/login",
        {
          method: "post",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!loggedInUserResponse.ok) {
        throw new Error("Request failed");
      }
      // Extract JSON data from the response - to avoid non-serialization issue.. Serialization refers to plain javascript object
      const loggedInUserData = await loggedInUserResponse.json();


      return loggedInUserData; // Dispatch the extracted data, which is serializable
    } catch (error) {
      throw error;
    }
  }
);
