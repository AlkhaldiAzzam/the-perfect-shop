import React, { Component } from 'react'
import Item from './Item'
import { Box } from 'grommet'

export default class ItemsContainer extends Component {
    render() {
        return (
            <Box margin='xlarge'>

                <Item/>
            </Box>
            
        )
    }
}
