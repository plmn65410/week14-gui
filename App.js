import React from 'react'
import{View,Text,Image} from 'react-native'

const App=()=>{
  return(  
    <View>
      <Image 
      style={{width:'100%',height:250}}
      source={require('./images/5.jpg')} 
      />
      <Image 
      style={{width:'100%',height:250}}
      source={require('./images/6.jpg')} 
      />
      <Image 
      style={{width:'100%',height:250}}
      source={require('./images/2.png')} 
      />
    </View>
  )
}
export default App