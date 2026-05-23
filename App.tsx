import { StatusBar } from 'react-native'

import { LoginScreen } from './src/screens/LoginScreen'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#07111f" />
      <LoginScreen />
    </>
  )
}
