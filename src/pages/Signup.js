import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

// x Create Account 
// Frontend validation
// Backend validation
// Login
// Frontend validation
// Backend validation
// User Page
// Page Direct
// Themeing

// modularize axios function into userContext?
// No keep async functions local, get url from app provider, then set user context data

export default function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:3001/users/create-user', data)
      .then(
        // if status code
        response => {
          if (response.status === 200) {
            console.log('SUCCESS: ', response.data)
          } else {
            console.log('Something went wrong.', response)
          }
        }
      )
      .catch(e => console.log('CAUGHT ERROR', e.response.data.error))
  }
  console.log("Errors:", errors);

  if (errors.username) {
    if (errors.username.type === 'required') {
      errors.username.message = 'Username is required'
    }
  }

  return (
    <div>
      <h1>Create Account</h1>

      {/* {errors.password?.type === 'required' && "Password is required"} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username" {...register("username", { required: true, maxLength: 36 })} />
        {errors.username?.message}

        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i })} />

        <input type="password" placeholder="Pasword" {...register("password", { required: true, min: 8, maxLength: 256, pattern: /^.{24,}|(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i })} />

        <input type="submit" />
      </form>
    </div>
  );
}

{/* <div>{signupError && error.lastName != undefined ? `Error: ${error.lastName}` : ""}</div>
<div>{signupError && error.username != undefined ? `Error: ${error.username}` : ""}</div>
<div>{signupError && error.email != undefined ? `Error: ${error.email}` : ""}</div>
Email validation is lacking
<div>{signupError && error.password != undefined ? `Error: ${error.password}` : ""}</div>
<div>{message}</div> */}