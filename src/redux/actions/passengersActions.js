import * as actionTypes from '../../constants/actionTypes';
import { transformResponse, transformError } from '../../utils/helpers';

export const fetchPassengers = () => ({
	type: actionTypes.FETCH_PASSENGERS,
});

export const passengersSuccess = (response) => ({
	type: actionTypes.PASSENGERS_SUCCESS,
	payload: transformResponse(response),
});

export const passengersFaild = (error) => ({
	type: actionTypes.PASSENGERS_FAILD,
	payload: transformError(error),
});
