import { fromJS } from 'immutable';

const initialState = fromJS({
	passengers: {
		isLoading: true,
		error: false,
		errorMessage: null,
		response: {
			totalPassengers: 0,
			totalPages: 0,
			data: [],
		},
	},
});

export default initialState;
