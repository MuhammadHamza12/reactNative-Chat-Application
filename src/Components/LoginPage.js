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

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
          errors:{},
          isLoading:false,
        }
      }
      isValid2 =()=>{
        const { errors , isValid } = Validator(this.state, 'loginPageValidation');
        if (!isValid) {
          this.setState({
            errors,
          });
        }
        return isValid;
      }
      getDataLogin =()=>{
        const {email , password } = this.state;
        this.setState({
          isLoading:true,
        });
        if(this.isValid2()){
          this.props.actions.Login({email:this.state.email,password:this.state.password})
          .then((success)=>{
                
            this.setState({
              errors:{},
              isLoading:false,
            });
            Actions.pop();
            Actions.dash({isAuth:this.props.userState.isAuth});
               
          }).catch((err)=>{
               
            });
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
          <Icon  style={{fontSize:50}} name='login' type='MaterialCommunityIcons' />
            
             <H1 style={{fontSize:33,fontWeight:'bold'}} >Log In</H1>
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
     
            <TouchableOpacity onPress={this.getDataLogin} style={{ 
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

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(sharedActions,dispatch),
  };
}
function mapStateToProps(state){
     
  return{
    userState:state.setAuthUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
