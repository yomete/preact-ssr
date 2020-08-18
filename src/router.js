import { h } from 'preact'
import Router from 'preact-router'

import { App } from "./App";
import { About } from "./About";

export default ({ url }) => (
	<Router url={url}>
		<App path="/" />
		<About path="/about" />
	</Router>
)
