import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="home">
        <h1>Welcome to Event Planner!</h1>
        <p>Discover and join the best events around you.</p>
        <div className="featured-events">
            <h2>Featured Events</h2>
            <p>Check out the latest events happening!</p>
        </div>
    </div>
    );
};

export default Home;