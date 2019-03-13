import React, { Component } from 'react';


export default class LocationDetail extends Component {
	render() {
		const location = this.props.locations.find((a) => a.id === parseInt(this.props.match.params.locationId)) || {};
		return (
			<section className="location">
				<div key={location.id} classNamme="card">
					<h4 className="card-title">
						<img src={fry} className="icon--emp" alt="" />

						<h6 className="card-title">{location.name}</h6>
						
						<a
							href="#"
							onClick={() =>
								this.props.deleteLocation(location.id).then(() => this.props.history.push('/locations'))}
							className="card-link"
						>
							Fire
						</a>
					</h4>
				</div>
			</section>
		);
	}
}
