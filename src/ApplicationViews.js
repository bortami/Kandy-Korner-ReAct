import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import CandyList from './components/Candy/candies';
import LocationList from './components/Store/stores';
import EmployeeList from './components/Employees/employees';
import api from './modules/APIManager';
import CandyManager from './modules/CandyManager';
import LocationDetail from './components/Store/LocationDetail';
import LocationForm from './components/Store/LocationForm';
import EmployeeDetail from './components/Employees/EmployeeDetail';
import EmployeeForm from './components/Employees/EmployeeForm';

class ApplicationViews extends Component {
	state = {
		employees: [],
		locations: [],
		candy: []
	};
	deleteCandy = (id) => {
		CandyManager.deleteAndListCandy(id).then((candies) => this.setState({ candy: candies }));
	};
	deleteLocation = (id) => {
		api.deleteAndList('locations', id).then((locations) => this.setState({ locations: locations }));
	};
	deleteEmployee = (id) => {
		api.deleteAndList('employees', id).then((employees) => this.setState({ employees: employees }));
	};
	addLocation = (Location) =>
		api.post(Location, 'locations').then(() => api.all('locations')).then((locations) =>
			this.setState({
				locations: locations
			})
		);

	addEmployee = (employee) =>
		api
			.post(employee, 'employees')
			.then(() => api.all('employees'))
			.then((employees) => this.setState({ employees: employees }));

	componentDidMount() {
		const newState = {};
		api.all('employees').then((parsedEmployees) => {
			newState.employees = parsedEmployees;
			api.all('locations').then((parsedLocations) => {
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
						return <LocationList {...props} locations={this.state.locations} />;
					}}
				/>
				<Route
					path="/:locationId(\d+)"
					render={(props) => {
						return (
							<LocationDetail
								{...props}
								deleteLocation={this.deleteLocation}
								locations={this.state.locations}
							/>
						);
					}}
				/>
				<Route
					path="/locations/new"
					render={(props) => {
						return <LocationForm {...props} addLocation={this.addLocation} />;
					}}
				/>
				<Route
					path="/candy"
					render={(props) => {
						return <CandyList candy={this.state.candy} deleteCandy={this.deleteCandy} />;
					}}
				/>
				<Route
					exact
					path="/employees"
					render={(props) => {
						return (
							<EmployeeList
								{...props}
								employees={this.state.employees}
								fireEmployee={this.fireEmployee}
							/>
						);
					}}
				/>
				<Route
					path="/employees/:employeeId(\d+)"
					render={(props) => {
						return (
							<EmployeeDetail
								{...props}
								fireEmployee={this.fireEmployee}
								employees={this.state.employees}
							/>
						);
					}}
				/>
				<Route
					path="/employees/new"
					render={(props) => {
						return <EmployeeForm {...props} addEmployee={this.addEmployee} />;
					}}
				/>
			</div>
		);
	}
}

export default ApplicationViews;
