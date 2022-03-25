import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { createStore } from "redux"
import reducer from "./redux/reducer"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path={`/ethereum/:address`}>
					<App />
				</Route>
				<Route path="/">
					<h1>Please input Token Address you want to see.</h1>
					<h3>
						e.g.
						http://nifytools.com/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8
					</h3>
				</Route>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
)
