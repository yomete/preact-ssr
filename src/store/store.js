import createStore from 'unistore'

import { Provider, connect } from 'unistore/preact'

export let actions = store => ({
	increment(state) {
		return { count: state.count + 1 }
	},
	decrement(state) {
		return { count: state.count - 1 }
	}
})

export default initialState => createStore(initialState)