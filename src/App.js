import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import FrontPage from "./containers/FrontPage"
import ProjectContainer from "./components/ProjectContainer"
import ContactForm from "./components/ContactForm"
import About from "./components/About"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import '../node_modules/semantic-ui/dist/semantic.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/projects" render={(props) => <ProjectContainer {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
