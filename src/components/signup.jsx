import React from 'react';
// import ReactDOM from 'react-dom';

export default function signup() {
  return (
<div class='signuppage'>
    <h1 class='signupname'> Sign Up</h1>
    <input type='text' placeholder="Full Name" class='inputsignup' />
    <input type='text' placeholder="Email" class='inputsignup' />
    <input type='text' placeholder="Username" class='inputsignup' />
    <input type='text' placeholder='Password' class='inputsignup' />
    <button  class='signup'>Sign Up</button>
    <a href='hello.com' class='signinlink'>Already have an account?Sign In</a>
</div>
);
}