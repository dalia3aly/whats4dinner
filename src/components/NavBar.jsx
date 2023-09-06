import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RecipeSearch from './RecipeSearch';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* KILL THE NAVBAR */}
        <Link to="/">
          <img src="./src/assets/logo.png" alt="Logo" style={{ height: 100 }} />
        </Link>

        {/* All Recipes link */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/recipes">
          Recipes By Cuisine
          </Link>
        </Typography>

        {/* Contact */}
        <Typography variant="h6">
        <Link to="/SignUp">
          Join Us
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
