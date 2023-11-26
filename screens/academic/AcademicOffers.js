import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/academic';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AcademicOffers = ({ navigation }) => {
  const [academicOffer, setAcademicOffer] = React.useState(null);

  React.useEffect(() => {
    fetch(
      'https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/posts'
    )
      .then((response) => response.json())
      .then((data) => {
        const offer = data.find(
          (post) => post.slug === 'prueba-oferta-academica-1'
        );
        setAcademicOffer(offer);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={styles.academicOffers}>
      <Header navigation={navigation} />
      <Text style={styles.tittleSelectedWord}>
        {academicOffer?.acf?.nombre_de_la_institucion}
      </Text>
      {!academicOffer ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={styles.mainAcademicContainer}>
          <ImageBackground
            style={styles.academicImage}
            resizeMode="cover"
            source={require('../../assets/academic/publicidad11.png')}
          />
          <TouchableOpacity
            onPress={() =>
              openURL(academicOffer?.acf?.enlace_hacia_la_oferta_academica_)
            }
          >
            <View style={styles.academicText}>
              <Text style={styles.conocerMsText}>Conocer más: </Text>
              <Text style={styles.presionaAqu}>Presiona aquí</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <Footer />
    </View>
  );
};

export default AcademicOffers;
