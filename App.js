import * as React from 'react'
import {View} from 'react-native'
import LoginScreen from './screens/LoginScreen'
import Screen from './screens/Screen'

export default class App extends React.Component{
  render(){
    return(
      <View><LoginScreen /></View>
    )
  }
}