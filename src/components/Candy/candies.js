import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CandyList extends Component {
	render() {
		return (
			<React.Fragment>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						this.props.history.push('/candy/new');
					}}
				>
					Add Candy
				</button>
				<article>
					<h1>Candy List</h1>
					{this.props.candy.map((candy) => {
						return (
							<div key={candy.id}>
								<button
									className="card-link"
									onClick={() => {
										this.props.deleteCandy(candy.id);
									}}
								>
									Delete
								</button>
								{candy.candyName} -
								{candy.type.type}
								<Link className="nav-link" to={`/candy/${candy.id}`}>
									Details
								</Link>
							</div>
						);
					})}
				</article>
			</React.Fragment>
		);
	}
}
