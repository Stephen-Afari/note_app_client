import {useState} from 'react';
// import {Header} from '../header/header'
import Header from '../header/header.component.jsx';
import CreateArea from '../textArea/createArea.component.jsx';
import Note from '../noteArea/note.component.jsx';
import './home.scss'
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from '../../store/users/users.actions.js';
import {useSelector} from 'react-redux';

const Home =()=> {
  const [notes, setNotes]= useState([]);
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users);
  //Once the home component mounts, we call the getLoggedInUser action and log the user
  useEffect(()=>{
    dispatch(getLoggedInUser())
    console.log(users)
  },[dispatch]);

  const addNotes = (newNote)=>{
      setNotes((prevNotes)=>{
        return [...prevNotes,newNote]
      })
      
  }
const deleteNotes =(id)=>{
  setNotes(prevNotes =>
    {return prevNotes.filter((curNote,noteId)=>{
    return (
        noteId !== id
    )
  })})
}

  return (
    <div className="myHome">
    <Header/>

     
     <CreateArea onAdd={addNotes}/>
     <div className='parentNote'>
     {notes.map((noteItem, index)=>{
      return (
        <Note
        key={index}
        id={index}
        title={noteItem.title}
        content= {noteItem.content}
        onDelete={deleteNotes}
        includePortions1 ={true}
        includePortions2 ={true}
       
        />
      )
     })}
     </div>
    </div>
  );
}

export default Home;

