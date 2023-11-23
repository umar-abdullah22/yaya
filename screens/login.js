import { TouchableOpacity, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/login';
import { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

const Login = () => {
  // const { setToken, setUser } = useAuth();
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const handleLogin = () => {
    axios
      .post('http://192.168.18.114:5500/api/auth/login', details)
      .then((res) => {
        // setToken(res.data.access_token);
        // setUser(res.data.user);
      })
      .catch((err) => console.log(err.response.data.message));
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 10, color: '#fff' }}>
        Login Page
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 50, color: '#fff' }}>
        Welcome to React Native
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setDetails({ ...details, email })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setDetails({ ...details, password })}
        />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Login Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
