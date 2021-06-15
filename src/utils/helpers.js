import { fromJS } from 'immutable';

export const errorComposer = (error, action) => {
	return () => {
		const statusCode = error.response ? error.response.status : null;
		if (statusCode === 404) {
			action('The requested resource does not exist or has been deleted');
		}

		if (statusCode === 401) {
			action('Please login to access this resource');
		}
	};
};

export const transformResponse = (response) =>
	response ? fromJS(response?.data) : response?.data;

export const transformError = (error) => {
	console.log(error.response);
	return error
		? fromJS({
				status: error?.response?.status,
				statusText: error?.response?.statusText,
				errors: error?.response?.body,
		  })
		: error?.response;
};

export const arrayToObject = (item) => {
	let object = {};

	if (Array.isArray(item)) item.forEach((element) => (object = element));
	else object = item;

	return object;
};

export const modifyResponse = (array) =>
	(array || []).map((item) => {
		return {
			trip_id: item._id,
			trip_name: item.trips,
			passenger_name: item.name,
			...arrayToObject(item.airline),
		};
	});
