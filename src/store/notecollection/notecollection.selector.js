import { createSelector } from "reselect";
//This is the notes reducer
const selectNotecollectionReducer = (state) => state.notecollection;

export const selectNotecollection = createSelector(
  //if the notecollectionReducer reducer changes, then we return the notecollection object on the notecollectionSlice.
  [selectNotecollectionReducer],
  (notecollectionSlice) => notecollectionSlice.notecollection
);