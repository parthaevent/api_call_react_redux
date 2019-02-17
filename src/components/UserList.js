import React from "react";
import User from "./User";

export default class UserList extends React.Component {
	constructor () {
		super();
		this.state = {
			counter: 1,
			node: {
				left: null,
				right: null
			},
			isActive: null
		}
	}
	render(){
		if(Object.getOwnPropertyNames(this.props.users).length === 0){
			return (<div></div>)
		}
		var userNodes = this.props.users.map(function(user, index){
			return (
				<User name={user.name} email={user.email} id={user.id} key={index}>
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

					<input type="button" onClick={() => this.pasToParent('val')} value="Pass"></input>
				</div>
				<div>Counter Value: {this.state.counter} --- {this.state.isActive}</div>
			</div>
		)
	}

	setCounter = () => {
		this.state.test = this.state.counter;
		this.setState((state) => ({
			counter: state.counter + 1,
			node: {
				left: 'test',
				right: state.node.right
			}
		}),() => {
			console.log(this.state.counter)
			console.log(this.state.node);
		});
	}

	shouldComponentUpdate() {
		if (this.state.counter > 10) {
			return false;
		}
		return true;
	}

	pasToParent = (param) => {
		this.props.callbackFromParent(param);
	}
}