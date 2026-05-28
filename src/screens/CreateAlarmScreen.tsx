import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { BottomNav } from '../components/BottomNav'
import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type CreateAlarmScreenProps = {
    onTabPress: (tab: MainTab) => void
}

type AlarmStep = 'selectDestination' | 'configureAlarm'

const radiusOptions = ['100 m', '200 m', '500 m', '1 km']
const nameOptions = ['Casa', 'Trabalho', 'Faculdade', 'Academia']
const soundOptions = [
    'Alarme intenso + vibracao',
    'Alarme suave',
    'Som curto',
    'Apenas vibracao',
]

export function CreateAlarmScreen({ onTabPress }: CreateAlarmScreenProps) {
    const [step, setStep] = useState<AlarmStep>('selectDestination')
    const [selectedRadius, setSelectedRadius] = useState('500 m')
    const [alarmName, setAlarmName] = useState('Casa')
    const [alarmMessage, setAlarmMessage] = useState('Você está chegando no destino.')
    const [selectedSound, setSelectedSound] = useState(soundOptions[0])
    const [isSoundPickerOpen, setIsSoundPickerOpen] = useState(false)

    const isConfiguring = step === 'configureAlarm'

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>
                            {isConfiguring ? 'Configurar' : 'Novo alarme'}
                        </Text>
                        <Text style={styles.subtitle}>
                            {isConfiguring ? 'Ajuste o alerta antes de salvar' : 'Escolha o ponto de chegada'}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.avatar} onPress={() => onTabPress('profile')}>
                        <Text style={styles.avatarText}>E</Text>
                    </TouchableOpacity>
                </View>

                {isConfiguring ? (
                    <View style={styles.content}>
                        <Text style={styles.fieldLabel}>Nome do alarme</Text>
                        <View style={styles.nameOptionsRow}>
                            {nameOptions.map((name) => (
                                <TouchableOpacity
                                    key={name}
                                    style={[
                                        styles.nameOption,
                                        alarmName === name && styles.nameOptionActive,
                                    ]}
                                    onPress={() => setAlarmName(name)}
                                >
                                    <Text
                                        style={[
                                            styles.nameOptionText,
                                            alarmName === name && styles.nameOptionTextActive,
                                        ]}
                                    >
                                        {name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TextInput
                            style={styles.textField}
                            value={alarmName}
                            onChangeText={setAlarmName}
                            placeholder="Digite um nome"
                            placeholderTextColor={colors.textMuted}
                        />

                        <Text style={styles.fieldLabel}>Raio de ativacao</Text>
                        <View style={styles.radiusRow}>
                            {radiusOptions.map((radius) => (
                                <TouchableOpacity
                                    key={radius}
                                    style={[
                                        styles.radiusOption,
                                        selectedRadius === radius && styles.radiusOptionActive,
                                    ]}
                                    onPress={() => setSelectedRadius(radius)}
                                >
                                    <Text
                                        style={[
                                            styles.radiusOptionText,
                                            selectedRadius === radius && styles.radiusOptionTextActive,
                                        ]}
                                    >
                                        {radius}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <Text style={styles.fieldLabel}>Som do alarme</Text>
                        <TouchableOpacity
                            style={styles.selectField}
                            onPress={() => setIsSoundPickerOpen((currentValue) => !currentValue)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.selectFieldText}>{selectedSound}</Text>
                            <Ionicons
                                name={isSoundPickerOpen ? 'chevron-up' : 'chevron-down'}
                                size={18}
                                color={colors.textMuted}
                            />
                        </TouchableOpacity>

                        {isSoundPickerOpen && (
                            <View style={styles.soundOptionsBox}>
                                {soundOptions.map((sound) => (
                                    <TouchableOpacity
                                        key={sound}
                                        style={styles.soundOption}
                                        onPress={() => {
                                            setSelectedSound(sound)
                                            setIsSoundPickerOpen(false)
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.soundOptionText,
                                                selectedSound === sound && styles.soundOptionTextActive,
                                            ]}
                                        >
                                            {sound}
                                        </Text>

                                        {selectedSound === sound && (
                                            <Ionicons name="checkmark" size={18} color={colors.primaryAccent} />
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}

                        <Text style={styles.fieldLabel}>Mensagem personalizada</Text>
                        <TextInput
                            style={[styles.textField, styles.messageField]}
                            value={alarmMessage}
                            onChangeText={setAlarmMessage}
                            multiline
                            textAlignVertical="top"
                        />

                        <View style={styles.offlineCard}>
                            <View style={styles.offlineDot} />

                            <View style={styles.offlineTextBox}>
                                <Text style={styles.offlineTitle}>Funciona offline</Text>
                                <Text style={styles.offlineDescription}>
                                    Alarmes salvos continuam usando GPS mesmo sem internet.
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => onTabPress('home')}
                        >
                            <Text style={styles.primaryButtonText}>Salvar e ativar</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.content}>
                        <View style={styles.searchBox}>
                            <Ionicons name="search-outline" size={20} color={colors.textMuted} />

                            <TextInput
                                style={styles.searchInput}
                                placeholder="Buscar endereco ou parada"
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
                                <Ionicons name="location-outline" size={18} color={colors.textPrimary} />
                            </View>

                            <View style={styles.previewMainInfo}>
                                <Text style={styles.previewLabel}>TEMPO ESTIMADO</Text>
                                <Text style={styles.previewTime}>18 min</Text>
                                <Text style={styles.previewDescription}>Baseado na sua distancia atual</Text>
                            </View>

                            <View style={styles.previewDistanceBox}>
                                <Text style={styles.previewDistance}>2,3 km</Text>
                                <Text style={styles.previewDistanceLabel}>ate o destino</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => setStep('configureAlarm')}
                        >
                            <Text style={styles.primaryButtonText}>Continuar</Text>
                            <Ionicons name="arrow-forward" size={18} color={colors.textPrimary} />
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

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
    title: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: '800',
    },
    subtitle: {
        color: colors.textSecondary,
        fontSize: 16,
        marginTop: 2,
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
    },
    searchBox: {
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
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 14,
        backgroundColor: colors.inputActiveBackground,
        paddingHorizontal: 14,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    previewIconBox: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewMainInfo: {
        flex: 1,
    },
    previewLabel: {
        color: colors.textMuted,
        fontSize: 10,
        fontWeight: '800',
    },
    previewTime: {
        color: colors.textPrimary,
        fontSize: 22,
        fontWeight: '800',
        marginTop: 1,
    },
    previewDescription: {
        color: colors.textSecondary,
        fontSize: 11,
        marginTop: 1,
    },
    previewDistanceBox: {
        alignItems: 'center',
    },
    previewDistance: {
        color: colors.primaryAccent,
        fontSize: 16,
        fontWeight: '800',
    },
    previewDistanceLabel: {
        color: colors.textSecondary,
        fontSize: 11,
        marginTop: 1,
    },
    fieldLabel: {
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 10,
        marginTop: 18,
    },
    nameOptionsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 10,
    },
    nameOption: {
        height: 34,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 999,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#081b2b',
    },
    nameOptionActive: {
        borderColor: colors.primaryAccent,
        backgroundColor: colors.inputActiveBackground,
    },
    nameOptionText: {
        color: colors.textSecondary,
        fontSize: 13,
        fontWeight: '800',
    },
    nameOptionTextActive: {
        color: colors.primaryAccent,
    },
    textField: {
        minHeight: 54,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 14,
        backgroundColor: '#081b2b',
        color: colors.textPrimary,
        fontSize: 15,
        paddingHorizontal: 14,
    },
    messageField: {
        height: 92,
        paddingTop: 14,
        paddingBottom: 14,
    },
    radiusRow: {
        flexDirection: 'row',
        gap: 10,
    },
    radiusOption: {
        flex: 1,
        height: 42,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#081b2b',
    },
    radiusOptionActive: {
        borderColor: colors.primaryAccent,
        backgroundColor: colors.primaryAccent,
    },
    radiusOptionText: {
        color: colors.textSecondary,
        fontSize: 13,
        fontWeight: '800',
    },
    radiusOptionTextActive: {
        color: colors.textPrimary,
    },
    selectField: {
        height: 54,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 14,
        backgroundColor: '#081b2b',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 14,
    },
    selectFieldText: {
        color: colors.textSecondary,
        fontSize: 15,
    },
    soundOptionsBox: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 14,
        backgroundColor: '#081b2b',
        marginTop: 8,
        overflow: 'hidden',
    },
    soundOption: {
        minHeight: 46,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderSoft,
    },
    soundOptionText: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '700',
    },
    soundOptionTextActive: {
        color: colors.primaryAccent,
    },
    offlineCard: {
        marginTop: 26,
        borderRadius: 18,
        backgroundColor: colors.inputActiveBackground,
        padding: 18,
        flexDirection: 'row',
        gap: 14,
    },
    offlineDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.success,
        marginTop: 3,
    },
    offlineTextBox: {
        flex: 1,
    },
    offlineTitle: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: '800',
    },
    offlineDescription: {
        color: colors.textSecondary,
        fontSize: 13,
        lineHeight: 18,
        marginTop: 6,
    },
    primaryButton: {
        height: 56,
        borderRadius: 14,
        backgroundColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        marginTop: 28,
    },
    primaryButtonText: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: '800',
    },
    bottomNavWrapper: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 16,
    },
})
