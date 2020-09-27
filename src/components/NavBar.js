import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink exact to='/'>Home</NavLink> <br></br>
      <NavLink exact to='/movies'>Movies</NavLink> <br></br>
      <NavLink exact to='/directors'>Directors</NavLink>    
      <NavLink exact to='/actors'>Actors</NavLink><br></br>
    </div>
  );
};

export default NavBar;
