import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Handle register logic here
    router.push("/");  // Navigate back to login
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/pildora.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Registro
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nombre completo"
            value={name}
            onChangeText={setName}
            style={styles.input}
            autoCapitalize="words"
          />

          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.loginText}>
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 4,
    marginVertical: 4,
    fontSize: 12,
    width: '70%',
    height: 35,
    backgroundColor: '#fff',
  },
  registerButton: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    padding: 10,
    width: '70%',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF",
    fontSize: 12,
  }
});

export default RegisterScreen;