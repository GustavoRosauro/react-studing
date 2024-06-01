import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, CssBaseline, Box, Button } from '@mui/material';
import './App.css';
import Form from './component/form';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit" component={Link} to="/form">
              Form
            </Button>
            <Button color="inherit" component={Link} to="/">
              Main
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/" element={this}/>
          </Routes>
          
        </Box>
      </Box>
    </Router>
  );
}

export default App;
