import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './components/auth/login';
import register from './components/auth/register';
import eventList from './components/events/eventList';
import addEvent from './components/events/addEvent';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
          <Route path="/events" component={eventList} />
          <Route path="/add-event" component={addEvent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;