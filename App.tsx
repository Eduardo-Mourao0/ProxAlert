import { StatusBar } from 'react-native'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#07111f" />
      <Text style={styles.title}>ProxAlert</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07111f',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
})
