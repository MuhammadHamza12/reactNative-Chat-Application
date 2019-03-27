import React ,{Component , Fragment } from 'react';
import { connect } from 'react-redux';
import config from '../config/index';
import { getMessages , getAllOnlineStatus } from './../socketapi/api';
import Axios from 'axios';
import * as sharedActions from '../Actions/SharedActions/SharedActions';

import { bindActionCreators } from 'redux';
import { View }  from 'react-native';
import { Spinner } from 'native-base';
const style = {
    container2:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
      },
}
export default function(ComposeComponent){
 class FetchDataMiddleware extends Component {
 constructor(props){
     super(props);
     this.state={
         isLoading:true,
         res:null,
     }
     console.log('in constructore')
     getAllOnlineStatus((status)=>{
        console.log('data aya hai',status);
        this.props.actions.setStatusToRedux(status);
      });
    }
 componentDidMount(){
    this.mounted = true;
    Promise.all([Axios.get(`${config.localHttp}/get/onlinStatus`)])  
    .then((result)=>{
      console.log('in comp did',result[0].data.mblData);
      if(this.mounted){
        this.setState({
          res: result[0].data,
          isLoading: false,
        })
      }
    }).catch((err)=>{
      console.log(err);
    });
 }
componentWillUnmount(){
    this.mounted=false;
}
 renderComponent=()=>{
    if(this.state.isLoading){
      return(
        <View style={{flex:1,justifyContent:'center'}} >
           <Spinner size='large' />
        </View>
    );
  }
  else {
    console.log('sData',this.props.sData);
     return <View style={{flex:1,justifyContent:'center'}} >

       <ComposeComponent {...this.props} />
     </View>
     

 }
} 
render() {   
    return (
   <View style={{flex:1,justifyContent:'center'}} >
    {this.state.isLoading ? <Spinner size='large' /> : <ComposeComponent {...this.props} /> }  
   </View>
    );
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
return connect(mapStateToProps,mapDispatchToProps)(FetchDataMiddleware);
}
