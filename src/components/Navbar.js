import React, { Component } from 'react'
import {Grommet, Anchor, Box, Stack, Text} from 'grommet'
import {Cart} from 'grommet-icons'
import { Link } from 'react-router-dom';

// import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap'

export default class TheNavbar extends Component {


    constructor(props){
        super(props)
       
    }

    

    render() {

        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Azzam's Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>

     

    </ul>

    <Anchor size='large' reverse label={ <Link to='/cart'>Your Cart</Link>} icon={<Stack anchor="top-right">
  <Cart size="large" />
  <Box
    background="brand"
    pad={{ horizontal: 'xsmall' }}
    round
  >
    <Text>{this.props.cartNum}</Text>
  </Box>
</Stack>}/>
    
  </div>
</nav>
        );
    }
}
