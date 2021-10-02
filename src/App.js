
import React from 'react'
import Header from './Cynthia/Header'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Homepage from './Stella/Homepage'
import Footer from './Cynthia/Footer'
import Individual from "./Stella/Individual/MainI"
import 'antd/dist/antd.css'
import Assestment from './Christo/Assestment.js'
import SignIn from './Christo/SignIn.js'
import Main from './Stella/Blog/Main'
import Flow from "./Christo/Flow"


const App = () => {
  return (
    <BrowserRouter>
   
    <Header/>
      <Switch>
        <Route exact path ="/" component={Homepage}/>
        <Route exact path ="/assess" component={Assestment}/>
        <Route exact path ="/flow" component={Flow}/>
        <Route exact path ="/blog" component={Main}/>
        <Route exact path ="/individual" component={Individual}/>
        <Route exact path ="/SignIn" component={SignIn}/>      
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
