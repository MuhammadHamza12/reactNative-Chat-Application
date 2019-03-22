import React, { Component } from 'react';
import {View} from 'react-native';
import { Icon ,Row, Text , Button , Form, Item, Input, Label } from 'native-base';
export default class HeaderMultipleIconExample extends Component {
  render() {
    const SignUp = (
      <Form style={{flex:1, margin:40 , display:(this.props.FormDisp) ? 'flex' : 'none' }} >
      <Item floatingLabel>  
        <Label>Email</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item>
      <Button  style={{alignSelf:'center',marginTop:50}} primary><Text> Sign Up </Text></Button>
    </Form>
    );
    const Login = (
      <Form style={{flex:1, margin:40 , display:(this.props.FormDisp) ? 'flex' : 'none' }} >
      <Item floatingLabel>  
        <Label>Email</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item>
      <Button  style={{alignSelf:'center',marginTop:50}} primary><Text> Log In </Text></Button>
    </Form>
    )
    return (
      <View>
        {(Object.is(this.props.Page,'SignUp') && (this.props.FormDisp)) ? SignUp : Login  }
      </View>
    );
  }
}