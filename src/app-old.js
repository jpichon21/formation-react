import React from 'react'
import { HashRouter } from 'react-router-dom' // ou BrowserRouter
import { Route, Switch, Redirect } from 'react-router'


import { Component, Fragment } from 'react'
import Clock from './components/clock'
import Counter from './components/counter'
import { hot } from 'react-hot-loader'
import MyForm from './components/my-form';

class App extends Component {
  render () {
      //on render le component Clock 
    return(
        <Fragment>
        <MyForm></MyForm>
            <h1> Hello world ! </h1>
            <Counter intervalcount={1000}></Counter>
            <Clock /> 
            <Clock />
            <Clock />
            <Clock />
            <Clock />
        </Fragment>
    )
  }
}

export default hot(module)(App)