import { createAsyncThunk } from "@reduxjs/toolkit";
//import { selectUserdata } from "../users/users.selector";
// import { useSelector } from "react-redux";



export const postNoteData = createAsyncThunk(

  "notes/postNoteToServer",
  async ({jwToken,title, content, dateStamp}) => {
    
    try {
     
      let postnotedata = await fetch(
        "https://afarinotes-api.onrender.com/api/v1/notes",
        {
          method: "POST",
          body: JSON.stringify({
            title,
            content,
            dateStamp,
            // email,
            // password,
          }),
          headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${jwToken}`},
        }
      );
      if (!postnotedata.ok) {
        throw new Error("Request failed");
      }
      // Extract JSON data from the response - to avoid non-serialization issue.. Serialization refers to plain javascript object
      const postedNoteData = await postnotedata.json();


      return postedNoteData; // Dispatch the extracted data, which is serializable
    } catch (error) {
      throw error;
    }
  }
);
