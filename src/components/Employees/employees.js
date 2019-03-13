import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmployeeList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="employeeButton">
					<button
						type="button"
						className="btn btn-success"
						onClick={() => {
							this.props.history.push('/employees/new');
						}}
					>
						Hire Employee
					</button>
				</div>
				<section className="employees">
					{this.props.employees.map((singleEmployee) => (
						<div key={singleEmployee.id} className="card">
							<div className="card-body">
								<h5 className="card-title">
																		{singleEmployee.name}
									<Link className="nav-link" to={`/employees/${singleEmployee.id}`}>
										Details
									</Link>
									<button
										className="card-link"
										onClick={() => this.props.fireEmployee(singleEmployee.id)}
									>
										Fire
									</button>
								</h5>
							</div>
						</div>
					))}
				</section>
			</React.Fragment>
		);
	}
}

