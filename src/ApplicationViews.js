import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import CandyList from './components/Candy/candies';
import LocationList from './components/Store/stores';
import EmployeeList from './components/Employees/employees';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		candy: []
	};
	deleteCandy = (id) => {
		return fetch(`http//localhost:5002/candies/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				fetch(`http://localhost:5002/candies?_expand=type`)
					.then((e) => e.json())
					.then((candies) => this.setState({ candy: candies }));
			});
	};
	componentDidMount() {
		const newState = {};
		fetch('http://localhost:5002/employees')
			.then((employees) => employees.json())
			.then((parsedEmployees) => {
				newState.employees = parsedEmployees;
				return fetch('http://localhost:5002/locations');
			})
			.then((locations) => locations.json())
			.then((parsedLocations) => {
				newState.locations = parsedLocations;
				return fetch('http://localhost:5002/candies?_expand=type');
			})
			.then((r) => r.json())
			.then((parsedCandy) => {
				newState.candy = parsedCandy;
			})
			.then(() => this.setState(newState));
	}

	render() {
		return (
			<div className="container-div">
				<Route
					exact
					path="/"
					render={(props) => {
						return <LocationList locations={this.state.locations} />;
					}}
				/>
				<Route
					path="/candy"
					render={(props) => {
						return <CandyList candy={this.state.candy} deleteCandy={this.deleteCandy} />;
					}}
				/>
				<Route
					path="/employees"
					render={(props) => {
						return <EmployeeList employees={this.state.employees} />;
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
