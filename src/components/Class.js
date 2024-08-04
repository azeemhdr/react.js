import React from "react";
import { Component } from "react";

class Class extends Component {
  render() {
	let {price,subject} = this.props // "this." is using to enter data dynamically to get the object (props) (eg. key:value).
    return (
      <>
        <h1>Hello world</h1>
        <div className="container border rounded p-4">{price},{subject}</div>
      </>
    );
  }
}

export default Class;
