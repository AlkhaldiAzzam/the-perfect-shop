import React, { Component } from 'react'
import { Box ,Button,Text, Paragraph} from 'grommet'
import {Cart} from 'grommet-icons'
import {Card} from 'react-bootstrap'

import '../css/style.css'
import { Link } from 'react-router-dom'

export default class Item extends Component {

    constructor(props){
        super(props)

        this.state = props.item
    }
    



    render() {
        return (
            <Box align='stretch' margin='small'>

<Card style={{ width: '20rem' }} >
  <Card.Img variant="top" src={this.state.img} />
  <Card.Body>
        <Card.Title> <Text size='xlarge'>{this.state.name}</Text> </Card.Title>
    <Card.Text>

        <Paragraph size='medium'>{this.state.desc}</Paragraph>
    </Card.Text>
        <Card.Text>Price: {this.state.price} SR</Card.Text>
        <Link to={`/the-perfect-shop/item/${this.state.id}`}> <Button
    icon={<Cart />}
    color='accent-1'
    focusIndicator='false'
    primary
    fill='true'
  label= 'View Page'
   
/></Link>
    
  </Card.Body>
</Card>

             </Box>

        )
    }
}
