import React from 'react';

import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';

import initStore from './redux/store';
import rootSaga from './redux/rootSaga';

import Layout from './components/Layout/Layout';

import GlobalStyle from './globalStyles';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = initStore(history, sagaMiddleware);

sagaMiddleware.run(rootSaga);

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<GlobalStyle />
			<Layout />
		</ConnectedRouter>
	</Provider>
);

export default App;
