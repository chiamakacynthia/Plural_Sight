
import React from 'react'
import Header from './Cynthia/Header'
import DropMenu from './Cynthia/DropMenu'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Platform from './Cynthia/Platform'
import Resources from './Cynthia/Resources'
import Homepage from './Stella/Homepage'

import Footer from './Cynthia/Footer'
import Dp from './Dp'
import 'antd/dist/antd.css'
const App = () => {
  return (
    <BrowserRouter>
    <Dp/>
    <Header/>
      <Switch>
  
        <Route exact path ="/plat" component={Platform}/>
        <Route exact path ="/" component={Homepage}/>
        <Route exact path ="/resource" component={Resources}/>
       
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
