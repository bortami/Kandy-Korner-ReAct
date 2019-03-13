import React, { Component } from 'react';

export default class EmployeeForm extends Component {
	state = {
		name: '',
		phoneNumber: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructNewEmployee = (e) => {
		e.preventDefault();
		const employee = {
			name: this.state.name,
			phoneNumber: this.state.phoneNumber
		};
		this.props.addEmployee(employee).then(() => this.props.history.push('/employees'));
	};

	render() {
		return (
			<React.Fragment>
				<form className="employeeForm">
					<div className="form-group">
						<label htmlFor="name">Employee Name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							placeholder="Employee name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Employee Phone Number</label>
						<input
							type="phone"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="phoneNumber"
							placeholder="Employee phone number"
						/>
					</div>
					<button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}
