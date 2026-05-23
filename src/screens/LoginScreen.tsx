import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
            <View style={styles.logoBox}>
                <Ionicons name="location-outline" size={30} color="#ffffff" />
            </View>

            <Text style={styles.title}>ProxAlert</Text>

            <Text style={styles.subtitle}>Nunca mais perca sua parada</Text>
        </View>

        <View style={styles.form}>
            <Text style={styles.label}>E-mail</Text>
            
            <View style={styles.inputBox}>
                <Ionicons name="mail-outline" size={18} color="#4aa3ff" />
                <TextInput
                    style={styles.input}
                    placeholder="seu@email.com"
                    placeholderTextColor= "#b8c7d8"
                />
            </View>

            <Text style={styles.passwordLabel}>Senha</Text>

            <View style={styles.passwordBox}>
                <Ionicons name="lock-closed-outline" size={18} color="#b8b4ad" />
                <TextInput
                    style={styles.input}
                    placeholder="12345678"
                    placeholderTextColor= "#b8b4ad"
                    secureTextEntry
                />

                <Ionicons name="eye-outline" size={18} color="#b8b4ad" />
            </View>

            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
                <Ionicons name="arrow-forward" size={23} color="#ffffff" />
            </TouchableOpacity>

            <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>ou continue com</Text>
                <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
                <Ionicons name="logo-google" size={18} color="#d6d3ce" />
                <Text style={styles.googleButtonText}>Entrar com Google</Text>
            </TouchableOpacity>

            <View style={styles.registerRow}>
                <Text style={styles.registerText}>Não tem uma conta?</Text>
                <TouchableOpacity>
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
        backgroundColor: '#07111f',
    },
    title: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '800',
    },
    subtitle: {
        color: '#93a4b8',
        fontSize: 15,
        marginTop: 8,
    },
    header: {
        width: '100%',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15518a',
    },
    form: {
        width: '100%',
        flex: 1,
        backgroundColor: '#2b2b29',
        paddingHorizontal: 24,
        paddingTop: 34,
    },
    label: {
        color: '#d6d3ce',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
    },
    inputBox: {
        height: 48,
        borderWidth: 2,
        borderColor: '#2f9bff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        gap: 8,
        backgroundColor: '#224261',
    },
    passwordLabel: {
        color: '#d6d3ce',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
        marginTop: 18,
    },
    passwordBox: {
        height: 48,
        borderWidth: 2,
        borderColor: '#6a6862',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        gap: 10,
        backgroundColor: '#2b2b29',
    },
    input: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14,
        padding: 0,
    },
    logoBox: {
        width: 56,
        height: 56,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f6fb8',
        marginBottom: 16,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: 8,
        marginRight: 4,
    },
    forgotPasswordText: {
        color: '#2f9bff',
        fontSize: 14,
        fontWeight: '600',
    },
    loginButton: {
        height: 60,
        marginTop: 30,
        borderRadius: 14,
        backgroundColor: '#226eb5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    loginButtonText: {
        color: '#ffffff',
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
        backgroundColor: '#5a5852',
    },
    dividerText: {
        color: '#a9a49c',
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 12,
    },
    googleButton: {
        height: 50,
        borderWidth: 1,
        borderColor: '#6a6862',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    googleButtonText: {
        color: '#ffffff',
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
        color: '#d6d3ce',
        fontSize: 14,
        fontWeight: '700',
    },
    registerLink: {
        color: '#2f9bff',
        fontSize: 12,
        fontWeight: '700',
    },
})
