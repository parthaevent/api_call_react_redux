import React from "react";

import User from "./User";

export default class UserList extends React.Component {
	constructor () {
		super();
		this.state = {
			counter: 1
		}
	}
	render(){
		if(Object.getOwnPropertyNames(this.props.users).length === 0){
			return (<div></div>)
		}
		var userNodes = this.props.users.map(function(user){
			return (
				<User name={user.name} email={user.email} id={user.id}>
					{user.name}
				</User>
			)
		})
		return (
			<div>
				<div>
					<h1>Users</h1>
					{userNodes}
				</div>
				<div>
					<input type="button" onClick={this.setCounter} value="Submit"></input>
				</div>
				<div>Counter Value: {this.state.counter}</div>
			</div>
		)
	}

	setCounter = () => {
		this.setState((state) => ({
			counter: state.counter + 1
		}),() => {
			console.log(this.state.counter)
		});
	}
}