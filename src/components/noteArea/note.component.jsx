import './note.component.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { setNotes } from '../../store/notes/notes.reducer';
import { selectUsers } from '../../store/users/users.selector';
import { selectUserdata } from '../../store/users/users.selector';
import { postNoteData } from '../../store/postnotedata/postnotedata.actions';
import { getNoteCollection } from '../../store/notecollection/notecollection.actions';

const Note = (props)=>{
//selecting users data
const users = useSelector(selectUsers);

const usersToken = useSelector(selectUserdata);
const postNote = useSelector(postNoteData)
    //access the users store
// const users = useSelector((state)=>state.users);

const dispatch = useDispatch();
    const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
      const tim = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      const dateTime = date+' '+ tim;

    const [time, setTime]= useState(dateTime);
     //Once the home component mounts, we call the getLoggedInUser action and log the user
  
//      useEffect(() => {
 
//     dispatch(postNoteData({jwToken: usersToken, title: props.title,content: props.content, dateStamp:props.time}))
//     dispatch(getNoteCollection({ jwToken: usersToken}))
//   }, []); 

    const addTime = ()=>{
      
      //console.log(dateTime);
     setTime(dateTime);
      
    }
const handleDelete = ()=>{
    props.onDelete(props.id)
}
const handleAddition = ()=>{
//post the note data to the database from here ...
dispatch(postNoteData({jwToken: usersToken, title: props.title,content: props.content, dateStamp:props.time}))
dispatch(getNoteCollection({ jwToken: usersToken}))
// console.log( users)
//send the title and content to the reducers

dispatch(setNotes(
    {
        title: props.title,
        content: props.content,
        time: time
    }
))
//remove the card after dispatch
props.onDelete(props.id)
}


// const registerTime = ()=>{
//     x = props.getTime();
//    console.log(x);
// }
// useEffect(()=>{
//     x = props.getTime();
// },[])
return(
    
    <div className="notes">
        <h1 className='title'>{"Title: " + props.title}</h1>
        <br/>
        <p className='content'>{"Message: " + props.content}</p>
        {/* <span className='emailaddress'>{users.email}</span> */}
        <span className='bottomIcons'>
             <span className='emailaddress'>{users.email}</span>
        <div>
        <span className='dateTime'>{time}</span>
        {/* //Use this props to control whether to include or exclude this portion inside other components */}
          { props.includePortions1 && <DeleteOutlineIcon className='deleteIcon' onClick={handleDelete}/>}
            
       { props.includePortions2 && <AddIcon className='addIcon' onClick = {handleAddition}/>}
        </div>
        
        
        </span>
        {/* <button onClick={handleClick}>DELETE</button> */}
    </div>
   
)
}

export default Note;