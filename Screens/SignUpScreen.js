import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../assets/images/movielogo.png';


export default function SignupScreen({navigation}) {
  const handleSignup = () => {
    navigation.navigate('Landing'); // Navigate to LandingScreen on Login
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to LandingScreen on Register
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image source = {Logo} style={styles.logo} />
      <Text style={styles.title}>Create New Account</Text>
      <Text style={styles.subtitle}>
        Set up your username and password. You can always change it later.
      </Text>

      {/* Input Fields */}
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          style={styles.inputPassword}
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Icon
            name={confirmPasswordVisible ? 'visibility' : 'visibility-off'}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText} >Signup</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.login} onPress={handleLogin}>Log in</Text>
      </Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  inputPassword: {
    flex: 1,
  },
  signupButton: {
    backgroundColor: '#f00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
  },
  login: {
    color: '#f00',
    fontWeight: 'bold',
  },
});
