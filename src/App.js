import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import '../node_modules/semantic-ui/dist/semantic.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Switch>
           <Route exact path="/" component={Home} />
         </Switch>
        </div>
   </Router>
    );
  }
}

export default App
