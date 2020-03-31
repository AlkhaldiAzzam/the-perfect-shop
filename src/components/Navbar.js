import React, { Component } from 'react'
import {Grommet, Anchor, Box, Stack, Text} from 'grommet'
import {Cart} from 'grommet-icons'

import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap'

export default class TheNavbar extends Component {


    state={
        cart: 0
    }

    render() {

        
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Azzam's Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>

    <Anchor href='#' size='large' reverse label='Your Cart' icon={<Stack anchor="top-right">
  <Cart size="large" />
  <Box
    background="brand"
    pad={{ horizontal: 'xsmall' }}
    round
  >
    <Text>{this.state.cart}</Text>
  </Box>
</Stack>}/>
    
  </div>
</nav>
        );
    }
}
