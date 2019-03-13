import React, { Component } from 'react';

export default class CandyDetail extends Component {
	render() {
		const candy = this.props.candy.find((a) => a.id === parseInt(this.props.match.params.candyId)) || {};
		return (
			<section className="candy">
				<div key={candy.id} classNamme="card">
					<h4 className="card-title">
						<h6 className="card-title">{candy.candyName}</h6>
						<p>Type: {candy.type.type}</p>
						<a
							href="#"
							onClick={() =>
								this.props.deleteCandy(candy.id).then(() => this.props.history.push('/candy'))}
							className="card-link"
						>
							Delete
						</a>
					</h4>
				</div>
			</section>
		);
	}
}
