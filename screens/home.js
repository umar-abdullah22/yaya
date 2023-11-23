import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles/login';

const Home = () => {
  const handleLogout = () => {
    // setToken(null);
  };
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 40, marginTop: 350 }}>
        Welcome {user?.userName}!
      </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text
          style={{
            backgroundColor: 'purple',
            width: 100,
            borderRadius: 50,
            paddingLeft: 30,
            paddingVertical: 10,
            color: '#fff',
            margin: 10,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
