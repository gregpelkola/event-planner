import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

const eventDetail = () => {
    const { id } = useParams();
    const event = useSelector((state) => state.events.find((e) => e.id === id));

    return (
        <Container component="main" maxWidth="md">
            <div>
                <Typography component="h1" variant="h5">
                    {event.title}
                </Typography>
                <Typography variant="body1">{event.description}</Typography>
                <Typography variant="body2">Date: {event.date} at {event.time}</Typography>
                <Typography variant="body2">Location: {event.location}</Typography>
            </div>
        </Container>
    );
};

export default eventDetail;