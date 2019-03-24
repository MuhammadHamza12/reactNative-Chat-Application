import React, { Component } from 'react'
import { View, Text ,ScrollView ,TouchableOpacity  } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'
import FooterTabsExample from './Footer';
export class Profile extends Component {
  render() {
    let titlename ='';
    try {
      
     titlename = this.props.users.name.substring(0,2);
    } catch (error) {
      titlename = '';  
    }
    return (
      <View style={{flex: 1}}>
      
      <ScrollView>
      <View style={{display:'flex',alignSelf:'center',margin:30}} >

      <Avatar
          size="xlarge"
          rounded
          title={`${titlename}`}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          />
          </View>
      <View style={{alignSelf:'flex-start',flex: .9}}> 
   
      <View style={{ justifyContent:'flex-start',display:'flex',flexDirection:'row',}} >
      <View style={{marginTop:30}}  >
        <Icon color='blue' name='person' />
      
        <Icon style={{marginTop:30}} name='mail' />
      </View>
      <View style={{margin:30}} >
        <Text>Name</Text>
        <Text style={{fontSize:15}} >{this.props.users.name}</Text>
      
      <View style={{marginTop:15}} >
        <Text>Email</Text>
        <Text style={{fontSize:15}} >{this.props.users.email}</Text>
        </View>  
      </View>
      <View style={{marginTop:30,marginRight:10}} >
        <TouchableOpacity>
         <Icon name='edit' type='FontAwesome' />
        </TouchableOpacity>
        <View style={{marginTop:40,marginRight:10}} >
        <TouchableOpacity>
         <Icon name='edit' type='FontAwesome' />
        </TouchableOpacity>

        </View>
        </View>  
      </View>     
      </View>
      </ScrollView>
       <View style={{position:'absolute',left:0,right:0,bottom:0}}> 
   <FooterTabsExample /> 
       </View>
       </View>
    )
  }
}

function mapStateToProps(state) {
  return{
    userState:state.setAuthUser,
    users:state.setAuthUser.users,
  }
}
const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
