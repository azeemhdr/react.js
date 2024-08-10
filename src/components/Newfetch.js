import React, { useEffect, useState } from "react";

function Newfetch() {
  const [user, setUser] = useState([]);

  useEffect(function () {
    fetch("https://dummyjson.com/users?select=firstName")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.users);
      });
  }, []);

  return (
    <>
      <div className="container bg-dark text-white">
        <ul className="row">
          {(user.length!=0)?user.map((item)=> {
            return <li className="col-md-3" key={item.id}>{item.firstName}</li>;
          }):''}
        </ul>
      </div>
    </>
  );
}

//always use ternery oprator when u fetching the data first time in react..
export default Newfetch;
