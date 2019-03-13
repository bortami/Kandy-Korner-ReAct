import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StoreList extends Component {
	render() {
		return (
			<React.Fragment>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						this.props.history.push('/new');
					}}
				>
					Add Location
				</button>
				<article>
					<h1>Store List</h1>
					{this.props.locations.map((singleStore) => {
						return (
							<div>
								<p key={singleStore.id}>
									{singleStore.name} Address: {singleStore.address}
								</p>
								<Link className="nav-link" to={`/${singleStore.id}`}>
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
