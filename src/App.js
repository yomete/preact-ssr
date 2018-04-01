import { h } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'unistore/preact'

import { actions } from './store/store'

export const App = connect('count', actions)(
    ({ count, increment, decrement }) => (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  )