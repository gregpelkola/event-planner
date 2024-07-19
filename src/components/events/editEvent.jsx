import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { editEvent, fetchEvents } from '../../actions/eventActions';

const EditEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events.find((e) => e.id === id));

    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [date, setDate] = useState(event.date);
    const [time, setTime] = useState(event.time);
    const [location, setLocation] = useState(event.location);

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDescription(event.description);
            setDate(event.date);
            setTime(event.time);
            setLocation(event.location);
        }
    }, {event});

    const handleEditEvent = () => {
        dispatch(editEvent({id, title, description, date, time, location}));
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                Edit Event
                </Typography>
                <form noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Event Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    label="Date"
                    type="date"
                    id="date"
                    autoComplete="date"
                    InputLabelProps={{ shrink: true }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="time"
                    label="Time"
                    type="time"
                    id="time"
                    autoComplete="time"
                    InputLabelProps={{ shrink: true }}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="location"
                    label="Location"
                    id="location"
                    autoComplete="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleEditEvent}
                >
                    Edit Event
                </Button>
                </form>
            </div>
        </Container>
    );
};

export default EditEvent;


