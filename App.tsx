import { useState } from 'react'
import { StatusBar } from 'react-native'

import { LoginScreen } from './src/screens/LoginScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'
import { HomeScreen } from './src/screens/HomeScreen'
import { CreateAlarmScreen } from './src/screens/CreateAlarmScreen'
import { ThirdModeScreen } from './src/screens/ThirdModeScreen'
import { PlansScreen } from './src/screens/PlansScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
import { colors } from './src/theme/colors'
import { MainTab } from './src/types/navigation'

type Screen = 'login' | 'register' | MainTab

export default function App() {
  const [screen, setScreen] = useState<Screen>('login')

  function handleTabPress(tab: MainTab) {
    setScreen(tab)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {screen === 'login' && (
        <LoginScreen 
        onRegisterPress={()=> setScreen('register')} 
        onLoginPress={()=> setScreen('home')}/>
      )}
      
      {screen === 'register' && (
        <RegisterScreen 
        onLoginPress={()=> setScreen('home')}
        onBackPress={()=> setScreen('login')} />
      )}

      {screen === 'home' && (
        <HomeScreen onTabPress={handleTabPress} />
      )}

      {screen === 'alarm' && (
        <CreateAlarmScreen onTabPress={handleTabPress} />
      )}

      {screen === 'third' && (
        <ThirdModeScreen onTabPress={handleTabPress} />
      )}

      {screen === 'plans' && (
        <PlansScreen onTabPress={handleTabPress} />
      )}

      {screen === 'profile' && (
        <ProfileScreen onTabPress={handleTabPress} />
      )}
    </>
  )
}
