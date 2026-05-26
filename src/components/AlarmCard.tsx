import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../theme/colors'

type AlarmCardProps = {
    name: string
    radius: string
    active: boolean
}

export function AlarmCard({
    name,
    radius,
    active,
}: AlarmCardProps) {
    return (
        <View style={styles.card}>
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.details}>{radius}</Text>
        </View>

        <View style={[styles.badge, active ? styles.badgeActive : styles.badgeInactive]}>
            <Text style={styles.badgeText}>
            {active ? 'Ativo' : 'Inativo'}
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 18,
        backgroundColor: colors.surfaceRaised,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: '800',
    },
    details: {
        color: colors.textMuted,
        fontSize: 13,
        marginTop: 6,
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 999,
    },
    badgeActive: {
        backgroundColor: '#153d2b',
    },
    badgeInactive: {
        backgroundColor: '#3a2630',
    },
    badgeText: {
        color: colors.textPrimary,
        fontSize: 12,
        fontWeight: '800',
    },
})