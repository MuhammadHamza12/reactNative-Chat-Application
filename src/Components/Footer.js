import React, { Component  } from 'react';
import { View  } from 'react-native';
import { Badge,Container, Icon,Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import * as sharedActions from './../Actions/SharedActions/SharedActions';
import {Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getAllOnlineStatus } from './../socketapi/api';
import Axios from 'axios';
import config from '../config/index';
import {  bindActionCreators } from 'redux';
class FooterTabsExample extends Component {
  _isMounted = true;
  constructor(props){

    super(props);
    this.state={
      flag:true,
      mount:true,
      allStatus:[],
      userState:null,
      isLoading:false,
      response:null,
    };
    
    
  }



   getAllOnlineStatusAsycCall = async ()=>{
    this.setState({
      isLoading:true,
    });
    const response = await Axios.get(`${config.localHttp}/get/onlinStatus`)
    if(this._isMounted){
      this.setState({
        response:response.data,
        isLoading:false,
      });
    }
  }
  componentDidMount(){
  //   this.setState({
  //     mount:true,
  //   })
  // this._isMounted=true;
  // this._isMounted && this.getAllOnlineStatusAsycCall();
  
  // this.mounted = true;
    // this.setState({
    //   isLoading:true,
    // })
    // this.cancelTokenSource = Axios.CancelToken.source();
    // try {
    //   const response = await Axios.get(`${config.localHttp}/get/onlinStatus`,{
    //     cancelToken:this.cancelTokenSource.token,
    //   })
    //   this.setState({
    //     response:response.data,
    //     isLoading:false,
    //   });
    // } catch (error) {
    //   if(Axios.isCancel(error)){

    //   }else{
    //     throw error;
    //   }
    // }finally{
    //   this.cancelTokenSource = null;
    // }
    // A
    //   Axios.get(`${config.localHttp}/get/onlinStatus`)
    //   .then((success)=>{
    //     if(this.mounted){
    //       this.setState({
    //         isLoading:false,
    //       });
    //     }
    //   })
  }
  //  static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log('in try');
  //     if (prevState.allStatus.length !== nextProps.sData.length) {
  //       console.log('nextprops in footer',nextProps);
  //       console.log('preveState in footer',prevState);
  //       return {
  //         allStatus:nextProps.sData,
  //       };
  //     }   
  //   // Return null to indicate no change to state.
  //   return null;
  // }
  // componentWillUnmount(){
  // this.setState({
  //   mount:false,
  // })
  //   this._isMounted=false;
  // }
  
    
  MoveToActive =()=>{
    Actions.dash(this.props.userState);
  }
   PureLogout = async () =>{
    this.props.actions.logout();
    Actions.popTo('main')}
  
  render() {
    console.log('all props in footer',this.props);
    console.log('ye footer data hai',this.props.sData);
    const  allStatus  = this.props.allStatus;
    console.log('log ',allStatus);
    return (
        <View >

        <Footer style={{backgroundColor:'black'}}  >
          <FooterTab>
            <Button active onPress={this.MoveToActive} >
              <Icon name='home' />
              <Text>Home</Text>
            </Button>
            <Button onPress={()=> Actions.profile()}  >
            <Icon name='person' />
              <Text>Profile</Text> 
            </Button>
            <Button onPress={()=>Actions.active()} badge vertical >
            <Badge><Text>{ this.state.isLoading ? <Icon name='timer' style={{fontSize:15}} /> : allStatus.length}</Text></Badge>
            <Icon name='people' />
              <Text>Freinds</Text> 
            </Button>
            <Button onPress={this.PureLogout}  >
            <Icon name='arrow-back' />
              <Text>Logout</Text> 
            </Button>
          </FooterTab>
        </Footer>
         </View>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(sharedActions,dispatch),
  }
}
function mapStateToProps(state) {
  return{
    userState:state.setAuthUser,
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FooterTabsExample);