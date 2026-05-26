import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

import { BottomNav } from '../components/BottomNav'
import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type CreateAlarmScreenProps = {
    onTabPress: (tab: MainTab) => void
}

export function CreateAlarmScreen({ onTabPress }: CreateAlarmScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Novo alarme</Text>
                    <Text style={styles.subtitle}>Escolha o ponto de chegada</Text>
                </View>
                
                <TouchableOpacity style={styles.avatar}>
                    <Text style={styles.avatarText}>E</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={20} color={colors.textMuted} />
                
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar endereço ou parada"
                    placeholderTextColor={colors.textMuted}
                />
            </View>

            <View style={styles.mapBox}>
                <Text style={styles.mapHint}>Toque no mapa para definir</Text>

                <View style={styles.mapLineOne} />
                <View style={styles.mapLineTwo} />

                <View style={styles.markerOuter}>
                    <View style={styles.markerMiddle}>
                    <View style={styles.markerInner} />
                    </View>
                </View>

                <View style={styles.addressTag}>
                    <Text style={styles.addressText}>Av. Paulista, 1000 - Sao Paulo</Text>
                </View>
            </View>

            <View style={styles.destinationPreview}>
                <View style={styles.previewIconBox}>
                    <Ionicons name="location-outline" size={20} color={colors.textPrimary} />
                </View>

                <View style={styles.previewMainInfo}>
                    <Text style={styles.previewLabel}>TEMPO ESTIMADO</Text>
                    <Text style={styles.previewTime}>18 min</Text>
                    <Text style={styles.previewDescription}>Baseado na sua distância atual</Text>
                </View>

                <View style={styles.previewDistanceBox}>
                    <Text style={styles.previewDistance}>2,3 km</Text>
                    <Text style={styles.previewDistanceLabel}>até o destino</Text>
                </View>
            </View>

            <View style={styles.bottomNavWrapper}>
                <BottomNav activeTab="alarm" onTabPress={onTabPress} />
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
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: '800',
    },
    subtitle: {
        color: colors.textSecondary,
        fontSize: 16,
        marginTop: 0,
    },
    bottomNavWrapper: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 16,
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
    searchBox: {
        marginHorizontal: 18,
        marginTop: 4,
        height: 55,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 100,
        backgroundColor: colors.surfaceRaised,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    searchInput: {
        flex: 1,
        color: colors.textPrimary,
        fontSize: 14,
    },
    mapBox: {
        marginHorizontal: 18,
        marginTop: 35,
        height: 240,
        borderRadius: 14,
        backgroundColor: '#102844',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapHint: {
        position: 'absolute',
        top: 14,
        color: colors.textPrimary,
        fontSize: 11,
        fontWeight: '700',
        backgroundColor: colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 6,
        zIndex: 2,
    },
    mapLineOne: {
        position: 'absolute',
        width: 310,
        height: 8,
        backgroundColor: '#254563',
        top: 64,
        left: 22,
        transform: [{ rotate: '8deg' }],
    },
    mapLineTwo: {
        position: 'absolute',
        width: 320,
        height: 7,
        backgroundColor: '#254563',
        bottom: 34,
        left: -34,
        transform: [{ rotate: '45deg' }],
    },
    markerOuter: {
        width: 112,
        height: 112,
        borderRadius: 56,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerMiddle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.textPrimary,
    },
    addressTag: {
        position: 'absolute',
        bottom: 22,
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        backgroundColor: colors.background,
    },
    addressText: {
        color: colors.textPrimary,
        fontSize: 12,
        fontWeight: '800',
    },
    destinationPreview: {
        marginHorizontal: 18,
        marginTop: 35,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 18,
        backgroundColor: colors.inputActiveBackground,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    previewIconBox: {
        width: 52,
        height: 52,
        borderRadius: 15,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewMainInfo: {
        flex: 1,
    },
    previewLabel: {
        color: colors.textMuted,
        fontSize: 12,
        fontWeight: '800',
    },
    previewTime: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: '800',
        marginTop: 2,
    },
    previewDescription: {
        color: colors.textSecondary,
        fontSize: 12,
        marginTop: 2,
    },
    previewDistanceBox: {
        alignItems: 'center',
    },
    previewDistance: {
        color: colors.primaryAccent,
        fontSize: 20,
        fontWeight: '800',
    },
    previewDistanceLabel: {
        color: colors.textSecondary,
        fontSize: 12,
        marginTop: 2,
    },
})
