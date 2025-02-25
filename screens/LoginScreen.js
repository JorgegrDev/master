import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Modal, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    router.push("/(tabs)"); // Navigate to tabs after login
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/pildora.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Iniciar Sesión
        </Text>

        <View style={styles.inputContainer}>
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

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? '#007AFF' : undefined}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>
              Acepto los{' '}
              <Text 
                style={styles.termsText}
                onPress={() => setModalVisible(true)}
              >
                términos y condiciones
              </Text>
            </Text>
          </View>

          <TouchableOpacity 
            style={[
              styles.loginButton, 
              !isChecked && styles.loginButtonDisabled
            ]} 
            onPress={handleLogin}
            disabled={!isChecked}
          >
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.registerText}>
            ¿No tienes cuenta? Regístrate aquí
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <ScrollView>
                <Text style={styles.modalText}>
                  Aquí van los términos y condiciones...
                </Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff2', // Color de fondo gris
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#f5f5f5', // Cambio a un gris claro
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
    color: '#333', // Texto más oscuro para mejor contraste
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
    backgroundColor: '#fff', // Fondo blanco para los inputs
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#333',
  },
  termsText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    padding: 10,
    width: '70%',
    marginTop: 10,
  },
  loginButtonDisabled: {
    backgroundColor: '#aaa',
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF", // Cambio a color que coincida con el botón
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007AFF',
    borderRadius: 6,
    padding: 10,
    width: '100%',
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
