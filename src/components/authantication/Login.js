import React, { Component } from 'react'
import { Box, Text, RoutedAnchor , Button} from 'grommet';
import { Form ,PasswordInputField, EmailInputField, CheckBoxField, validators } from 'grommet-controls'
import { Link } from 'react-router-dom';
export default class Login extends Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <Box align="center" >

            <Box align='center' margin='large' >

            <Form
    basis='medium'
    focusFirstChild={false}
    
  >
    <EmailInputField
      label='Email'
      name='email'
      validation={[validators.required(), validators.email()]}
    />
    <PasswordInputField
      label={(
        <Box direction='row' align='center' justify='between'>
          Password
          <RoutedAnchor path='/reset_password' size='small' label='Forgot password?' />
        </Box>
      )}
      description='Password'
      name='password'
      validation={
        [validators.required(), validators.minLength(5), validators.alphaNumeric()]
      }
    />
    <CheckBoxField
      label='Remember me'
      name='rememberme'
      inField={false}
    />
    <Box pad={{ vertical: 'medium' }} align='end'>
     <Link to='/'> <Button hoverIndicator='background' primary={true} onClick={()=>this.props.signin()} label='Save profile' /></Link>
    </Box>
    <Box direction='row' alignSelf='center' gap='small' align='center'>
      <Text>
        {'Don\'t have an account yet?'}
      </Text>
      <RoutedAnchor path='/signup' label='Sign up' />
      </Box>
  </Form>
    </Box>
  </Box>

        )
    }
}
