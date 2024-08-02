import React from "react";

function Li(props){
	return (
		<div>
		<li>{props.title }</li>
		<li>{props.content}</li>
		</div>
	)
}

export default Li