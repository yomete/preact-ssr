import { h } from 'preact'
import Router from 'preact-router'

import { App } from "./App";
import { About } from "./About";

export default () => (
	<Router>
		<App path="/" />
		<About path="/about" />
	</Router>
)
