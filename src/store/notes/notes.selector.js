import { createSelector } from "reselect";
//This is the notes reducer
const selectNotesReducer = (state) => state.notes;

export const selectNotes = createSelector(
  //if the notes reducer changes, then we return the notes array on the notesSlice.
  [selectNotesReducer],
  (notesSlice) => notesSlice.notes
);

// export const selectItems = createSelector([selectNotes], (notes) =>
//   notes.reduce((acc, note) => {
//     const {title, content}= note
// acc[]
//  ,{} })
// );
