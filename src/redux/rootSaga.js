import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './../constants/actionTypes';

import passengersSaga from './sagas/passengersSaga';

function* rootSaga() {
	yield takeEvery(actionTypes.INIT_PASSENGERS, passengersSaga);
}

export default rootSaga;
