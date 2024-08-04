import React, { useState } from "react";

function Count(){

	let [count,setCount]=useState(0)

	function inc(){
		count++
		setCount(count)
	}
	function dec(){
		if(count==0){
			return
		}else{
			setCount(--count)

		}
		
		// setCount(count--)
		// dec=== 0?alert("please click on +"):count--
		// setCount(count

		// why dec function run on double click?(using pre decrement on single click decrement in digit)
		//how to return a function if i want to stop a function using ternary oprator
	}
	return(
		<>
		<div className="container border p-4 mt-2 rounded border-dark">

			<h1 className="h1"> {count} </h1>
			{/* {(count==0)? <button className="btn btn-info mx-1 text-white fw-bold fs-3" onClick={inc}>+</button>:<button className="btn btn-info mx-1 text-white fw-bold	fs-3" onClick={dec}>-</button>} */}

			<button className="btn btn-info mx-1 text-white fw-bold fs-3" onClick={inc}>+</button>
			<button className="btn btn-info mx-1 text-white fw-bold	fs-3" onClick={dec}>-</button>
			
			
		</div>
		</>
	)
}

export default Count;