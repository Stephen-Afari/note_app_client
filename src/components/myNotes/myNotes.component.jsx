import Note from "../noteArea/note.component";
import {useSelector} from 'react-redux';
import { selectNotes } from "../../store/notes/notes.selector";
import './myNotes.component.scss'
import {useDispatch} from 'react-redux';
import {getLoggedInUser} from '../../store/users/users.actions'
import { useEffect } from "react";
import MyLogin from "../login/login.components";
const MyNotes = () => {
const noteReduxArr = useSelector(selectNotes);


//console.log(noteReduxArr);
//Dispatching the createAsyncThunk action here ...
// const dispatch = useDispatch();
//const users = useSelector((state)=> state.users);
//Once the Notes component mounts, we dispatch the actions getLoggedInUser
// useEffect(()=>{
//   dispatch(getLoggedInUser())
  
// },[dispatch]);
//console.log(users)
//  We are excluding the delete portion of this reused component wih the conditional variable includePortions1  
return(
  <div className="noteCardContainer">
    {noteReduxArr.map((item,index)=>{
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