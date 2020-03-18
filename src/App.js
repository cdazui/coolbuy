import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import loadable from "react-loadable"
// 引入loading
import Loading from "./components/loading"
// 路由懒加载
const Home =loadable({
  loader:_=>import("./pages/home"),
  loading:Loading
})

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact/>
        <Route path="/home" render={()=>{
          return <Home />
        }}></Route>
      </Switch>
    )
  }
}
