import React, { useEffect, useState } from "react";

function Newfetch() {
  const [user, setUser] = useState([]);

  useEffect(function () {
    fetch("https://dummyjson.com/users?select=firstName")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  return (
    <>
      <div className="container bg-dark">
        <ul className="row">
          {user.map((item)=> {
            <li className="col-md-3" key={item.id}>{item.firstName}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Newfetch;
