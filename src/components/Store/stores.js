import React, { Component } from 'react';

export default class StoreList extends Component {
	render() {
		return (
			<article>
				<h1>Store List</h1>
				{this.props.locations.map((singleStore) => {
					return (
						<p key={singleStore.id}>
							{singleStore.name} Address: {singleStore.address}
						</p>
					);
				})}
			</article>
		);
	}
}
