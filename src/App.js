import React from 'react';
import TopBar from "./Components/TopBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import WorkExperience from './Pages/Experience';
import About from './Pages/About';
import Projects from './Pages/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
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
