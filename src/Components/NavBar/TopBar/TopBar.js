import React, { Component } from 'react';

import Breadcrumb from '../Breadcrumbs/Breadcrumbs'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,Spinner } from 'reactstrap';



class TopBar extends Component {
  
  state = {

    name:'ysf'
  }
 
  
  inputChange = (e) =>{
    this.setState({
   
name : e.target.value
    })
  }
    render() {
      return (
       

        <div>
      
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LOGO Here</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
             
             
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">yoaussef.boujlal</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sign out
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Breadcrumb />
      
      </div>
      
      );
      
    }
    
  }
  
  
export default TopBar;