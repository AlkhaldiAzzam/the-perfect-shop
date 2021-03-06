import React, { Component } from 'react'
import {Grommet,Anchor, Box, Stack, Text, Button} from 'grommet'
import MainPage from './components/MainPage.js'
import Navbar from './components/Navbar'
import {Route,HashRouter as Router, Switch, Link} from 'react-router-dom'
import {Cart} from 'grommet-icons'
import CartPage from './components/CartPage'
import ItemPage from './components/ItemPage'
import Faker from 'faker'
import ThankyouPage from './components/ThankyouPage.js'
import Login from './components/authantication/Login.js'
import Signup from './components/authantication/Signup.js'

export default class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      cart:[],
      items: [],
      loggedin: false,
      navCon: <div></div>
  }

  this.addItem = this.addItem.bind(this)
  this.removeItem = this.removeItem.bind(this)
  this.signin = this.signin.bind(this)
  this.checkout = this.checkout.bind(this)
  }


componentWillMount(){
  let randItems = []

  for (let i = 0; i < 30; i++){
      randItems.push({
          name: Faker.name.title(),
          price: Faker.finance.amount(),
          img: Faker.image.food(),
          desc: Faker.lorem.paragraph(),
          id: Faker.random.number(),
          quantity: 1
  
      })
    }
        

let content
        if(this.state.loggedin){
          content =  <ul className="navbar-nav">
            
      <li className="nav-item active">

      <Link className="nav-link" to='/'><Text size='large'> Log Out</Text></Link>
</li>      
      
      </ul>
        }
        

        this.setState({
          items: randItems
        })

        
}

signin(){


  console.log('signed inn')

  this.setState({
    loggedin: true
  })
}

renderCon(){
  let l
  if(this.state.loggedin)
    l = <ul className="navbar-nav">
            
    <li className="nav-item active">

    <Link className="nav-link" to='/' onClick={()=> this.logout()}> <Text size='large'> Log Out</Text></Link>
</li>      
    
    </ul>

    else 
        l = <ul className="navbar-nav">
        
  <li className="nav-item active">
  <Link className="nav-link" to='/login'><Text color='light'> Log In</Text></Link>  
  </li>
  <li className="nav-item active">

  <Link className="nav-link" to='/signub'><Text color='light'> Sign Up</Text></Link>  
  </li>
  </ul>

  return l
}

logout(){
  this.setState({
    loggedin: false
  })
}

addItem(item){
  let curCart = this.state.cart


  curCart.push(item)

  this.setState({
    cart: curCart
  })

  console.log(this)
}

checkout(){
  this.setState({
    cart: []
  })
}


removeItem(item){

        
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
      <Grommet plain>
  
        <Router>


        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand">Azzam's Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'> <Text size="large"> Home</Text> </Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li> */}

     

    </ul>

    <Anchor size='large' color='brand' reverse  icon={<Stack anchor="top-right">
          <Link to='/cart'> <Cart size="large" /> </Link>
        <Box
          background="brand"
          pad={{ horizontal: 'xsmall' }}
          round
          >
          <Text>{this.state.cart.length}</Text>
        </Box>
      </Stack>}
      />
      {this.renderCon()}
    
    
  </div>
</nav>




        <Switch>
          <Route exact path="/" component={() => <MainPage items={this.state.items} />} />
          <Route path="/cart" component={()=> <CartPage checkOut={this.checkout} itemRemover={this.removeItem} cart={this.state.cart} />}/>
          <Route path="/item/:id" render={ props => <ItemPage {...props} addItem={this.addItem} allItems={this.state.items}/>}/>
          <Route path="/thanks" component={ThankyouPage}/>
          <Route path="/login" component={()=> <Login signin={this.signin}/>}/>
          <Route path="/signup" component={()=> <Signup signin={this.signin}/>}/>

        </Switch>


      </Router>
      </Grommet>
      
    )
  }
}

