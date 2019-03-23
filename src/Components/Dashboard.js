import React, { Component } from 'react'
import { View, Text , BackHandler , ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FooterTabsExample from './Footer'; 
export class Dashboard extends Component {
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  }
  render() {
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
