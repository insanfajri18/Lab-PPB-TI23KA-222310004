import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from './SignInStyles'; 

export default function SignIn() {
  
  const myEmail = "222310004@student.ibik.ac.id";
  const myPass = "Insanfajri.12";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [passwordError, setPasswordError] = useState(""); 

 
  const validatePassword = (pass) => {
    setPasswordError(""); 

    if (pass.length < 3) {
      setPasswordError("Type minimum 3 character");
      return false;
    }

    
    const hasAlphabet = /[a-zA-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass);

    if (!hasAlphabet || !hasNumber || !hasSymbol) {
      setPasswordError("Value must contain alphabet, number and symbol");
      return false;
    }

    return true; 
  };

  
  const handleSubmit = () => {
   
    const isPasswordValid = validatePassword(password);
    if (!isPasswordValid) {
      return; 
    }

   
    if (email === myEmail && password === myPass) {
      Alert.alert("Sukses", "Selamat Datang muhammad insan fajri");
    
    } else {
      Alert.alert("Login Gagal", "Email/Password is not match");
    }
  };


  const handlerOpenPassword = () => {
    setIsOpenPass(!isOpenPass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login Email</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="npm@student.ibik.ac.id"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput, passwordError ? styles.inputError : null]}
              secureTextEntry={!isOpenPass}
              placeholder="Enter your password"
              autoCorrect={false}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
               
              }}
            />
            <Pressable style={styles.eyeIcon} onPress={handlerOpenPassword}>
              <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="grey" />
            </Pressable>
          </View>
          {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
        </View>

        {/* Tombol Login */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
