import { createAsyncThunk } from "@reduxjs/toolkit";
//import { selectUserdata } from "../users/users.selector";
// import { useSelector } from "react-redux";



export const getNoteCollection = createAsyncThunk(

  "notes/getNoteFromServer",
  async ({jwToken}) => {
    
    try {
     
      let noteCollection = await fetch(
        "http://localhost:5000/api/v1/notes",
        {
          method: "GET",
         
          headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${jwToken}`},
        }
      );
      if (!noteCollection.ok) {
        throw new Error("Request failed");
      }
      // Extract JSON data from the response - to avoid non-serialization issue.. Serialization refers to plain javascript object
      const allNoteData = await noteCollection.json();


      return allNoteData; // Dispatch the extracted data, which is serializable
    } catch (error) {
      throw error;
    }
  }
);
