import React, { Component } from 'react'
import { View, Text , BackHandler , ToastAndroid } from 'react-native'

import PropTypes from 'prop-types';
import config from '../config/index';
import { getMessages , getAllOnlineStatus } from './../socketapi/api';
import Axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sharedActions from '../Actions/SharedActions/SharedActions';
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FooterTabsExample from './Footer'; 
import { GiftedChat } from 'react-native-gifted-chat';
import { Spinner } from 'native-base';
export class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading:false,
      flag:null,
      mount:true,
      allStatus:[],
      messages:[{
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date('2019-03-14T09:30:04.827Z'),
        user: {
          _id: 2,
          name: 'React Native',
        },
      }],
    }
    _isMounted = false;
    getMessages((success2) => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, success2),
      }))
    })
    getAllOnlineStatus((status)=>{
      console.log('data aya hai',status);
      this.props.actions.setStatusToRedux(status);
    });
    
//     AsyncStorage.getItem('jwtToken')    
// .then((data)=>{
//   console.log('get token',data);    
//     if(Object.is(data,null)){
//       console.log('in true');
//       Actions.main();
//     }
//     }).catch((err)=>{  
//     });
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
componentDidMount(){
  this.mounted = true;
  this.setState({
    isLoading: true,
  })

    Promise.all([Axios.get(`${config.localHttp}/get/messages`),Axios.get(`${config.localHttp}/get/onlinStatus`)])  
    .then((result)=>{
      console.log('in comp did',result[0].data.mblData);
      if(this.mounted){
        this.setState({
          messages: result[0].data.mblData,
          isLoading: false,
        })
      }
    }).catch((err)=>{
      console.log(err);
    });
  
    // axios.get(`${config.localhttp}/get/messages`)
    //   .then((result) => {
  //     console.log('in componentdidmount:',result);
  //     // this.setState({
  //     //   messages: result.data.mblData,
  //     //   isLoading: false,
  //     // })
  //   }).catch((error) => {
  //     console.log(error);
  //   })
}

componentWillUnmount(){
 this.mounted=false;
}
onSend(messages = []) {
  console.log(this.props.userState);
  console.log('this is sending mes:',messages);
  const [ { text , user:{ _id } } ] = messages;
  try {
    Axios.post(`${config.localHttp}/api/message`, { message: text , email:this.props && this.props.userState && this.props.userState.users && this.props.userState.users.email, name:this.props && this.props.userState && this.props.userState.users && this.props.userState.users.name })
    .then((success) => {
      console.log(success);
    }).catch((error) => {
      ToastAndroid.show('Network error',2000);
      console.log(error);
    });
  } catch (error) {
    ToastAndroid.show('Network error',2000);
    console.log(error);
  }
    
  console.log('ye hai text:',text);
  console.log('ye hai id',_id);
  // console.log('ye hai name',this.props && this.props.userState && this.props.userState.users && this.props.userState.users.name || this.props.users.name);
  // console.log('ye hai email',this.props.userState.users.email || this.props.users.name );
  
}

  render() {
    console.log('all props: dash',this.props);
    console.log('flag',this.state.flag);
    console.log('status:',this.state.allStatus);
    const { allStatus } = this.props.sData;
    console.log('allStatus',allStatus)
    return (
      <View style={{flex: 1}}> 
     <View style={{marginTop:5,flex: .9}}> 
     {this.state.isLoading ? <Spinner size='large' /> : <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.props && this.props.userState && this.props.userState.users.id,
        }}
        renderUsernameOnMessage={true}
      /> }
     
       
      </View>
  
      <View style={{flex: .1}}> 
  <FooterTabsExample allStatus={allStatus}   /> 
      </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return{
    userState:state.setAuthUser,
    sData:state.setAllUserStatus,
 
  }
}
function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(sharedActions,dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
