import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { BottomNav } from '../components/BottomNav'
import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type PlansScreenProps = {
    onTabPress: (tab: MainTab) => void
}

export function PlansScreen({ onTabPress }: PlansScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Planos</Text>
            </View>

            <View style={styles.bottomNavWrapper}>
                <BottomNav activeTab="plans" onTabPress={onTabPress} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: '800',
    },
    bottomNavWrapper: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 16,
    },
})
