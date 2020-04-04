import React, { Component } from 'react'
import { Box , Text, Button, Image} from 'grommet'
import { Row, Col } from 'react-bootstrap'
import {Cart} from 'grommet-icons'
import {Link} from 'react-router-dom'

export default class ItemPage extends Component {


    constructor(props){
        super(props)

        this.state ={
            item: {},
            quantity:1
        }
    }

    componentWillMount(){
        const allItems = this.props.allItems

        const itemId = this.props.match.params.id

        let theItem = {}

        allItems.forEach(item =>{
            if (item.id == itemId)
                theItem = item
            
        })

        this.setState({
            item: theItem
        })

        // console.log(theItem)


    }

    handleChange(e){

        console.log(e.target.value)

        let newItem = this.state.item
        newItem.quantity = e.target.value
        this.setState({
            item: newItem,
            quantity:e.target.value
        })

    }

    

    render() {
        return (
            <Box  margin="large" border="all" height="xlarge">
                <Row>
                    <Col>
                    <Box margin='large' >

                <Image
                src={this.state.item.img}
                fit='contain'
                />
                </Box>
                    </Col>

                    <Col>
                    <Box align='end' margin='large'>

            <Text size="xxlarge">{this.state.item.name}</Text>
            <div className="mt-5">

        <Text>{this.state.item.desc}</Text>
            </div>
                    </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Box align="center">

                    <label>Quantity:</label>
                    <input onChange={(e)=>this.handleChange(e)} type="number" value={this.state.quantity}/>

                <Box width='medium' margin="medium"> 
                <Link to='/thanks'>


                    <Button
                    label="Add to Cart"
                    icon={<Cart />}
                    color='accent-1'
                    primary
                    fill='true'   
                    
                    onClick={() =>  this.props.addItem(this.state.item)}
                    
                    
                    />
                    </Link>
                    </Box>
                    </Box>
                    </Col>
                </Row>

            </Box>
        )
    }
}
