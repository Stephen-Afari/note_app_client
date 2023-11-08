import { createSelector } from "reselect";
//This is the notes reducer
const selectPostNoteDataReducer = (state) => state.postnotedata;

export const selectPostNoteData = createSelector(
  //if the notecollectionReducer reducer changes, then we return the notecollection object on the notecollectionSlice.
  [selectPostNoteDataReducer],
  (postnoteSlice) => postnoteSlice.postnotedata
);