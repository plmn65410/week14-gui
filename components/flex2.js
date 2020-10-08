import React from 'react'
import{View,Text} from 'react-native'

const App=()=>{
  return(  
    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'stretch',
      }}>
       <View style={{width:50,height:50,backgroundColor:'#00ffff'}}></View>
       <View style={{width:50,height:50,backgroundColor:'#000000'}}></View>
       <View style={{width:50,height:50,backgroundColor:'#123456'}}></View>
    </View>
  )
}
export default App;