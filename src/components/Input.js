import React, { useState } from "react";

function Input(){
	let [digit,setDigit]=useState(0)
	let [factorial,setFactorial]=useState(1)

// const handleValue = (event)=>{
	function handleValue(event){
		setDigit(event.target.value) //about event and target?
	}

	function getFactorial(){
		let fact = 1

		if (digit != 0){
		for(let i=digit;i>=1;i--){
			fact = fact*i
			setFactorial(fact)
		}
	}
}
	return(	<>
		<div className="container border rounded py-4 bg-dark">
			<h1 className="display-1 text-white">{factorial}</h1>
			<input type="text" className="form-control" value={digit} onChange={handleValue}/>
			<button className="btn btn-primary m-2" onClick={getFactorial}>Get value</button>
		</div>
		</>
		)

}

export default Input;