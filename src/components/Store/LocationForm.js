import React, { Component } from 'react';

export default class LocationForm extends Component {
	state = {
		name: '',
		address: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructNewLocation = (e) => {
		e.preventDefault();
		const location = {
			name: this.state.name,
            address: this.state.address
		};
		this.props.addLocation(location).then(() => this.props.history.push('/'));
	};

	render() {
		return (
			<React.Fragment>
				<form className="locationForm">
					<div className="form-group">
						<label htmlFor="name">Location Name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="name"
							placeholder="Location name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Location Address</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="address"
							placeholder="address"
						/>
					</div>

					<button type="submit" onClick={this.constructNewLocation} className="btn btn-primary">
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}
