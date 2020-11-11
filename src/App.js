import React, {useEffect} from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import WorkExperience from './Pages/Work/Experience';
import Projects from './Pages/Project/Projects';
import Footer from './Components/Footer/Footer';
import ContactMe from './Pages/ContactMe/ContactMe';


function App() {

  useEffect(() => {
    document.title = "Helen Murphy";
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/experience" exact component={WorkExperience} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contactme" exact component={ContactMe} />
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
