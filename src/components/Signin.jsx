import React from 'react';
// import ReactDOM from 'react-dom';

export default function login() {
  return ( 
<div className='whole'>
  <div className='upper'></div>
  <h1 className='login'> Login</h1>
  <div className='content'>
    <input type='text' placeholder="  Username" class='inputbox' />
    <input type='text'
           placeholder='  Password'
           className='inputbox' />
    <a href='hello.com'  class='forget'>Forget your password</a>
    <button className='inputbox' id='submit'>submit </button>
    <a href='hello.com' className='newaccount'>Don't have an account?sign up</a>
  </div> 
</div>
);
}