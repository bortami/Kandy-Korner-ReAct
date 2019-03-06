import React, { Component } from 'react';

export default class CandyList extends Component {
	render() {
		return (
			<article>
				<h1>Candy List</h1>
				{this.props.candy.map((candy) => {
					return (
						<div key={candy.id}>
							{candy.candyName} -
							{this.props.candyTypes.find((candytype) => candytype.id === candy.candyType).type}
						</div>
					);
				})}
			</article>
		);
	}
}
