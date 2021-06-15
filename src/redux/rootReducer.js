import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import passengersReducer from './reducers/passengersReducer';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		passengers: passengersReducer,
	});

export default rootReducer;
