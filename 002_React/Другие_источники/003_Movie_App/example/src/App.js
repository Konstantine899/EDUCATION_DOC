//App
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Add } from './components/Add.js';
import { Header } from './components/Header.js';
import { Watched } from './components/Watched.js';
import { Watchlist } from './components/Watchlist.js';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './components/context/GlobalState.js';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
