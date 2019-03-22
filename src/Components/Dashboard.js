import React, { Component } from 'react'
import { View, Text , BackHandler , ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
      <View>
        <Text> Dashboard </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
