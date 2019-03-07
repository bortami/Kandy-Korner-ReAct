import React, { Component } from 'react';

export default class CandyList extends Component {
	render() {
		return (
			<article>
				<h1>Candy List</h1>
				{this.props.candy.map((candy) => {
					return (
						<div key={candy.id}>
							<button className="card-link" onClick={() => {this.props.deleteCandy(candy.id)}} >Delete</button>
							{candy.candyName} -
							{candy.type.type}
						</div>
					);
				})}
			</article>
		);
	}
}
