import "./signin.component.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../../../store/users/users.actions";

const SignIn =()=>{
const { register, handleSubmit, formState: { errors } } = useForm();
const dispatch = useDispatch();

const onSubmit = (data) =>{
    const myEmail = data.email;
       const myPassword = data.password
        //password = data.password;
       
    //dispatch these variables to send them into the createAsyncThunk to be used as arguments(pass both email and password)
    dispatch(getLoggedInUser({ email: myEmail, password: myPassword }))
    
    console.log(data);
} 

return (
 <div className='logInForm'>
<p className="LogIntitle">Login Form</p>
 
            <form className="formInputs" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder='Email'/>
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} placeholder='Password'/>
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>

</div> 
)
}

export default SignIn;