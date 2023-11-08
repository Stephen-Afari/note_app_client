import Note from "../noteArea/note.component";
import {useSelector} from 'react-redux';
import { selectNotes } from "../../store/notes/notes.selector";
import './myNotes.component.scss'
import {useDispatch} from 'react-redux';
//import { getNoteCollection } from "../../store/notecollection/notecollection.actions";
import { useEffect } from "react";
//import { selectNotecollection } from "../../store/notecollection/notecollection.selector";
// import { useState } from "react";
// import { selectUserdata } from "../../store/users/users.selector";
import { selectNotecollection } from "../../store/notecollection/notecollection.selector";
import { selectPostNoteData } from "../../store/postnotedata/postnote.selector";
//import { postNoteData } from "../../store/postnotedata/postnotedata.actions";


import MyLogin from "../login/login.components";
const MyNotes = () => {
const noteReduxArr = useSelector(selectNotes);
const postNoteData = useSelector(selectPostNoteData)
//const usersToken = useSelector(selectUserdata);
const noteCollection = useSelector(selectNotecollection);
//Tracks whether the first useEffect has loaded or not
//const [loaded, setLoaded] = useState(false);

//Dispatching the createAsyncThunk action here ...
const dispatch = useDispatch();
//Once the component loads the getNoteCollection action is triggered and it passes the Jwt,harvested from redux
// useEffect(() => {
//   dispatch(getNoteCollection({ jwToken: usersToken}))
//  setLoaded(true)
// }, []); 
console.log(noteCollection)
console.log(postNoteData)
// useEffect(() => {
  
//     console.log(noteCollection)
//     console.log(postNoteData)
  
// }, []); 
//Merge the two arrays (ie. One from the database and the other from the noteReduxArr)
//let allNotesArray = noteCollection.concat(noteReduxArr)
//console.log(allNotesArray)
return(
  <div className="noteCardContainer">
    {noteCollection.map((item,index)=>{
      return(
        <Note
        className ="noteCard"
        key={index}
        title={item.title}
        content={item.content}
       
        includePortions2={false}
        includePortions1={false}
       />
      )
    })}
  </div>
)

  
  
}
export default MyNotes;