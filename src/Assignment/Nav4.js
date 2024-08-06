import React, { useState } from "react";

function Nav4() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="container">
		<ul className="nav nav-tab">
			<li className="nav-item">
				<button className="nav-link" onClick={()=>{setActive(0)}}>first tab</button>
			</li>
			<li className="nav-item">
				<button className="nav-link" onClick={()=>{setActive(1)}} >second tab</button>
			</li>
			<li className="nav-item">
				<button className="nav-link" onClick={()=>{setActive(2)}}>Third tab</button>
			</li>
			<li className="nav-item">
				<button className="nav-link" onClick={()=>{setActive(3)}}>forth tab</button>
			</li>
		</ul>
			
		{active===0?<div className="tab-pane">this is first the tab content</div>:""}
		{active===1?<div className="tab-pane">this is second the tab content</div>:""}
		{active===2?<div className="tab-pane">this is third the tab content</div>:""}
		{active===3?<div className="tab-pane">this is forth the tab content</div>:""}
		
	  </div>
    </>
  );
}
export default Nav4; 
