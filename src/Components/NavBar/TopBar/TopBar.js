import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import RightBar from '../RightBar/RighBar';

class TopBar extends Component {
  
    render() {
         


      return   (
        <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Homedd</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

    
    </div>
  </Router>
      )

    
      
    }
  }
  
export default TopBar;