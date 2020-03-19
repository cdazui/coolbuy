import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import {
  Home,
  Classify,
  Find,
  Cart,
  Mine
} from "@pages"

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" render={() => {
          return <Home />
        }}></Route>
        <Route path="/classify" render={()=>{
          return <Classify/>
        }}></Route>
        <Route path="/find" render={()=>{
          return <Find/>
        }}></Route>
        <Route path="/cart" render={()=>{
          return <Cart/>
        }}></Route>
        <Route path="/mine" render={()=>{
          return <Mine/>
        }}></Route>
      </Switch>
    )
  }
}
