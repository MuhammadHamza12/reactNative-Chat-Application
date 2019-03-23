import React, { Component } from 'react';
import { View } from 'react-native';
import { Badge,Container, Icon,Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import * as sharedActions from './../Actions/SharedActions/SharedActions';

import {Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
class FooterTabsExample extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:true,
    };
  }
  MoveToActive =()=>{
    Actions.dash();
  }
   PureLogout = async () =>{
    this.props.actions.logout();
    Actions.main();
  }
  
  render() {
    return (
        <View>

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
            <Badge><Text>5</Text></Badge>
            <Icon name='people' />
              <Text>Active</Text> 
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
export default connect(null,mapDispatchToProps)(FooterTabsExample);