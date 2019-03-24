import React, { Component  } from 'react'
import { View, Text , FlatList , ScrollView   } from 'react-native'
import { ListItem  } from 'react-native-elements';
import PropTypes from 'prop-types'
import config from './../config/index';
import { getAllOnlineStatus } from './../socketapi/api';
import { Spinner }  from 'native-base';
import { connect } from 'react-redux'
import FooterTabsExample from './Footer';
import Axios from 'axios';
const ListOfArrOBJ = [
  {name:'Hamza',email:'muhammadhamzahaneef@gmail.com',isOnline:'true'},
  {name:'Qutub',email:'muhammadQutub@gmail.com',isOnline:'true'},
  {name:'Sumair',email:'muhammadsumair@gmail.com',isOnline:'false'},
  {name:'Ahmed',email:'muhammadahmed@gmail.com',isOnline:'false'},
  {name:'Madni',email:'muhammadmadni@gmail.com',isOnline:'true'},
  {name:'Asad',email:'asad@gmail.com',isOnline:'true'},
  {name:'Asad',email:'asad@gmail.com',isOnline:'true'},
  {name:'Asad',email:'asad@gmail.com',isOnline:'true'}
];
export class Active extends Component {
  constructor(props){
    super(props);
    this.state={
      allStatus:[],
      isLoading:true,
    }
    getAllOnlineStatus((status)=>{
      debugger;
      this.setState({
        allStatus:[...status],
      });
  })
  }
  componentDidMount(){
    Axios.get(`${config.localHttp}/get/onlinStatus`)
    .then((success)=>{
      debugger;
      this.setState({
        isLoading:false,
      });
    })
  }
  render() {
    const ListCom = this.state.allStatus.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ rounded:true , title:l.name.substring(0,2) }}
        title={l.name}
        subtitle={l.email}
        badge={{ status:(l.isOnline) ? 'success' : 'primary'  ,containerStyle: { marginTop: -20  } }}
        />
    ))
    console.log('all user active details:',this.state.allStatus);
    return (
      <View style={{flex: 1}}>
      
      <View style={{marginTop:5,flex: .9}}> 
      <ScrollView>
      {
        (this.state.allStatus.length < 1) ? <Spinner size='large' /> : ListCom
  }
  </ScrollView>
       </View>
   
       <View style={{position:'absolute',left:0,right:0,bottom:0}}> 
   <FooterTabsExample /> 
       </View>
       </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Active)
