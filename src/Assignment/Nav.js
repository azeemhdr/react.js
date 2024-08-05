import React, { useState } from "react";

function Nav() {
 const[active,setActive]=useState(false)
	
 function changeValue(){
	setActive(false)
 }
	return (
    <>
      <div className="container border border-dark rounded shadow">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            {/* <button className="nav-link" onClick={()=>{setActive(false)}}>First</button> */}
            <button className="nav-link" onClick={changeValue}>First</button>

          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={()=>{setActive(true)}}>Second</button>
          </li>
        </ul>
		{(active==false)?<div className="tab-pane "> this is first tab</div>:<div className="tab-pane "> this is second tab</div>}
        
      </div>
    </>
  );
}

export default Nav;
