import React, { Component } from 'react'
import { Grommet } from 'grommet'
import ItemsContainer from './ItemsContainer'
import SearchBar from './SearchBar'
import CartPage from './CartPage'

export default class MainPage extends Component {
    render() {
        return (
            <Grommet>
{/* 
                <SearchBar/>
                <ItemsContainer/> */}
                <CartPage/>

            </Grommet>
        )
    }
}
