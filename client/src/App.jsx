import React from 'react';
import AppBar from '@mui/material/AppBar';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodosDashboard from './components/todos/TodosDashboard';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PlaylistAddCheckRoundedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Todos with Redux!
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<TodosDashboard />} />
        <Route />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;