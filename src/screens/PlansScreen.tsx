import { Ionicons } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Planos</Text>
                    <Text style={styles.subtitle}>Escolha como quer usar o ProxAlert</Text>
                    <Text style={styles.screenHint}>Free ou Premium</Text>
                </View>

                <View style={styles.content}>
                    <View style={[styles.planCard, styles.premiumCard]}>
                        <View style={styles.recommendedBadge}>
                            <Text style={styles.recommendedBadgeText}>RECOMENDADO</Text>
                        </View>

                        <View style={styles.planHeader}>
                            <View>
                                <Text style={styles.planName}>Premium</Text>
                                <Text style={styles.planDescription}>Mais controle e sem limites</Text>
                            </View>

                            <Ionicons name="ribbon-outline" size={30} color={colors.primaryAccent} />
                        </View>

                        <View style={styles.priceRow}>
                            <Text style={styles.price}>R$ 9,90</Text>
                            <Text style={styles.pricePeriod}>/mes</Text>
                        </View>

                        <View style={styles.featuresList}>
                            <PlanFeature text="Alarmes ilimitados" />
                            <PlanFeature text="Modo terceiro liberado" />
                            <PlanFeature text="Sem anuncios" />
                            <PlanFeature text="Links temporarios de acompanhamento" />
                        </View>

                        <TouchableOpacity style={styles.premiumButton}>
                            <Text style={styles.premiumButtonText}>Assinar Premium</Text>
                            <Ionicons name="arrow-forward" size={18} color={colors.textPrimary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.planCard}>
                        <View style={styles.planHeader}>
                            <View>
                                <Text style={styles.planName}>Free</Text>
                                <Text style={styles.planDescription}>Para uso basico</Text>
                            </View>

                            <View style={styles.currentBadge}>
                                <Text style={styles.currentBadgeText}>Atual</Text>
                            </View>
                        </View>

                        <Text style={styles.freePrice}>R$ 0</Text>

                        <View style={styles.featuresList}>
                            <PlanFeature text="Ate 3 alarmes salvos" />
                            <PlanFeature text="Alertas por proximidade" />
                            <PlanFeature text="Anuncios no app" />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomNavWrapper}>
                <BottomNav activeTab="plans" onTabPress={onTabPress} />
            </View>
        </SafeAreaView>
    )
}

type PlanFeatureProps = {
    text: string
}

function PlanFeature({ text }: PlanFeatureProps) {
    return (
        <View style={styles.feature}>
            <Ionicons name="checkmark-circle-outline" size={18} color={colors.success} />
            <Text style={styles.featureText}>{text}</Text>
        </View>
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
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 18,
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
    screenHint: {
        color: colors.primaryAccent,
        fontSize: 13,
        fontWeight: '800',
        marginTop: 8,
    },
    content: {
        paddingHorizontal: 18,
        gap: 16,
    },
    planCard: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 16,
        backgroundColor: colors.surfaceRaised,
        padding: 18,
    },
    premiumCard: {
        borderColor: colors.primaryAccent,
        backgroundColor: colors.inputActiveBackground,
    },
    recommendedBadge: {
        alignSelf: 'flex-start',
        borderRadius: 999,
        backgroundColor: colors.primaryAccent,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 14,
    },
    recommendedBadgeText: {
        color: colors.textPrimary,
        fontSize: 10,
        fontWeight: '800',
    },
    planHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    planName: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: '800',
    },
    planDescription: {
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    currentBadge: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    currentBadgeText: {
        color: colors.textSecondary,
        fontSize: 12,
        fontWeight: '800',
    },
    freePrice: {
        color: colors.textPrimary,
        fontSize: 30,
        fontWeight: '800',
        marginTop: 20,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 20,
    },
    price: {
        color: colors.textPrimary,
        fontSize: 34,
        fontWeight: '800',
    },
    pricePeriod: {
        color: colors.textMuted,
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 6,
        marginLeft: 4,
    },
    featuresList: {
        marginTop: 18,
        gap: 10,
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    featureText: {
        color: colors.textSecondary,
        fontSize: 14,
        flex: 1,
    },
    premiumButton: {
        height: 54,
        borderRadius: 14,
        backgroundColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        marginTop: 24,
    },
    premiumButtonText: {
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
