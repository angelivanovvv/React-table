import * as actionTypes from '../../constants/actionTypes';
import initialState from '../initialState';

const passengersState = initialState.get('passengers');

const passengersReducer = (state = passengersState, { type, payload }) => {
	switch (type) {
		case actionTypes.FETCH_PASSENGERS:
			return state
				.set('isLoading', true)
				.set('error', false)
				.set('errorMessage', null);
		case actionTypes.PASSENGERS_SUCCESS:
			return state
				.set('isLoading', false)
				.set('response', payload)
				.set('error', false)
				.set('errorMessage', null);
		case actionTypes.PASSENGERS_FAILD:
			return state
				.set('isLoading', false)
				.set('error', true)
				.set('errorMessage', payload)
				.set('response', initialState.get('passengers'));
		default:
			return state;
	}
};

export default passengersReducer;
