import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal , TouchableOpacity } from 'react-native';
import Head from './Head.js';
import {  bindActionCreators } from 'redux';
import * as sharedActions from '../Actions/SharedActions/SharedActions';
import { Actions } from 'react-native-router-flux';
import { H1 ,Container, Header, Content, Input ,Row ,Button , Icon, Form, Item, Label } from 'native-base';
import Validator from './registrationValidator';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state={
          username:'',
          email:'',
          password:'',
          errors:{},
          isLoading:false,
        }
      }
      isValid = () => {
        const { errors , isValid } = Validator(this.state, 'signPageValidation');
        if (!isValid) {
          this.setState({
            errors,
          });
        }
        return isValid;
      }
      getData=()=>{
        const { username , email , password } = this.state;
        if(this.isValid()){
          alert('error resolve');
          this.setState({
            errors:{},
          })
          alert(this.state.email,this.state.password,this.state.username);
        }
      }
  render() {
    const {  errors } = this.state;
    return (
        <Container style={{display:'flex'}} >
        <Header>
        <Head />
        </Header>
         {/* <Form></Form> */}
          <View style={{justifyContent:'center',marginTop:20}} >
          <Item style={{justifyContent:'center'}} >
          <Icon  style={{fontSize:50}} name='account' type='MaterialCommunityIcons' />
           
             <H1 style={{fontSize:33,fontWeight:'bold',marginTop:10}} >
             Sign Up</H1>
            </Item>
            <Item error={errors.username} >
              <Icon active name='person' />
              <Input onChangeText={(username)=> this.setState({username})} textContentType='username' placeholder='Username'/>
            </Item>
            <Item error={errors.email} >
              <Icon active name='mail' />
              <Input onChangeText={(email)=> this.setState({email})} textContentType='emailAddress' placeholder='E-mail'/>
            </Item>
            <Item error={errors.password} >
              <Icon active  name='lock' />
              <Input secureTextEntry={true} onChangeText={(password)=> this.setState({password})} textContentType='password' placeholder='Password'/>
            </Item>
            <Item style={{justifyContent:'center'}} >
  
            <TouchableOpacity onPress={this.getData} style={{ 
      backgroundColor:'blue',
      height:45,
      borderRadius:5,width:'100%'}}>
          <View style={{alignSelf:'center',marginTop:8,}} >
  
          <Text style={{color:'white',    fontWeight:'bold',}} > Submit </Text>
          </View>
          </TouchableOpacity>
            </Item>
          </View>
      
        </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
