import React, { Component } from 'react'
import {Checkmark} from 'grommet-icons'
import { Box, Text , Button} from 'grommet'
import { Link } from 'react-router-dom'
export default class ThankyouPage extends Component {
    render() {
        return (
            <div className="mt-5">

            <Box align='center' margin='xlarge' border='all'>
                <div className="m-5">

                <Text size='xlarge'>Thank You</Text>
                </div>

                <div className="mb-5">

                <Checkmark size="xlarge"/>
                </div>

                <Link to='/the-perfect-shop/cart'> <Button primary color='accent-1' label="To Cart?"/></Link>

                <Box margin='large'>
                    <Link to='/the-perfect-shop/'><Button primary color='accent-1' label="To Main Page?"/></Link>
                </Box>


            </Box>
            </div>
        )
    }
}
