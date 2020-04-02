import React, { Component } from 'react'
import {Checkmark} from 'grommet-icons'
import { Box, Text } from 'grommet'
import { Link } from 'react-router-dom'
export default class ThankyouPage extends Component {
    render() {
        return (
            <div className="mt-5">

            <Box align='center' margin='xlarge'>
                <div className="m-5">

                <Text size='xlarge'>Item Has Been Added</Text>
                </div>

                <div className="mb-5">

                <Checkmark size="xlarge"/>
                </div>

                <Link to='/cart'>Check Out?</Link>

                <Box margin='large'>
                    <Link to='/'>Go Back</Link>
                </Box>


            </Box>
            </div>
        )
    }
}
