import React, { Component } from 'react'
import Item from './Item'
import { Box } from 'grommet'
import {Container, Col, Row} from 'react-bootstrap'
import '../css/style.css'
// import items from '../itemsList'
import Faker from 'faker'
export default class ItemsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }


    componentDidMount(){
       
        
        this.setState({
            items: this.props.items
        })
    }

    

    generateItems(){
        // console.log(this.state.items,"i am that func")



        let itemsList = []
        for (let i = 0; i < this.state.items.length;i+=3){
            
            itemsList.push(
            <Row key={i}>
                <Col>
                <Item key={this.state.items[i].id} item={this.state.items[i]} clickHandler={()=> this.props.clickHandler(this.state.items[i])}/>
                </Col>
                <Col>
                <Item key={this.state.items[i+1].id} item={this.state.items[i+1]} clickHandler={()=> this.props.clickHandler(this.state.items[i+1])}/>
                </Col>
                <Col>
                <Item key={this.state.items[i+2].id} item={this.state.items[i+2]} clickHandler={()=> this.props.clickHandler(this.state.items[i+2])}/>
                </Col>
            </Row>
            )
            // console.log(i)
            // i+=3
    
    
        }

        return itemsList

    }

    render() {

        return (
            <Box margin='xlarge' alignContent='center' border='all'>

            {this.generateItems()}
            </Box>
            
        )
    }
}
