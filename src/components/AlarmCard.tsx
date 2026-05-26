import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import { useEffect, useRef } from 'react'

import { colors } from '../theme/colors'

type AlarmCardProps = {
    name: string
    radius: string
    active: boolean
    onToggle: () => void
}

export function AlarmCard({
    name,
    radius,
    active,
    onToggle,
}: AlarmCardProps) {
    
    const thumbPosition = useRef(new Animated.Value(active ? 1 : 0)).current

    useEffect(() => {
        Animated.timing(thumbPosition, {
            toValue: active ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }, [active, thumbPosition])

    const translateX = thumbPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 19],
    })

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.details}>{radius}</Text>
            </View>

            <TouchableOpacity
                style={[styles.switchTrack, active && styles.switchTrackActive]}
                onPress={onToggle}
                activeOpacity={0.8}
            >
                <Animated.View 
                    style={[
                        styles.switchThumb, 
                        {
                            transform: [{ translateX}],
                        },
                    ]} 
                />
            </TouchableOpacity>
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
    switchTrack: {
        width: 42,
        height: 25,
        borderRadius: 999,
        backgroundColor: colors.borderSoft,
        padding: 2.5,
        justifyContent: 'center',
    },
    switchTrackActive: {
        backgroundColor: colors.primaryAccent,
    },
    switchThumb: {
        width: 18,
        height: 18,
        borderRadius: 12,
        backgroundColor: colors.textPrimary,
    },
})
