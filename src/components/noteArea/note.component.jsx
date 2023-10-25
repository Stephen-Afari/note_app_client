import './note.component.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { setNotes } from '../../store/notes/notes.reducer';
import { selectUsers } from '../../store/users/users.selector';

const Note = (props)=>{
//selecting users data
const users = useSelector(selectUsers);
    //access the users store
// const users = useSelector((state)=>state.users);

const dispatch = useDispatch();
    const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
      const tim = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      const dateTime = date+' '+ tim;

    const [time, setTime]= useState(dateTime);
   

    const addTime = ()=>{
      
      //console.log(dateTime);
     setTime(dateTime);
      
    }
const handleDelete = ()=>{
    props.onDelete(props.id)
}
const handleAddition = ()=>{
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
        <span className='bottomIcons'>
        <span className='emailaddress'>{users.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className='dateTime'>{time}</span>
        {/* //Use this props to control whether to include or exclude this portion inside other components */}
          { props.includePortions1 && <DeleteOutlineIcon className='deleteIcon' onClick={handleDelete}/>}
            
       { props.includePortions2 && <AddIcon className='addIcon' onClick = {handleAddition}/>}
        
        </span>
        {/* <button onClick={handleClick}>DELETE</button> */}
    </div>
   
)
}

export default Note;