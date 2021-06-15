import * as actionTypes from '../../constants/actionTypes';

export const errorHandler = (error) => ({
	type: actionTypes.ERROR_HANDLER,
	payload: error,
});
