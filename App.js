/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import LoginPage from './src/Components/LoginPage';
import SignUpPage from './src/Components/SignUpPage';
import { Dashboard } from './src/Components/Dashboard';
import Main from './src/Components/Main';
import configureStore from './src/Store/configureStore';
import { Router,Scene, Actions, ActionConst } from 'react-native-router-flux';
import { TouchableOpacity ,Platform, StyleSheet, Text, View , Animated }  from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Head from './src/Components/Head';
import Active from './src/Components/Active';
import Form from './src/Components/Form.js';
import SignUp from './src/Components/SignUp.js';
import Profile from './src/Components/Profile';
import * as sharedAction from './src/Actions/SharedActions/SharedActions'
import setAuthToken from './src/config/setAuthToken';
// import jwt from 'jsonwebtoken';
import jwt from 'jwt-decode';
const store = configureStore();
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

AsyncStorage.getItem('jwtToken')    
.then((data)=>{
  console.log('get token',data);    
  store.dispatch(sharedAction.setCurrentUser(jwt(data)));
        sharedAction.saveUserTokenToAsyc(data)
        setAuthToken(data);
    }).catch((err)=>{
       
    });

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <Router>
      <Scene key="root">
        <Scene
          // key="tabbar"
        
          renderTitle={Head}          
          tab={true}
          >
            <Scene initial key="main" component={(props)=> <Main {...props} />} hideNavBar={true}  />
            <Scene key="dash" component={Dashboard} hideNavBar={true} /> 
            <Scene key="active" component={Active} hideNavBar={true} /> 
            <Scene key="profile" component={Profile} hideNavBar={true} /> 

            {/* <Scene key="dummy" component={(props) => <SignUp {...props} />} hideNavBar={true} /> */}
           {/* <Scene key="gold" component={GlodScreen} hideNavBar={true} title="Gold"  />
            <Scene key="black" component={BlackScreen} hideNavBar={true} title="Black" />
            <Scene key="blue" component={BlueScreen} hideNavBar={true} title="Blue"  />

            <Scene key="maize" component={MaizeScreen} hideNavBar={true} title="Maize" /> */} 
      </Scene>
  
          <Scene
            key="modal"
            direction="vertical"
            component={(props)=> <SignUpPage {...props} />}
            renderTitle={Head}
             headerBackTitle={null}
            hideNavBar
            />
            <Scene
            key="modal1"
            direction="vertical"
            component={(props)=> <LoginPage {...props} />}
            renderTitle={Head}
             headerBackTitle={null}
            hideNavBar
            />  
      </Scene> 
          
       
       {/* <View style={{flex:1,flexDirection:'column'}} >
        <View style={{marginBottom:50}} >
        </View>
        <View style={{ justifyContent:'center',flex:1 }} >
       <SignUp page={this.state.Page} funcToBack ={this.switchBackViewToPage} modeopen={this.state.FormDisp} /> 
        
        <TouchableOpacity onPress={this.switchViewToSignUp} style={{ marginBottom:45,
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
        <TouchableOpacity onPress={this.switchViewToLogin} style={{ marginBottom:45,
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
      </View>  */}
    </Router>
    </Provider>
    );
  }
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
