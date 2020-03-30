import React, { Component } from 'react'
import { Grommet } from 'grommet'
import ItemsContainer from './ItemsContainer'


export default class MainPage extends Component {
    render() {
        return (
            <Grommet>
                <ItemsContainer/>

            </Grommet>
        )
    }
}
