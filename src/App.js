import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Characters from './Characters';
import Character from './Character';
import './App.css';

export const NetworkContext = React.createContext(null)

function App() {
  const [delay, setDelay] = useState(0)

  return (
    <div className="App">
      <NetworkContext.Provider value={{ delay, setDelay }}>
        <Router>
          <Switch>
            <Route exact path="/characters" component={Characters} />
            <Route path="/character/:characterId" component={Character} />
            <Redirect from="/" to="/characters" />
          </Switch>
        </Router>
      </NetworkContext.Provider>
    </div>
  );
}

export default App;
