import React from "react";
import img from "../1430602_6963.jpg";

import Li from "./Li";
import User from "./User";
import Card from "./Card";
import Price from "./Price";
import Class from "./Class";
import StateFun from "./StateFun"
import Count from "./Count";
import Input from "./Input"
// import Newfetch from "./Newfetch";
import Form from "./Form";

import Nav from "../Assignment/Nav"
import Nav2 from "../Assignment/Nav2"
import Nav3 from "../Assignment/Nav3"
import Nav4 from "../Assignment/Nav4"

function Demo() {
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        <Li title="list item 1" content="content 1" />
        <Li title="list item 2" content="content 1" />
      </ul>

      <User></User>

      {/* 31/july/24 class */}
      <div className="container border p-4 ">
        <div className="row">
          <div className="col-md-3 border m-2 p-2">
            <Card title="web designing" content="web designing" price="1000" />
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
      
            <Card title="" />
          </div>
        </div>
      </div>
      <Class price="5000" subject="English"/>
      <StateFun/>
      <Count/>

      {/* 01/Aug/2024 */}
        <Input/>
        {/* <Newfetch/> */}

        <Form/>
        <Nav/>
        <Nav2/>
        <Nav3/>
        <Nav4/>
    </>
  );
}

export default Demo;
