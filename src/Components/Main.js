import React, { Component } from 'react'
import { StyleSheet , View, Text , TouchableOpacity , Image } from 'react-native'
import {Icon , Spinner } from 'native-base';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignUp from './SignUp';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import Dashboard from './Dashboard';
export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      FormDisp:false,
      Page:'',
      token:null,
      ready:false,
      isLoading:true,
    }
    console.log('props in constructor:',props.users);
    AsyncStorage.getItem('jwtToken')    
.then((data)=>{
  console.log('get token2',data);    
    if(!Object.is(data,null)){
      this.setState({
        ready:true,
        token:data,
        authFlag:true,
      })  
    }   
    // if(this.isEmpty(this.props.users)){
    //   this.setState({
    //     ready:true,
    //   })
    // } 
}).catch((err)=>{
       
    });
  }

  switchViewToLogin=()=>{
    this.setState({
      FormDisp:true,
      Page:'Login'
    })
  }
   isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
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
  mainRendering = (mainCom,dashboard)  => {
    if(this.isEmpty(this.props.users)){
      return mainCom;
    }  
    if(this.state.ready === false ){
        return <Spinner size='large' />;
    }
    return dashboard;
  }
  render() {
    console.log('user props:',this.props.users);
    
    // console.log('user State',this.props.userState.isAuth);
    // console.log('user State',this.props.userState);
  
    // console.log('in main',Actions);
    const mainCom = (
<View style={{flex:1,flexDirection:'column'}} >
        <View style={{marginBottom:50}} >
        </View>
    <View style={{alignSelf:'center'}} >
      <Image  loadingIndicatorSource={<Spinner size='large' />} source={require('../images/front.png')} style={{width:200,height:200}} />
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
    const dashboard =(
      <Dashboard />
    );

    const displayCom =(!this.props.userState.isAuth) ? mainCom : dashboard ;

    return (
      <View style={{flex:1,flexDirection:'column'}} >
        {this.mainRendering(mainCom,dashboard)}
           </View>
    );
  }
}

function mapStateToProps(state) {
  return{
    userState:state.setAuthUser,
    users:state.setAuthUser.users,
  }
}
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
