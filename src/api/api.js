import axios from './api-client';

const api = Object.freeze({
	getPassengers: (page, size) => {
		const defaultPage = 0;
		const defaultSize = 10;

		if (!page && !size)
			return axios.get(
				`/passenger?page=${defaultPage}&size=${defaultSize}`
			);
		if (!page)
			return axios.get(`/passenger?page=${defaultPage}&size=${size}`);
		if (!size)
			return axios.get(`/passenger?page=${page}&size=${defaultSize}`);

		return axios.get(`/passenger?page=${page}&size=${size}`);
	},
});

export default api;
