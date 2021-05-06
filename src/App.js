import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';


function App() {
  return (
      <Router>   
        <div className="navbar-container">
          <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
