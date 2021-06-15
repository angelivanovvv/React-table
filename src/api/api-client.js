import axios from 'axios';

import config from './api-config';

import { errorComposer } from '../utils/helpers';
import { errorHandler } from '../redux/actions/actions';

const { url } = config;

const instance = axios.create({
	baseURL: url,
});

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		errorComposer(error, errorHandler);
		return Promise.reject(error);
	}
);

export default instance;
