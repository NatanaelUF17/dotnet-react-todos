import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import store from '../../stores/store';
import { addTodo } from '../../stores/actions/todos.actions';
import { useDispatch } from 'react-redux';


function TodosDashboard() {
  const [todo, setTodo] = useState({ name: '', isDone: false, createdAt: new Date().toISOString() });
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = { ...todo, name: event.target.value };
    setTodo(newTodo);
  }

  const addTodoToStore = () => {
    dispatch(addTodo(todo));
    setTodo(prev => ({ ...prev, name: '' }));
  }

  const logState = () => {
    console.log('first log: ', store.getState().todos);
    const log = store.subscribe(addTodoToStore)
    console.log('second log: ', store.getState().todos);
    log()
    console.log('third log', store.getState().todos);
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Todos ✅
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Let's track all of our todos!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <TextField sx={{ width: '80%' }} label="Enter todo" variant='outlined' value={todo.name} onChange={(event) => handleAddTodo(event)} />
            <Button sx={{ width: '30%' }} variant="contained" onClick={addTodoToStore}>Add</Button>
            <Button sx={{ width: '30%' }} variant="contained" onClick={logState}>Log state</Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}

export default TodosDashboard;