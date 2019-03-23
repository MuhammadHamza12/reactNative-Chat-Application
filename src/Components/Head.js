import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';
import { Icon } from 'native-base';


export default Head = () =>{
    return(
      <View style={styles.mainhead}>
        <Text style={styles.toolbar}> <Icon name='chatboxes' style={{color:'white',fontSize:30}} />Cha Room</Text>  
         </View>
    );
}
const styles = StyleSheet.create({
  mainhead:{
    flex:1,
    alignItems:'center', 
  },
  toolbar: {
    backgroundColor: '#0000ff',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
    width:700,
  }
})