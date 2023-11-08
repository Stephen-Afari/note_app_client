import './createArea.component.scss'
import {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
const initialState={
    title:"",
    content:""
}
const CreateArea = (props)=>{
const [note, setNote]= useState(initialState)

const handleChange = (event)=>{
    //keep the previous elements and they are and assigned new values to the changed ones
    const {name, value}= event.target;

    setNote((prevNote)=>{
        return {
            ...prevNote,
            [name]: value
        }
    })   
}
const submitNote = (event)=>{
    props.onAdd(note);
//reset the fields to null for reuse
    setNote({
        title:"",
        content:""
    })
event.preventDefault();
}
return (
    <div className='inputCover'>
        <form className='inputForm'>
            <textarea
            className='inputText'
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
            />
            
            <textarea
            className='textInput'
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder='Take a note'
            rows="3"
            
            />
            {/* <button onClick={submitNote}>Add</button> */}
            <span className='addIconArea'><AddIcon className='addIcon' onClick={submitNote} /></span>
            
        </form>
    </div>
)
}

export default CreateArea;