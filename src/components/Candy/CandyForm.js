import React, { Component } from 'react';

export default class CandyForm extends Component {
	state = {
		candyName: '',
		typeId: ''
	};
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	constructNewCandy = (e) => {
		e.preventDefault();
		if (this.state.typeId === '') {
			window.alert('Please select a candy type');
		} else {
			const candy = {
				candyName: this.state.candyName,
				typeId: parseInt(this.state.typeId)
			};
			this.props.addCandy(candy).then(() => this.props.history.push('/candy'));
		}
	};

	render() {
		return (
			<React.Fragment>
				<form className="CandyForm">
					<div className="form-group">
						<label htmlFor="candyName">Candy name</label>
						<input
							type="text"
							required
							className="form-control"
							onChange={this.handleFieldChange}
							id="candyName"
							placeholder="Candy name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="type">Assign a Type</label>
						<select defaultValue="" name="type" id="typeId" onChange={this.handleFieldChange}>
							<option value="">Select a type</option>
							{this.props.types.map((e) => (
								<option key={e.id} id={e.id} value={e.id}>
									{e.type}
								</option>
							))}
						</select>
					</div>
					<button type="submit" onClick={this.constructNewCandy} className="btn btn-primary">
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}
