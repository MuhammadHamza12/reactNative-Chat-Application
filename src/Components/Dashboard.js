import React, { Component } from 'react'
import { View, Text , BackHandler , ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FooterTabsExample from './Footer'; 
export class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state ={
      flag:null,
    } 
    AsyncStorage.getItem('jwtToken')    
.then((data)=>{
  console.log('get token',data);    
    if(Object.is(data,null)){
      console.log('in true');
      Actions.main();
    }
    }).catch((err)=>{  
    });
  }
  
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   try {
  //     console.log('in try');
  //     if (prevState.flag !== nextProps.userState.isAuth) {
  //       console.log('nextprops',nextProps);
  //       console.log('preveState',prevState);
  //       return {
  //         flag:nextProps.userState.isAuth
  //       };
  //     }
  //   } catch (error) {
  //     console.log('in try');
  //     console.log(error);
  //   }

  //   // Return null to indicate no change to state.
  //   return null;
  // }
// handleBackButton() {
//     ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
//     return true;
//   }
  render() {
    console.log('flag',this.state.flag);
    return (
      <View style={{flex: 1}}>
      
     <View style={{marginTop:5,flex: .9}}> 
      <Text>main</Text> 
      <Text>main</Text> 
      <Text>main</Text> 
      <Text>main</Text> 
      <Text>main</Text> 
      <Text>main</Text> 
  
      </View>
  
      <View style={{flex: .1}}> 
  <FooterTabsExample /> 
      </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return{
    userState:state.setAuthUser,
  }
}


export default connect(mapStateToProps, null)(Dashboard);
