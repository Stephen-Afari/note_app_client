import './login.components.scss'

import React from "react";
import { useForm } from "react-hook-form";
import SignUp from "../signup/signup.component";
import SignIn from "./signin/signin.component";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from '../../store/users/users.actions';

const MyLogin = ()=>{
   
    //Import useForm hook from react-hook-form. It will return your register, handlesubmit, errors methods
    //register: This is used to handle input fields. We can access the input field later using the name given to it. In the above example, that is “firstname”.
    // handlesubmit: Is used to handle the form submission. It takes a custom method ( eg: onSubmit ). It will automatically collect field values.
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
	const onSubmit = (data) => {
    
       const myEmail = data.email;
       const myPassword = data.password
        //password = data.password;
       
    //dispatch these variables to send them into the createAsyncThunk to be used as arguments
    dispatch(getLoggedInUser(myEmail))
    dispatch(getLoggedInUser(myPassword))
    console.log(myEmail)
    
};
    
    return (
		
     <div className='signInForm'>
{/* registration form */}

<SignUp className="signup"/>
{/* login form */}

<SignIn className="signin"/>
     </div>

 
			
		
	);
}

// inside src/App.js
// Replace previous code with this.






export default MyLogin;