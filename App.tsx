import { useState } from 'react'
import { StatusBar } from 'react-native'

import { LoginScreen } from './src/screens/LoginScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'
import { colors } from './src/theme/colors'

type Screen = 'login' | 'register'

export default function App() {
  const [screen, setScreen] = useState<Screen>('login')

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {screen === 'login' && (
        <LoginScreen onRegisterPress={()=> setScreen('register')} />
      )}
      
      {screen === 'register' && (
        <RegisterScreen onLoginPress={()=> setScreen('login')} />
      )}
    </>
  )
}
