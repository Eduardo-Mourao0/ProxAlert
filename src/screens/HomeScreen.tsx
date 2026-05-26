import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AlarmCard } from '../components/AlarmCard'
import { BottomNav } from '../components/BottomNav'

import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type HomeScreenProps = {
    onTabPress: (tab: MainTab) => void
}

export function HomeScreen({ onTabPress }: HomeScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
            <View style={styles.header}>
                <View>
                    <Text style={styles.appName}>Início</Text>
                    <Text style={styles.greeting}>Olá, Eduardo</Text>
                </View>

                <TouchableOpacity style={styles.avatar}>
                    <Text style={styles.avatarText}>E</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.destinationCard}>
                    <Text style={styles.cardLabel}>PRÓXIMO DESTINO</Text>
                    <Text style={styles.destinationTitle}>Casa</Text>
                    <Text style={styles.destinationDescription}>Acompanhe a distância percorrida até o alerta.</Text>

                    <View style={styles.destinationProgressRow}>
                        <View style={styles.distanceBox}>
                            <Text style={styles.distanceValue}>1,2 km</Text>
                        </View>

                        <View style={styles.progressInfo}>
                            <Text style={styles.progressLabel}>raio de alerta: 500 m</Text>
                            <View style={styles.progressTrack}>
                                <View style={styles.progressFill} />
                            </View>

                            <Text style={styles.progressText}>58% até o alerta - faltam 700 m</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Alarmes salvos</Text>

                <AlarmCard
                    name="Casa"
                    radius="Raio: 500 m"
                    active={true}
                />

                <AlarmCard
                    name="Faculdade"
                    radius="Raio: 300 m"
                    active={false}
                />

            </View>
            </ScrollView>

            <View style={styles.bottomNavWrapper}>
                <BottomNav activeTab="home" onTabPress={onTabPress} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 96,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
    },
    appName: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: '800',
    },
    greeting: {
        color: colors.textMuted,
        fontSize: 17,
        marginTop: 4,
    },
    avatar: {
        width: 47,
        height: 47,
        borderRadius: 23.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryAccent,
    },
    avatarText: {
        color: colors.textPrimary,
        fontSize: 18,
        fontWeight: '800',
    },
    content: {
        paddingHorizontal: 18,
        paddingTop: 12,
    },
    destinationCard: {
        borderWidth: 2,
        borderColor: colors.primaryAccent,
        borderRadius: 24,
        backgroundColor: colors.surfaceRaised,
        padding: 20,
    },
    cardLabel: {
        color: colors.primaryAccent,
        fontSize: 11,
        fontWeight: '800',
        marginBottom: 12,
    },
    destinationTitle: {
        color: colors.textPrimary,
        fontSize: 30,
        fontWeight: '800',
    },
    destinationDescription: {
        color: colors.textSecondary,
        fontSize: 13,
        lineHeight: 20,
        marginTop: 6,
    },
    destinationProgressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        gap: 14,
    },
    distanceBox: {
        width: 130,
        height: 46,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    distanceValue: {
        color: colors.textPrimary,
        fontSize: 22,
        fontWeight: '800',
    },
    progressInfo: {
        flex: 1,
    },
    progressLabel: {
        color: colors.textMuted,
        fontSize: 12,
    },
    progressTrack: {
        height: 6,
        borderRadius: 999,
        backgroundColor: colors.divider,
        marginTop: 8,
    },
    progressFill: {
        width: '58%',
        height: '100%',
        borderRadius: 999,
        backgroundColor: colors.primaryAccent,
    },
    progressText: {
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 6,
    },
    sectionTitle: {
        color: colors.textPrimary,
        fontSize: 22,
        fontWeight: '800',
        marginTop: 28,
        marginBottom: 14,
    },
    bottomNavWrapper: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 16,
    },
})
