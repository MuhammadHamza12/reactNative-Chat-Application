import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FooterTabsExample from './Footer';
export class Active extends Component {
  

  render() {
    return (
      <View style={{flex: 1}}>
      
      <View style={{marginTop:5,flex: .9}}> 
       <Text>Active</Text>   
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

export default connect(mapStateToProps, mapDispatchToProps)(Active)
