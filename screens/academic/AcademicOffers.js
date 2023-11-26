import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { styles } from '../../styles/academic';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AcademicOffers = ({ navigation }) => {
  const [academicOffer, setAcademicOffer] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const fetchImageData = (imageId) => {
    try {
      fetch(
        `https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/media/${imageId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setImage(data.source_url);
        });
    } catch (error) {
      console.error('Error fetching image data:', error);
      return null;
    }
  };

  React.useEffect(() => {
    fetch(
      'https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/posts'
    )
      .then((response) => response.json())
      .then((data) => {
        const offer = data.find(
          (post) => post.slug === 'prueba-oferta-academica-1'
        );
        fetchImageData(offer.acf.imagen_publicitaria);
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
            source={{ uri: image }}
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
