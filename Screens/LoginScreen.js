import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../assets/images/movielogo.png'

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Landing'); // Navigate to LandingScreen on Login
  };

  const handleRegister = () => {
    navigation.navigate('Signup'); // Navigate to LandingScreen on Register
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Log in to your account using email or social networks
      </Text>

      {/* Social Buttons */}
      {/* <TouchableOpacity style={styles.socialButton}>
        <Icon name="apple" size={20} color="#000" />
        <Text style={styles.socialButtonText}>Login with Apple</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#000" />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity> */}

      {/* <Text style={styles.orText}>Or continue with social account</Text> */}

      {/* Input Fields */}
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="phone-pad"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.inputPassword}
          secureTextEntry
        />
        <Icon name="visibility-off" size={20} color="#ccc" />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Didn’t have an account? <Text style={styles.register} onPress={handleRegister}>Register</Text>
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
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  inputPassword: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#f00',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#f00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
  },
  register: {
    color: '#f00',
    fontWeight: 'bold',
  },
});
