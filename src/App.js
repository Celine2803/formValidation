
import './App.css';

import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Button from '@mui/material/Button';


function Login(){
  const initialValues={
    username:'',
    email:'',
    password:''
  }
  const[formValues,setFormValues]=useState(initialValues)
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate=(values)=>{
    console.log("validating values",values);
     const errors={};
     const regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(!values.username){
      errors.username="Username is required";
     }
     if(!values.email){
      errors.email="email is required";
     }
     if(!values.password){
      errors.password="password is required";
     }
     return errors;
  };
  
    return(
        <div>
          <pre>{JSON.stringify(formValues,undefined,2)}</pre>
          {/* to see what you are typing in the input fields */}
          <form onSubmit={handleSubmit}>
           <div>
           <label><b>NAME:</b></label>
            <input type="text" placeholder="input name" name="username"value={formValues.username}
            onChange={handleChange}/>
           </div>
           <p>{formErrors.username}</p>

           <div>
              <label><b>EMAIL:</b></label>
            <input type="email"placeholder="input email "name="email"value={formValues.email}
            onChange={handleChange}/>
            </div>
            <p>{formErrors.email}</p>
            <div>
              <label><b>PASSWORD:</b></label>
            <input type="password"placeholder="input password"name="password"value={formValues.password}
            onChange={handleChange}/>
            
            </div>
            <p>{formErrors.password}</p>
            {/* <Button variant="contained">Login</Button> */}
            <div sx={{marginTop:'3px'}}>
            <Button variant="contained">Login</Button>
            </div>
            </form>
            </div>
    )
}
 export default Login;
          

