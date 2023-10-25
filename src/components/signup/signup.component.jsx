 //Import useForm hook from react-hook-form. It will return your register, handlesubmit, errors methods
    //register: This is used to handle input fields. We can access the input field later using the name given to it. In the above example, that is “firstname”.
    // handlesubmit: Is used to handle the form submission. It takes a custom method ( eg: onSubmit ). It will automatically collect field values.
    import "./signup.component.scss";
    import { useForm } from "react-hook-form";
   
const SignUp =()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
return (
    <div className='registrationForm'>
<p className="Registrationtitle">Registration Form</p>

<form className="formInputs" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("name")} placeholder='Name'/>
    <input type="email" {...register("email", { required: true })} placeholder='Email'/>
    {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
    <input type="password" {...register("password")} placeholder='Password'/>
    <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
</form>
</div>
)
}

export default SignUp;
	
    
