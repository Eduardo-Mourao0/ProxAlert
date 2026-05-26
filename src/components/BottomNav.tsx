import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../theme/colors'
import { MainTab } from '../types/navigation'

type BottomNavProps = {
    activeTab: MainTab
    onTabPress: (tab: MainTab) => void
}

export function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
    return (
        <View style={styles.container}>
            <NavItem label="Inicio" icon="home-outline" active={activeTab === 'home'} onPress={() => onTabPress('home')} />
            <NavItem label="Alarme" icon="notifications-outline" active={activeTab === 'alarm'} onPress={() => onTabPress('alarm')} />
            <NavItem label="Terceiro" icon="people-outline" active={activeTab === 'third'} onPress={() => onTabPress('third')} />
            <NavItem label="Planos" icon="diamond-outline" active={activeTab === 'plans'} onPress={() => onTabPress('plans')} />
            <NavItem label="Perfil" icon="person-outline" active={activeTab === 'profile'} onPress={() => onTabPress('profile')} />
        </View>
    )
}

type NavItemProps = {
    label: string
    icon: keyof typeof Ionicons.glyphMap
    active: boolean
    onPress: () => void
}

function NavItem({ label, icon, active, onPress }: NavItemProps) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Ionicons
                name={icon}
                size={24}
                color={active ? colors.primaryAccent : colors.textMuted}
            />
            <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 58,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 22,
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: colors.textMuted,
        fontSize: 11,
        fontWeight: '700',
        marginTop: 3,
    },
    labelActive: {
        color: colors.textPrimary,
    },
})
