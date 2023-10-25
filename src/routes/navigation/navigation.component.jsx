import {Outlet, Link} from 'react-router-dom'
import {Fragment} from 'react'
import { useState } from 'react';
import './navigation.component.scss'
import {ReactComponent as Dairy}from '../../assets/address-book.svg';
import {ReactComponent as Books} from '../../assets/books.svg';

const Navigation = ()=>{
    const [activeButton, setActiveButton]= useState(null);
//This will set the activeButton value button 1 or button2
//If it has already been clicked, it sets to null
const toggleColor = (buttonId)=>{
    if(activeButton === buttonId){
        //Reset color if the same button is clicked again
        setActiveButton(null)
    } else {
        setActiveButton(buttonId);
    }
}
//Checks if the activeButton has already been set, in that case it assigns the new svg-itemA or svg-itemB

const getButtonClassA = (buttonId)=>{
    return activeButton === buttonId ? 'nav-div-item2': 'nav-div-item1';
}
// const getButtonClassB = (buttonId)=>{
//     return activeButton === buttonId ? 'svg-itemB': 'svg-item2'
// }


    return (
        <Fragment>
        {/* To sign in and out */}
        <div  className='signIn'>
        <Link className='authLink' to='/login'>
        {/* <div className='linkDiv1'> LOGO</div> */}
        <span className='signInSpan'>Signin</span>
        </Link>
        
        </div>
        <div className='navAndOutlet'>
        <div  className="nav-bar">
        
        

        <div  className='card1'>
        <Link className='link2' to='/'>
        {/* <div className='linkDiv1'> LOGO</div> */}
        <div className={getButtonClassA('button1')} onClick={()=>toggleColor('button1')}>
        <Dairy className='svg-item1'/>
        <span>Dairy</span>
        </div>
        
        </Link>
        </div>


<div  className='card2'>
        <Link className='link2' to='/notes'>
        {/* <div className='linkDiv1'> LOGO</div> */}
        <div className={getButtonClassA('button2')} onClick={()=>toggleColor('button2')}>
        <Books className='svg-item2' />
        <span>Notes</span>
        </div>
        
        </Link>
        </div>

        </div>
        
        <div className='outletData'>
        <Outlet />
        </div>
        
        </div>
        </Fragment>
    )
  }
  //You cannot add a classname to a Fragment
  export default Navigation;