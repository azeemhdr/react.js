import React, { useState } from "react";

function Multiapi() {
  const [urls, setUrls] = useState([
    { id: 1, url: "https://dummyjson.com/users" },
    { id: 2, url: "https://dummyjson.com/todos" },
    { id: 3, url: "https://dummyjson.com/recipes" },
    { id: 4, url: "https://dummyjson.com/quotes" },
  ]);

  const [choice, setChoice] = useState(0);
  const [myData, setMyData] = useState([]);
  function callFetch() {
    let a = urls[choice];
    let id = a.id;
    let url = a.url;

    // console.log(urls[choice]);
    // console.log(url,id)

    switch (id) {
      case 1:
        fetch(url)
          .then((response) => response.json())
          .then(function (data) {
            // console.log(data)
            let temp = []; //making this array for display data function one time and running a loop.
            // let data = data.users // we did not declear the varibale agian.
            data = data.users;

            data.forEach(function (item) {
              temp.push({ id: item.id, name: item.firstName });
            });
            // console.log(temp)
            setMyData(temp);
          });
        break;

      case 2:
        fetch(url)
          .then((response) => response.json())
          .then(function (data) {
            // console.log(data)
            let temp = []; //making this array for display data function one time and running a loop.
            // let data = data.users // we did not declear the varibale agian.
            data = data.todos;

            data.forEach(function (item) {
              temp.push({ id: item.id, name: item.todo });
            });
            // console.log(temp)
            setMyData(temp);
          });
        break;

      case 3:
        fetch(url)
          .then((response) => response.json())
          .then(function (data) {
            // console.log(data)
            let temp = []; //making this array for display data function one time and running a loop.
            // let data = data.users // we did not declear the varibale agian.
            data = data.recipes;

            data.forEach(function (item) {
              temp.push({ id: item.id, name: item.name });
            });
            // console.log(temp)
            setMyData(temp);
          });
        break;

      case 4:
        fetch(url)
          .then((response) => response.json())
          .then(function (data) {
            // console.log(data)
            let temp = []; //making this array for display data function one time and running a loop.
            // let data = data.users // we did not declear the varibale agian.
            data = data.quotes;

            data.forEach(function (item) {
              temp.push({ id: item.id, name: item.quote });
            });
            // console.log(temp)
            setMyData(temp);
          });
        break;
    }

    console.log(myData);
  }

  function targetValue(e) {
    setChoice(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="border mt-4 rounded p-4">
          <h2>Test API</h2>
          <div style={{ width: 400 }}>
            <select className="form-control form-select" onChange={targetValue}>
              <option value={""}>Select APIs</option>
              {urls.map((item, index) => {
                return (
                  <option value={index} key={item.id}>
                    {item.url}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-primary mt-3" onClick={callFetch}>
              Fetch
            </button>
            <hr></hr>
            <ul className="list-group">
              {(myData.length != 0)
                ? myData.map(function (item,index) {
                    return (
                      <div key={index}>
                        <li className="list-group-item">{item.id}</li>
                        <li className="list-group-item">{item.name}</li>
                      </div>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Multiapi;
