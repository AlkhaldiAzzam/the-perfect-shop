import React, { Component } from 'react'
import { Box, TableHeader, TableRow, TableCell, Table, TableBody, Text } from 'grommet'
import '../css/style.css'
import {Close} from 'grommet-icons'
import CartItem from './CartItem'
import { Button } from 'react-bootstrap'

export default class CartPage extends Component {




    constructor(props){
        super(props)
        this.state = {
            cart:[
                {
                    name: 'Pants1',
                    price:200,
                    quantity:2
                },
                {
                    name: 'Pants2',
                    price:200,
                    quantity:2
                },
                {
                    name: 'Pants3',
                    price:200,
                    quantity:2
                },
                {
                    name: 'Pants4',
                    price:200,
                    quantity:2
                }
            ]
        }

        // this.removeItem = this.removeItem.bind(this)
        this.updateCart = this.updateCart.bind(this)
    }

    

    componentDidMount(){

        this.generateCart()
    }

    generateCart(){


        

        let stateCart = this.state.cart
        
        let table
        if(stateCart.length == 0)
            table = <h1>Your Cart is Empty</h1>

            else{




       let cart = []
        stateCart.forEach(i => {
            cart.push(
                <CartItem item={i} clickHandler={()=>this.removeItem(i)}/>
              )
        })

        table =  <Table alignSelf='center'>
  <TableHeader>
    <TableRow>

      <TableCell size='medium' scope="col" border="bottom">
       <Text textAlign='center' size='large'>  Item </Text>
      </TableCell>

      <TableCell scope="col" border="bottom">
      <Text textAlign='center' size='large'> Price</Text>
      </TableCell>

      <TableCell scope="col" border="bottom">
      <Text textAlign='center' size='large'>Quantity</Text>
      </TableCell>

      <TableCell scope="col" border="bottom">
      <Text textAlign='center' size='large'> Total</Text>
      </TableCell>

    </TableRow>
  </TableHeader>
  <TableBody>

                {
                    cart
                }

  </TableBody>
</Table>
    }
        return table
    }

    removeItem(item){

        
        this.updateCart(item)

        console.log(item)
    }

    updateCart(item){
        let currentCart = this.state.cart

        let newCart = currentCart.filter(i => {
            return i.name != item.name
        })

        this.setState({
            cart: newCart
        })
    }

    render() {
        
        return (
            <Box border='all' align='center' alignContent='center' margin='large'>

            <h1 className='m-5'>Your Cart</h1>


            <Box>
            
            {this.generateCart()}

            </Box>



       

            </Box>
        )
    }
}
