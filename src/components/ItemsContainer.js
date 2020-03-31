import React, { Component } from 'react'
import Item from './Item'
import { Box } from 'grommet'
import {Container, Col, Row} from 'react-bootstrap'
import '../css/style.css'
export default class ItemsContainer extends Component {
    render() {

        let itemsList = []
        for (let i = 0; i < 5; i++){

            itemsList.push(<Row>
                <Col>
                <Item/>
                </Col>
                <Col>
                <Item/>
                </Col>
                <Col>
                <Item/>
                </Col>
            </Row>)


        }
        return (
            <Box margin='xlarge' alignContent='center' border='all'>

            {itemsList}
            </Box>
            
        )
    }
}
