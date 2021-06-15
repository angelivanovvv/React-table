import * as actionTypes from '../../constants/actionTypes';

export const initPassengers = (page, size) => ({
	type: actionTypes.INIT_PASSENGERS,
	payload: {
		page,
		size,
	},
});
