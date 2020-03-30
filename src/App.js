import React, { Component } from 'react'
import {Grommet} from 'grommet'
import MainPage from './components/MainPage.js'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <Grommet plain>
                <Navbar/>

        <MainPage/>
      </Grommet>
      
    )
  }
}

