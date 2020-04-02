import React, { Component } from 'react'
import { Box, Text, RoutedAnchor, Button } from 'grommet';
import { Form, TextInputField, PasswordInputField, EmailInputField, CheckBoxField, validators } from 'grommet-controls';
import { Link } from 'react-router-dom';

export default class Signup extends Component {


    constructor(props){
        super(props)
    }


    render() {
        return (
            <Box align='center' margin='large'>
                <Box align='center'>
                <Form
    basis='medium'
    focusFirstChild={false}
    
  >
    <TextInputField label='User name' name='username' validation={[validators.required()]} />
    <EmailInputField label='Email' name='email' validation={[validators.required(), validators.email()]} />
    <PasswordInputField
      label='Password'
      name='password'
      validation={
        [validators.required(), validators.minLength(5), validators.alphaNumeric()]
      }
    />
    <PasswordInputField
      label='Confirm Password'
      name='password1'
      validation={[validators.equalsField('password')]}
    />
    <CheckBoxField
      controlLabel={(
        <Box direction='row' gap='xsmall' align='center'>
          Agree to
          <RoutedAnchor path='/terms_of_service' label='terms of service' />
        </Box>
      )}
      description='Terms of service'
      name='accept_tos'
      validation={[validators.required(), validators.True('Please accept our TOS')]}
    />
    <Box pad={{ vertical: 'medium' }} align='end'>
      <Link to='/'> <Button hoverIndicator='background' primary={true} onClick={()=>this.props.signin()} label='Save profile' /></Link>
    </Box>
    <Box direction='row' alignSelf='center' gap='small' align='center'>
      <Text>
        {'Already have an account?'}
      </Text>
      <RoutedAnchor path='/login' label='Sign in' />
    </Box>
  </Form>
                </Box>
            </Box>
        )
    }
}
