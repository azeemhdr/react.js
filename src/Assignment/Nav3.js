import React, { useState } from 'react';

function Nav3() {
  const [active, setActive] = useState(0);

  return (
    <div className="container border border-dark rounded shadow mt-2">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className="nav-link" onClick={() => {setActive(0)}}>First</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => {setActive(1)}}>Second</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => {setActive(2)}}>Third</button>
        </li>
		<li className="nav-item">
          <button className="nav-link" onClick={() => {setActive(3)}}>forth</button>
        </li>
      </ul>
      {active === 0 && <div className="tab-pane">This is the first tab</div>}
      {active === 1 && <div className="tab-pane">This is the second tab</div>}
      {active === 2 && <div className="tab-pane">This is the third tab</div>}
      {active === 3 && <div className="tab-pane">This is the forth tab</div>}

    </div>
  );
}

export default Nav3;