import React, { Component } from 'react';
import {View , Modal , TouchableOpacity } from 'react-native';
import Head from './Head.js';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sharedActions from '../Actions/SharedActions/SharedActions';
import { Actions } from 'react-native-router-flux';
import { H1 ,Container, Header, Content, Input ,Row, Text ,Button , Icon, Form, Item, Label } from 'native-base';
import Validator from './registrationValidator';
class SignUp extends Component {
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
  backBTNDash=()=>{
  
    this.props.funToDashboard();
  }
  backBTN=()=>{
    this.setState({
      email:'',
      password:'',
      username:'',
      errors:{},
    })
    this.props.funcToBack();
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
  isValid2 =()=>{
    const { errors , isValid } = Validator(this.state, 'loginPageValidation');
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
  clickToMove =()=>{
    debugger;
    this.backBTN();
    Actions.dash();
  }
  getDataLogin =()=>{
    const {email , password } = this.state;
    this.setState({
      isLoading:true,
    });
    if(this.isValid2()){
      // this.props.actions.Login({email:this.state.email,password:this.state.password})
      // .then((success)=>{
      //   console.log(success);        
      //   this.setState({
      //     errors:{},
      //     isLoading:false,
      //   });

        
      //   debugger;
      // }).catch((err)=>{
      //   console.log(err);
      //   debugger;
      //   });
    }
  }
  render() {
    const {errors} = this.state;
    console.log(this.props);
    debugger;
    const SignUp = (
      <Modal visible={this.props.modeopen} animationType='slide' >
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
      <Button rounded onPress={this.backBTN}  primary><Text> Back </Text></Button>
      </Container>
      {/* <Form style={{flex:1, margin:40 , display:(this.props.FormDisp) ? 'flex' : 'none' }} >
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
    */}

     
      </Modal>
    )
    const Login = (
      <Modal visible={this.props.modeopen} animationType='slide' >

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
   <Button rounded onPress={this.backBTN}  primary><Text> Back </Text></Button>
   </Container>
   
   </Modal>
    )
    return (
        <View style={{display:'flex'}} >
      {(Object.is(this.props.page,'SignUp') && (this.props.modeopen))? SignUp : Login}
    </View>
      
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(sharedActions,dispatch),
  };
}
function mapStateToProps(state){
  debugger;
  return{
    state:state.setAuthUser,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);