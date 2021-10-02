
import React from 'react'
import Header from './Cynthia/Header'
import DropMenu from './Cynthia/DropMenu'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Platform from './Cynthia/Platform'
import Resources from './Cynthia/Resources'
import Homepage from './Stella/Homepage'

import Footer from './Cynthia/Footer'

import 'antd/dist/antd.css'
import Product from './Cynthia/Product'
const App = () => {
  return (
    <BrowserRouter>
   
    <Header/>
      <Switch>
  
        <Route exact path ="/plat" component={Platform}/>
        <Route exact path ="/" component={Homepage}/>
        <Route exact path ="/resource" component={Resources}/>
        <Route exact path ="/pro" component={Product}/>
       
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
