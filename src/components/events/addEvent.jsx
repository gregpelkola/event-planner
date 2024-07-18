import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { addEvent } from '../../actions/eventActions';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const dispatch = useDispatch();

    const handleAddEvent = () => {
        dispatch(addEvent(title, description, date, time, location));
    };

    return (
    <Container component="main" maxWidth="xs">
        <div>
            <Typography component="h1" variant="h5">
                Add Event
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
                    onClick={handleAddEvent}
                >
                    Add Event
                </Button>
            </form>
        </div>
    </Container>
    );
};

export default AddEvent;