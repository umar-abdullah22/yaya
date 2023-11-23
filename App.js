import { NavigationContainer } from '@react-navigation/native';

// import { AuthProvider } from './context/AuthContext';
import Main from './screens/main';

export default function App() {
  return (
    // <AuthProvider>
    <NavigationContainer>
      <Main />
    </NavigationContainer>
    // </AuthProvider>
  );
}
