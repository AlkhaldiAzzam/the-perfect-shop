import React, { Component } from 'react'
import { Grommet, Box } from 'grommet'
import ItemsContainer from './ItemsContainer'
import { InputGroup, FormControl, FormLabel} from 'react-bootstrap'
import Login from './authantication/Login'

export default class MainPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            filterVal: '',
            items: props.items,
            visibleItems: props.items
        }
    }



filterHandler(e){

    let filteredItems = this.props.items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filteredItems, 'filter')
    // console.log(this.state.visibleItems, 'before')

    this.setState({
      visibleItems: filteredItems,
      filterVal: e.target.value
    })
  
  }

  

    render() {
        return (
            <Grommet>
                

<Box margin='large' >
    <h1>hiii</h1>
    <FormLabel>Filter It</FormLabel>

<InputGroup sice='lg'>
<FormControl
    onChange={e => this.filterHandler(e)}
    value={this.state.filterVal}
  placeholder="Filter"
  aria-label="Search"
  aria-describedby="basic-addon2"
  size='lg'
/>
</InputGroup>

        </Box>
                <ItemsContainer items={this.state.visibleItems} clickHandler={this.props.clickHandler}/>
                

            </Grommet>
        )
    }
}
