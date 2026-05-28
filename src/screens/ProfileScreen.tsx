import { Ionicons } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { BottomNav } from '../components/BottomNav'
import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type ProfileScreenProps = {
    onTabPress: (tab: MainTab) => void
    onLogout: () => void
}

export function ProfileScreen({ onTabPress, onLogout }: ProfileScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Perfil</Text>
                        <Text style={styles.subtitle}>Gerencie sua conta</Text>
                    </View>

                    <TouchableOpacity style={styles.avatar}>
                        <Text style={styles.avatarText}>E</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.userCard}>
                        <View style={styles.userAvatar}>
                            <Text style={styles.userAvatarText}>E</Text>
                        </View>

                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Eduardo</Text>
                            <Text style={styles.userEmail}>eduardo@email.com</Text>
                        </View>

                        <TouchableOpacity style={styles.editButton}>
                            <Ionicons name="pencil-outline" size={18} color={colors.textMuted} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.planCard}>
                        <View style={styles.planHeader}>
                            <View>
                                <Text style={styles.cardLabel}>PLANO ATUAL</Text>
                                <Text style={styles.planTitle}>Gratuito</Text>
                            </View>

                            <TouchableOpacity style={styles.planButton} onPress={() => onTabPress('plans')}>
                                <Text style={styles.planButtonText}>Ver planos</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.planUsageRow}>
                            <Text style={styles.remainingTitle}>1 alarme restante</Text>
                        </View>

                        <View style={styles.progressTrack}>
                            <View style={styles.progressFill} />
                        </View>

                        <Text style={styles.premiumMessage}>
                            Assine o Premium para ter alarmes ilimitados e usar o app sem anuncios.
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>Configuracoes do app</Text>

                    <ProfileOption
                        icon="notifications-outline"
                        title="Notificações e alarmes"
                        description="Som, vibração e alertas do app"
                    />

                    <ProfileOption
                        icon="location-outline"
                        title="Localização"
                        description="Permissões, precisão e uso em segundo plano"
                    />

                    <ProfileOption
                        icon="color-palette-outline"
                        title="Aparencia"
                        description="Tema, idioma e personalização"
                    />

                    <Text style={styles.sectionTitle}>Conta</Text>

                    <ProfileOption
                        icon="shield-checkmark-outline"
                        title="Conta e segurança"
                        description="Senha, sessões e proteção da conta"
                    />

                    <ProfileOption
                        icon="lock-closed-outline"
                        title="Privacidade e dados"
                        description="Controle seus dados e permissões"
                    />

                    <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                        <Ionicons name="log-out-outline" size={20} color={colors.danger} />
                        <Text style={styles.logoutText}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.bottomNavWrapper}>
                <BottomNav activeTab="profile" onTabPress={onTabPress} />
            </View>
        </SafeAreaView>
    )
}

type ProfileOptionProps = {
    icon: keyof typeof Ionicons.glyphMap
    title: string
    description: string
}

function ProfileOption({ icon, title, description }: ProfileOptionProps) {
    return (
        <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
                <Ionicons name={icon} size={20} color={colors.primaryAccent} />
            </View>

            <View style={styles.optionTextBox}>
                <Text style={styles.optionTitle}>{title}</Text>
                <Text style={styles.optionDescription}>{description}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
        </TouchableOpacity>
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
        color: colors.textMuted,
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
    userCard: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 12,
        backgroundColor: colors.surfaceRaised,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryAccent,
    },
    userAvatarText: {
        color: colors.textPrimary,
        fontSize: 20,
        fontWeight: '800',
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: '800',
    },
    userEmail: {
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    editButton: {
        width: 38,
        height: 38,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    planCard: {
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 12,
        backgroundColor: colors.inputActiveBackground,
        padding: 14,
        marginTop: 16,
    },
    planHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
    },
    cardLabel: {
        color: colors.primaryAccent,
        fontSize: 11,
        fontWeight: '800',
    },
    planTitle: {
        color: colors.textPrimary,
        fontSize: 22,
        fontWeight: '800',
        marginTop: 6,
    },
    planUsageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
    },
    remainingTitle: {
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: '800',
    },
    progressTrack: {
        height: 7,
        borderRadius: 999,
        backgroundColor: colors.background,
        marginTop: 8,
        overflow: 'hidden',
    },
    progressFill: {
        width: '67%',
        height: '100%',
        borderRadius: 999,
        backgroundColor: colors.primaryAccent,
    },
    premiumMessage: {
        color: colors.textSecondary,
        fontSize: 13,
        lineHeight: 18,
        marginTop: 12,
    },
    planButton: {
        borderRadius: 8,
        backgroundColor: colors.primaryAccent,
        paddingHorizontal: 18,
        paddingVertical: 9,
    },
    planButtonText: {
        color: colors.textPrimary,
        fontSize: 12,
        fontWeight: '800',
    },
    sectionTitle: {
        color: colors.textSecondary,
        fontSize: 15,
        fontWeight: '800',
        marginTop: 16,
        marginBottom: 8,
    },
    option: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 12,
        backgroundColor: colors.surfaceRaised,
        padding: 10,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    optionIcon: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    optionTextBox: {
        flex: 1,
    },
    optionTitle: {
        color: colors.textPrimary,
        fontSize: 15,
        fontWeight: '800',
    },
    optionDescription: {
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 4,
    },
    logoutButton: {
        height: 52,
        borderWidth: 1,
        borderColor: colors.danger,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        marginTop: 10,
    },
    logoutText: {
        color: colors.danger,
        fontSize: 15,
        fontWeight: '800',
    },
    bottomNavWrapper: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 16,
    },
})
