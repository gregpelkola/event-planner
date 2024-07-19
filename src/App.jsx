import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login'; 
import Register from './components/auth/register'; 
import EventList from './components/events/eventList'; 
import AddEvent from './components/events/addEvent'; 
import EditEvent from './components/events/editEvent'; 
import EventDetail from './components/events/eventDetail'; 
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/Home'; 
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/events" element={<EventList />} /> 
          <Route path="/event/:id" element={<EventDetail />} /> 
          <Route path="/add-event" element={<AddEvent />} /> 
          <Route path="/edit-event/:id" element={<EditEvent />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;