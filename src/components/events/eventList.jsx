import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../actions/eventActions';
import { List, ListItem, ListItemText, Container, Typography } from '@material-ui/core';

const eventList = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Events
                </Typography>
                <List>
                    {events.map((event) => (
                        <ListItem key={event.id}>
                            <ListItemText primary={event.title} secondary={event.date} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Container>
    );
};

export default eventList;