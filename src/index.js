import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import LandingPage from './components/landing-page'
import ControlPage from './components/control-page'
import messageApprovePage from './components/message-approve-page'
import { Route, HashRouter, Switch } from "react-router-dom"
import configure from './components/custom-module'

configure({
  api_url: 'https://95zj2rj7ng.execute-api.us-east-2.amazonaws.com/Dev',
  socket_url: 'wss://k1qgj64ibe.execute-api.us-east-2.amazonaws.com/Dev'
})
const Hello = () => {
  return <h1>404</h1>
}
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/:event_id/:user_id" exact component={LandingPage} />
          <Route path="/control/:event_id/:user_id" exact component={ControlPage} />
          <Route path="/message-approver/:event_id/:user_id" exact component={messageApprovePage} />
          <Route path="/" component={Hello} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))