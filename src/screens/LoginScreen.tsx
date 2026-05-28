import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

import { colors } from '../theme/colors'

type LoginScreenProps = {
    onLoginPress: () => void
    onRegisterPress: () => void
}

export function LoginScreen({ onLoginPress, onRegisterPress }: LoginScreenProps) {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <View style={styles.logoBox}>
                    <Ionicons name="location-outline" size={30} color={colors.textPrimary} />
                </View>

                <Text style={styles.title}>ProxAlert</Text>

                <Text style={styles.subtitle}>Nunca mais perca sua parada</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                
                <View style={styles.inputBox}>
                    <Ionicons name="mail-outline" size={18} color={colors.iconPrimary} />
                    <TextInput
                        style={styles.input}
                        placeholder="seu@email.com"
                        placeholderTextColor={colors.placeholder}
                    />
                </View>

                <Text style={styles.passwordLabel}>Senha</Text>

                <View style={styles.passwordBox}>
                    <Ionicons name="lock-closed-outline" size={18} color={colors.iconMuted} />
                    <TextInput
                        style={styles.input}
                        placeholder="*******"
                        placeholderTextColor={colors.iconMuted}
                        secureTextEntry={!showPassword}
                    />

                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={18} color={colors.iconMuted} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                    <Ionicons name="arrow-forward" size={23} color={colors.textPrimary} />
                </TouchableOpacity>

                <View style={styles.dividerRow}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>ou continue com</Text>
                    <View style={styles.dividerLine} />
                </View>

                <TouchableOpacity style={styles.googleButton}>
                    <Ionicons name="logo-google" size={18} color={colors.textSecondary} />
                    <Text style={styles.googleButtonText}>Entrar com Google</Text>
                </TouchableOpacity>

                <View style={styles.registerRow}>
                    <Text style={styles.registerText}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={onRegisterPress}>
                        <Text style={styles.registerLink}>Criar agora</Text>
                    </TouchableOpacity>
                </View>

            </View>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 32,
        fontWeight: '800',
    },
    subtitle: {
        color: colors.textMuted,
        fontSize: 15,
        marginTop: 8,
    },
    header: {
        width: '100%',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    form: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 24,
        paddingTop: 34,
    },
    label: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
    },
    inputBox: {
        height: 48,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        gap: 8,
        backgroundColor: '#081b2b',
    },
    passwordLabel: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
        marginTop: 18,
    },
    passwordBox: {
        height: 48,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        gap: 10,
        backgroundColor: '#081b2b',
    },
    input: {
        flex: 1,
        color: colors.textPrimary,
        fontSize: 14,
        padding: 0,
    },
    logoBox: {
        width: 56,
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.inputActiveBackground,
        marginBottom: 16,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: 8,
        marginRight: 4,
    },
    forgotPasswordText: {
        color: colors.primaryAccent,
        fontSize: 14,
        fontWeight: '600',
    },
    loginButton: {
        height: 60,
        marginTop: 30,
        borderRadius: 14,
        backgroundColor: colors.primaryAccent,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    loginButtonText: {
        color: colors.textPrimary,
        fontSize: 19,
        fontWeight: '800',
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.divider,
    },
    dividerText: {
        color: colors.textSubtle,
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 12,
    },
    googleButton: {
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    googleButtonText: {
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: '800',
    },
    registerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        gap: 4,
    },
    registerText: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '700',
    },
    registerLink: {
        color: colors.primaryAccent,
        fontSize: 12,
        fontWeight: '700',
    },
})
