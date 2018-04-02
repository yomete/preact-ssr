import { h } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'unistore/preact'

import { actions } from './store/store'

export const App = connect('count', actions)(
    ({ count, increment, decrement }) => (
      <div class="count">
        <p>{count}</p>
        <button class="increment-btn" onClick={increment}>Increment</button>
        <button class="decrement-btn" onClick={decrement}>Decrement</button>
        <Link href="/about">About</Link>
      </div>
    )
  )