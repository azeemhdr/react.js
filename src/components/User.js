import React from "react";
// import img from "../1430602_6963.jpg"

let users=[{id:1,user:"sam",email:"sam@gmail.com",img:<img src="https://picsum.photos/seed/picsum/200/300"/>},
	{id:2,user:"masi",email:"masi@gmail.com", img:<img src="https://picsum.photos/id/237/200/300"/>},
	{id:3,user:"zen",email:"zen@gmail.com", img:<img src="https://picsum.photos/200/300/?blur"/>},
]

let User = function User(){
	return(
		<div>
			<h1>User Data</h1>
			<ul>
				{users.map((item)=>(
					<li key={item.id}>{item.id} {item.user} {item.email} {item.img}</li>
				))}
			</ul>
		</div>
	)
}
// why we should pass a unique key to show the data in array of object when we using map function directly...?
// how to put an image in object source from folder ?
export default User;