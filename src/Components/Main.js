import React, { Component } from 'react'
import { StyleSheet , View, Text , TouchableOpacity } from 'react-native'
import {Icon} from 'native-base';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignUp from './SignUp';
import { Actions } from 'react-native-router-flux';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      FormDisp:false,
      Page:'',
    }
  }
  switchViewToLogin=()=>{
    this.setState({
      FormDisp:true,
      Page:'Login'
    })
  }
  switchViewToSignUp=()=>{
    this.setState({
      FormDisp:true,
      Page:'SignUp'
    })
  }
  switchBackViewToPage=()=>{
    this.setState({
      FormDisp:false,
      Page:''
    })
  }
  funToDashboard = () =>{
    Actions.dash();
  }
  render() {
    
    console.log('in main',Actions);
    return (
    <View style={{flex:1,flexDirection:'column'}} >
        <View style={{marginBottom:50}} >
        </View>
        <View style={{ justifyContent:'center',flex:1 }} >
       {/* <SignUp funToDashboard={this.funToDashboard}  page={this.state.Page} funcToBack ={this.switchBackViewToPage} modeopen={this.state.FormDisp} />     */}
       <TouchableOpacity onPress={()=> Actions.modal()} style={{ marginBottom:45,
    backgroundColor:'blue',
    height:45,
    borderRadius:5,display:(!this.state.FormDisp) ? 'flex':'none'}}>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:8,}} >
          <View>
          <Icon style={{color:'white'}} name='account' type='MaterialCommunityIcons' />
          </View>
          <View>
        <Text style={{color:'white', marginTop:3,    fontWeight:'bold',}} > Sign Up </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.modal1()} style={{  marginBottom:45,
    backgroundColor:'blue',
    height:45,
    borderRadius:5, display:(!this.state.FormDisp) ? 'flex':'none'}}>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:8,}} >
         <View>
         <Icon name='login' type='MaterialCommunityIcons' style={{color:'white'}} /> 
         </View>
         <View>
        <Text style={{color:'white', marginTop:5  , fontWeight:'bold',}} > Log In </Text>
         </View>
        </View>
        </TouchableOpacity>
     </View>
      </View>  
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}
const styles = StyleSheet.create({
  button:{
    marginBottom:45,
    backgroundColor:'steelblue',
    height:45,
    borderRadius:5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  animationView:{
    width:100,
    height:100,
    backgroundColor:'skyblue',
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
