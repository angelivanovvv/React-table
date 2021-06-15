import { put, call } from 'redux-saga/effects';

import * as actions from './../actions/passengersActions';

import api from '../../api/api';

export function* passengersSaga({ payload }) {
	yield put(actions.fetchPassengers());
	try {
		const response = yield call(
			api.getPassengers,
			payload.page,
			payload.size
		);
		yield put(actions.passengersSuccess(response));
	} catch (error) {
		yield put(actions.passengersFaild(error));
	}
}

export default passengersSaga;
