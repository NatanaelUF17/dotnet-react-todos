import React from 'react';
import { Container, Grid } from '@mui/material';
import CardItem from '../common/CardItem';
import store from '../../stores/store';

function TodosList() {
    const todos = store.getState().todos;

    return (
        <Container sx={{ marginTop: 5, marginBottom: 5 }}>
            <Grid container spacing={2}>
                {todos.todos.map((todo, index) => (
                    <Grid item md={4} key={index}>
                        <CardItem todo={todo} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TodosList;