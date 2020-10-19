import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import WorkExperience from './Pages/Work/Experience';
import Projects from './Pages/Project/Projects';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/experience" exact component={WorkExperience} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
