import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import Header from './components/header'
import ControlPage from './components/controller-page'
import CommentApprovePage from './components/comment-approve-page'
import { Route, HashRouter, Switch } from "react-router-dom"
import configure from './components/custom-module'
import Error from './components/error'
import Authentication from './components/authentication'

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
          <Authentication path="/control/:event_id/:user_id" exact component={ControlPage} />
          <Authentication path="/approver/:event_id/:user_id" exact component={CommentApprovePage} />
          <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
      </HashRouter>
      <Error />
    </Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))