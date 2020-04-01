import React, { Component } from 'react'
import { TableRow,TableCell ,Text,Button} from 'grommet'
import {Close} from 'grommet-icons'

export default class CartItem extends Component {

    constructor(props){
        super(props);
    }


    

    render() {
        return (
            <TableRow>
            <TableCell scope="row">
                    <Text textAlign='center' size='large'> {this.props.item.name} </Text>
                    </TableCell>
        <TableCell> <Text textAlign='center' size='large'>{this.props.item.price}SR</Text></TableCell>
                    <TableCell><Text textAlign='center' size='large'> {this.props.item.quantity} </Text></TableCell>
        <TableCell> <Text textAlign='center' size='large'> {this.props.item.price * this.props.item.quantity}SR</Text></TableCell>
                    <TableCell> <Button icon={<Close/>} onClick={()=> this.props.clickHandler(this.props.item)}/> </TableCell>
                  </TableRow>
        );
    }
}
