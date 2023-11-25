import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import UsuariosPantallaDeInicio from '@screens/usuarious/UsuariosPantallaDeInicio';
import AcademicOffers from '@screens/academic/AcademicOffers';
import SingleWordAccordion from '@screens/singleWord/SingleWordAccordion';
import AboutUs from '@screens/about/AboutUs';
import PalabraSingleWord from '@screens/palabra/PlabraSingleWord';
import BusquedaDePalabras from '@screens/busqueda/BuquedaDePalabras';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: 'material',
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={true} />
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="BusquedaDePalabras"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="UsuariosPantallaDeInicio"
                component={UsuariosPantallaDeInicio}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AboutUs"
                component={AboutUs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AcademicOffers"
                component={AcademicOffers}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SingleWordAccordion"
                component={SingleWordAccordion}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PalabraSingleWord"
                component={PalabraSingleWord}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BusquedaDePalabras"
                component={BusquedaDePalabras}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
