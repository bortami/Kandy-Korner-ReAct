import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import CandyList from './components/Candy/candies';
import LocationList from './components/Store/stores';
import EmployeeList from './components/Employees/employees';
import EmployeeManager from './modules/EmployeesManager';
import LocationManager from './modules/LocationsManager';
import CandyManager from './modules/CandyManager';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		candy: []
	};
	deleteCandy = (id) => {
		CandyManager.deleteAndListCandy(id).then((candies) => this.setState({ candy: candies }));
	};
	componentDidMount() {
		const newState = {};
		EmployeeManager.allEmployees().then((parsedEmployees) => {
			newState.employees = parsedEmployees;
			LocationManager.allLocations().then((parsedLocations) => {
				newState.locations = parsedLocations;
				CandyManager.allCandywithType().then((parsedCandy) => {
					newState.candy = parsedCandy;
					this.setState(newState);
				});
			});
		});
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
