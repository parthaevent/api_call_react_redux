import React from "react";
import {connect} from "react-redux";

import UserList from "./UserList";

import * as actions from "../actions/userActions";

@connect((store) => {
	return {
		users: store.users.users
	}
})

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Partha'
		}
	}

	componentDidMount() {
		this.props.dispatch(actions.fetchUsers());
	}

	render(){
		return (
			<div>
				<div>
					{this.state.name}
				</div>
				My App Components
				<UserList users = {this.props.users} callbackFromParent={this.parentCallBack} />
			</div>
		)
	}

	parentCallBack = (data) => {
		this.setState({
			name: data
		})
	}
}
