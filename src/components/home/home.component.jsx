import {useState} from 'react';
// import {Header} from '../header/header'
import Header from '../header/header.component.jsx';
import CreateArea from '../textArea/createArea.component.jsx';
import Note from '../noteArea/note.component.jsx';
import './home.scss'
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
//import { getLoggedInUser } from '../../store/users/users.actions.js';
import {useSelector} from 'react-redux';
import { selectNotecollection } from '../../store/notecollection/notecollection.selector.js';
import { selectUsers } from '../../store/users/users.selector.js';
//import { getNoteCollection } from '../../store/notecollection/notecollection.actions.js';
import { selectUserdata } from '../../store/users/users.selector.js';
import Footer from '../footer/footer.component.jsx';
//import { postNoteData } from '../../store/postnotedata/postnotedata.actions.js';

//import { selectUser } from '../../store/users/users.selector.js';
//import { extractDataFromPayload } from '../../store/users/users.selector.js';


const Home =()=> {
  const [notes, setNotes]= useState([]);
  const usersToken = useSelector(selectUserdata);
  const dispatch = useDispatch()
  
  const user = useSelector(selectUsers)

  const noteCollection = useSelector(selectNotecollection);

  //Once the home component mounts, we call the getLoggedInUser action and log the user
  useEffect(() => {
    //dispatch(getNoteCollection({ jwToken: usersToken}))
    //dispatch(postNoteData({jwToken: usersToken}))
  
  }, []); 
  
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
     <Footer/>
    </div>
  );
}

export default Home;

