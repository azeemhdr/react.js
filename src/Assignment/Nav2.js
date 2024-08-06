import React, { useState } from "react";

function Nav2() {
	const [active, setActive] = useState(0);
	let tabs = ['First', 'Second', 'Third'];
	let tabContent = [
	  'This is the first tab',
	  'This is the second tab',
	  'This is the third tab'
	];
  
	return (
	  <div className="container border border-dark rounded shadow mt-2">
		<ul className="nav nav-tabs">
		  {tabs.map((item, index) => (
			<li className="nav-item" key={index}>
			  <button className="nav-link" onClick={() => setActive(index)}>
				{item}
			  </button>
			</li>
		  ))}
		</ul>
		<div className="tab-pane">{tabContent[active]}</div>
	  </div>
	);
  }
  

export default Nav2;
