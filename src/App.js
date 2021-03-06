import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import ProjectContainer from "./components/ProjectContainer"
import ContactForm from "./components/ContactForm"
import About from "./components/About"
import NavBar from "./components/NavBar"
import NoMatch from "./components/NoMatch"

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
            <Route path="/projects" render={(props) => <ProjectContainer {...props} />} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/contact" component={ContactForm} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
