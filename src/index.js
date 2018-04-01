import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import './index.css';

import Router from './router'

import createStore from './store/store'

const app = document.getElementById('app')

const store = createStore(window.__STATE__)

render(
	<Provider store={store}>
		<Router />
	</Provider>,
	app,
	app.lastChild
)
