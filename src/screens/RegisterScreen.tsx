import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../theme/colors'

type RegisterScreenProps = {
  onLoginPress: () => void
}

export function RegisterScreen({ onLoginPress }: RegisterScreenProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const passwordStrength = getPasswordStrength(password)
  const passwordStrengthLevel = passwordStrength >= 4 ? 'strong' : passwordStrength >= 2 ? 'medium' : 'weak'
  const passwordsDoNotMatch = confirmPassword.length > 0 && password !== confirmPassword

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.returnButton} onPress={onLoginPress}>
            <Ionicons name="arrow-back" size={24} color={colors.iconPrimary} />
            <Text style={styles.returnButtonText}>Voltar para o login</Text>
          </TouchableOpacity>

          <View style={styles.logoBox}>
            <Ionicons name="person-add-outline" size={40} color={colors.textPrimary} />
          </View>

          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Rápido e fácil</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={18} color={colors.iconPrimary} />
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <Text style={styles.emailLabel}>E-mail</Text>
          <View style={styles.inputBoxEmail}>
            <Ionicons name="mail-outline" size={18} color={colors.iconNeutral} />
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
              placeholder="Mínimo de 8 caracteres"
              placeholderTextColor={colors.placeholder}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={18} color={colors.iconMuted} />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordStrength}>
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength >= 1 && styles.passwordStrengthBarActive,
                passwordStrengthLevel === 'weak' && passwordStrength >= 1 && styles.passwordStrengthBarWeak,
                passwordStrengthLevel === 'medium' && passwordStrength >= 1 && styles.passwordStrengthBarMedium,
                passwordStrengthLevel === 'strong' && passwordStrength >= 1 && styles.passwordStrengthBarStrong,
              ]}
            />
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength >= 2 && styles.passwordStrengthBarActive,
                passwordStrengthLevel === 'medium' && passwordStrength >= 2 && styles.passwordStrengthBarMedium,
                passwordStrengthLevel === 'strong' && passwordStrength >= 2 && styles.passwordStrengthBarStrong,
              ]}
            />
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength >= 4 && styles.passwordStrengthBarActive,
                passwordStrength >= 4 && styles.passwordStrengthBarStrong,
              ]}
            />
          </View>

          <Text
            style={[
              styles.passwordStrengthText,
              passwordStrengthLevel === 'weak' && styles.passwordStrengthTextWeak,
              passwordStrengthLevel === 'medium' && styles.passwordStrengthTextMedium,
              passwordStrength >= 4 && styles.passwordStrengthTextStrong,
            ]}
          >
            {passwordStrength >= 4
              ? 'Senha forte'
              : passwordStrength >= 2
                ? 'Senha média - adicione mais variedade'
                : 'Senha fraca - use 8 caracteres'}
          </Text>

          <Text style={styles.passwordConfirmLabel}>Confirmar senha</Text>
          <View style={styles.passwordBox}>
            <Ionicons name="lock-closed-outline" size={18} color={colors.iconMuted} />
            <TextInput
              style={styles.input}
              placeholder="Repita sua senha"
              placeholderTextColor={colors.placeholder}
              secureTextEntry={!showPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={18} color={colors.iconMuted} />
            </TouchableOpacity>
          </View>

          {passwordsDoNotMatch && (
            <Text style={styles.errorText}>As senhas não coincidem</Text>
          )}

          <View style={styles.termos}>
            <TouchableOpacity
              style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}
              onPress={() => setAcceptedTerms(!acceptedTerms)}
            >
              {acceptedTerms && (
                <Ionicons name="checkmark" size={14} color={colors.textPrimary} />
              )}
            </TouchableOpacity>

            <Text style={styles.termosText}>
              Concordo com os{' '}
              <Text
                style={styles.termosLink}
                onPress={() => console.log('clicou nos termos')}
              >
                Termos de uso
              </Text>
              {' '}e a{' '}
              <Text
                style={styles.termosLink}
                onPress={() => console.log('clicou na política')}
              >
                Política de privacidade
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => console.log('clicou no botão de login')}
          >
            <Text style={styles.loginButtonText}>Criar conta</Text>
            <Ionicons name="arrow-forward" size={23} color={colors.textPrimary} />
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou registre com</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={18} color={colors.textSecondary} />
            <Text style={styles.googleButtonText}>Entrar com Google</Text>
          </TouchableOpacity>

          <View style={styles.loginRow}>
            <Text style={styles.loginRowText}>Já tem conta?</Text>
            <TouchableOpacity onPress={onLoginPress}>
              <Text style={styles.loginRowLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function getPasswordStrength(password: string) {
  let score = 0

  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

  return score
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.header,
  },
  returnButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnButtonText: {
    color: colors.link,
    fontSize: 14,
    marginLeft: 8,
  },
  logoBox: {
    width: 80,
    height: 80,
    margin: 25,
    marginTop: 29,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primaryAccent,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryStrong,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.link,
    fontSize: 15,
    marginTop: 8,
  },
  form: {
    width: '100%',
    backgroundColor: colors.surface,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  emailLabel: {
    color: colors.textSecondary,
    marginTop: 13,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputBox: {
    height: 48,
    borderWidth: 2,
    borderColor: colors.primaryAccent,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
    backgroundColor: colors.inputActiveBackground,
  },
  inputBoxEmail: {
    height: 48,
    borderWidth: 2,
    borderColor: colors.borderSoft,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
    backgroundColor: colors.surfaceRaised,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
    marginLeft: 10,
  },
  passwordLabel: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 13,
  },
  passwordStrength: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
  },
  passwordStrengthBar: {
    flex: 1,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.divider,
  },
  passwordStrengthBarActive: {
    backgroundColor: colors.danger,
  },
  passwordStrengthBarWeak: {
    backgroundColor: colors.danger,
  },
  passwordStrengthBarMedium: {
    backgroundColor: colors.warning,
  },
  passwordStrengthBarStrong: {
    backgroundColor: colors.success,
  },
  passwordStrengthText: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 6,
  },
  passwordStrengthTextWeak: {
    color: colors.danger,
  },
  passwordStrengthTextMedium: {
    color: colors.warning,
  },
  passwordStrengthTextStrong: {
    color: colors.success,
  },
  passwordConfirmLabel: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 13,
  },
  passwordBox: {
    height: 48,
    borderWidth: 2,
    borderColor: colors.borderSoft,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
    backgroundColor: colors.surfaceRaised,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 6,
  },
  termos: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 18,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    borderColor: colors.iconPrimary,
    backgroundColor: colors.iconPrimary,
  },
  termosText: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
  termosLink: {
    color: colors.link,
    fontSize: 12,
    fontWeight: '700',
  },
  loginButton: {
    marginTop: 17,
    height: 48,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.header,
  },
  loginButtonText: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.textSecondary,
    fontSize: 12,
    marginHorizontal: 8,
  },
  googleButton: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 17,
  },
  googleButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '800',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 18,
  },
  loginRowText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
  },
  loginRowLink: {
    color: colors.link,
    fontSize: 12,
    fontWeight: '700',
  },
})
