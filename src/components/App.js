import React from "react";
import "../styles.css";
import SignIn from './Signin';
import Signup from './signup';
export default function App() {
  return (
    <div className="App">
     <SignIn />
     <Signup />
    </div>
  );
}
