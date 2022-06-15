import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TopTab from './src/navigators/topTab'

const App = () => {
  return (
    <NavigationContainer>
      <TopTab />
    </NavigationContainer>
  )
}

export default App