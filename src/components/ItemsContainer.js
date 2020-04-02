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
        for (let i = 0; i < this.state.items.length;i++){
            
            itemsList.push(
                <Col>
                <Item key={this.state.items[i].id} item={this.state.items[i]} clickHandler={()=> this.props.clickHandler(this.state.items[i])}/>
                </Col>
              
            
            )
            // console.log(i)
            // i+=3
    
    
        }

        return itemsList

    }

    render() {

        return (
            <Box margin='xlarge' alignContent='center' border='all'>
                
            <Row>



            {this.generateItems()}
            </Row>
            </Box>
            
        )
    }
}
