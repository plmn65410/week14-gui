import React from 'react'
import{View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
    <View style ={{flex:1,backgroundColor:'#000000'}}>
      <Text style= {{color:'yellow'}}>Hello Worlds</Text>
    </View>
      <View style={{flex:2,backgroundColor:'#dc143c'}}></View>
      <View style={{flex:3,backgroundColor:'#4b0082'}}></View>
    </View>
  )
}
export default App