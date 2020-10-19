import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import WorkExperience from './Pages/Work/Experience';
import About from './Pages/About';
import Projects from './Pages/Project/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <br/><br/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/experience" component={WorkExperience} />
            <Route path="/about" exact component={About} /> 
            <Route path="/projects" exact component={Projects} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
