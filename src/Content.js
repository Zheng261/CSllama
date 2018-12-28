import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from './Home'
import {CS109} from './CS109'
import {About} from './About'
import {FAQ} from './FAQ'
import {Contact} from './Contact'


const Content = () => {
  return (
 	
    <Switch >
        <Route exact path="/" component={Home}/>
        <Route path="/cs109" component={CS109}/>
        <Route path="/about" component={About}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/contact" component={Contact}/>
     </Switch>

  )
}

export default Content