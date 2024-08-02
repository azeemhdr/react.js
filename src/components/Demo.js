import React from "react";
import img from "../1430602_6963.jpg";

import Li from "./Li";
import User from "./User";
import Card from "./Card";
function Demo() {
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        <Li title="list item 1" content="content 1" />
        <Li title="list item 2" content="content 1" />
      </ul>

      <User></User>

      <div className="container border p-4">
        <div className="row">
          <div className="col-md-3 border m-2 p-2">
            <Card title="web designing" content="web designing" />
          </div>
          <div className="col-md-3 border m-2 p-2">
            <Card title="UI designing" content="UI designing" />
          </div>
          <div className="col-md-3 border m-2 p-2">
            <Card title="app developer" content="app designing" />
          </div>
          <div className="col-md-3 border m-2 p-2">
            <Card title="digital marketing" content="digital marketing" />
          </div>
          <div className="col-md-3 border m-2 p-2"> 
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
