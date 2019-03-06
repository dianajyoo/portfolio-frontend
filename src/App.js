import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import ContactForm from "./components/ContactForm"
import About from "./components/About"
import ProjectContainer from "./components/ProjectContainer"
import NavBar from "./components/NavBar"

import '../node_modules/semantic-ui/dist/semantic.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/projects" render={(props) => <ProjectContainer {...props} />} />
           <Route path="/contact" component={ContactForm} />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App
