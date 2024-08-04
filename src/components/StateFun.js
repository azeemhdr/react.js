import React, { useState } from "react";

/*
1.first we take a variable in array to make a "state method",the first one is variable and the second one is function which is make like "setVariablename" this function set the value in the variable.
2."useState" is a hook function that provide state feature.
2.using "useState" hook function and give the variable default value

*/ 

function StateFun (){

let [name,setName]=useState("Syed Azeem Haider")

function changeValue(){
	name="Dr.Syed Salman Haider"
	// setName(name="syed")
	setName(name)
}
return(
	<div className="container py-4 mt-2 border border-info shadow bg-dark text-white rounded">
		<h1>{name}</h1>
		<button onClick={changeValue} className="btn btn-primary">change</button>
		<p>{name}</p>
	</div>
)
}
export default StateFun;
