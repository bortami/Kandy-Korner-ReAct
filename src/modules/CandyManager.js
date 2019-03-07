const remoteURL = 'http://localhost:5002';
const CandyManager = {
	allCandywithType: () => {
		return fetch(`${remoteURL}/candies?_expand=type`).then((r) => r.json());
	},
	deleteAndListCandy: (id) => {
		return fetch(`${remoteURL}/candies/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				return fetch(`${remoteURL}/candies?_expand=type`).then((e) => e.json());
			});
	},
	getSingleCandy: (id) => {
		return fetch(`${remoteURL}/candies/${id}?_expand=type`).then((e) => e.json());
	}
};

export default CandyManager;
