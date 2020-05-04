import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import Header from './components/header'
import ControlPage from './components/page-control'
import messageApprovePage from './components/page-approve'
import { Route, HashRouter, Switch } from "react-router-dom"
import configure from './components/custom-module'
import Error from './components/error'

configure({
  api_url: 'https://95zj2rj7ng.execute-api.us-east-2.amazonaws.com/Dev',
  socket_url: 'wss://k1qgj64ibe.execute-api.us-east-2.amazonaws.com/Dev'
})

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/control/:event_id/:user_id" exact component={ControlPage} />
          <Route path="/approver/:event_id/:user_id" exact component={messageApprovePage} />
          <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
      </HashRouter>
      <Error />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))