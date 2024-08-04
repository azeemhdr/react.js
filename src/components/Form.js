import React, { useState } from "react";

function Form() {
const [login,setLogin]=useState(false)

  return (
    <div className="container border">
		{(login==false)?      <div className="border rounded p-4 w-50">
        <h1>Login</h1>
        <p>Login Form</p>
      </div>:<div className="border rounded p-4 w-50">
        <h1>Dashboard</h1>
        <p>Dashboard Area</p>
      </div>}
	  <button className="btn btn-primary" onClick={()=>{setLogin(true)}}>Login True</button>
	  <button className="btn btn-primary" onClick={()=>{setLogin(false)}}>Login false</button>



      
    </div>
  );
}

export default Form;
