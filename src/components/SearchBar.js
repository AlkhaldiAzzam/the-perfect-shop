import React, { Component } from 'react'
import { Box } from 'grommet'
import { Button , InputGroup, FormControl} from 'react-bootstrap'

export default class SearchBar extends Component {
    render() {
        return (

            <Box margin='large'  border='all'>

    <InputGroup sice='lg'>
    <FormControl
      placeholder="Filter"
      aria-label="Search"
      aria-describedby="basic-addon2"
      size='lg'
    />
  </InputGroup>
  
            </Box>

            
        )
    }
}
