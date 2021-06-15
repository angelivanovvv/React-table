import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPassengers } from './../redux/selectors/passengersSelectors';

import { initPassengers } from './../redux/actions/initActions';

const usePassengers = () => {
	const dispatch = useDispatch();

	const passengers = useSelector((state) => getPassengers(state));
	let isLoading, error, response;

	if (passengers) {
		isLoading = passengers?.get('isLoading');
		error = passengers?.get('error');
		response = passengers?.get('response').toJS();
	}

	const fetchPassengers = useCallback(
		(page, size) => dispatch(initPassengers(page, size)),
		[dispatch]
	);

	return {
		isLoading,
		error,
		response,
		fetchPassengers,
	};
};

export default usePassengers;
