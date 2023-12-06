import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { styles } from '../../styles/academic';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AcademicOffers = ({ navigation }) => {
  const [academicOffers, setAcademicOffers] = React.useState([]);
  const [images, setImages] = React.useState({});

  const fetchImageData = (offers) => {
    offers.forEach((offer) => {
      try {
        fetch(
          `https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/media/${offer.acf.imagen_publicitaria}`
        )
          .then((response) => response.json())
          .then((data) => {
            setImages((prevImages) => ({
              ...prevImages,
              [offer.id]: data.source_url,
            }));
          });
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    });
  };

  React.useEffect(() => {
    fetch(
      'https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/posts'
    )
      .then((response) => response.json())
      .then((data) => {
        const offers = data.filter((post) => post.categories[0] === 4);
        fetchImageData(offers);
        setAcademicOffers(offers);
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
      <ScrollView style={styles.scrollView}>
        {academicOffers.length === 0 ? (
          <View>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          academicOffers.map((offer) => (
            <View key={offer.id} style={styles.mainAcademicContainer}>
              <Text style={styles.tittleSelectedWord}>
                {offer.acf.nombre_de_la_institucion}
              </Text>
              <ImageBackground
                style={styles.academicImage}
                resizeMode="cover"
                source={{ uri: images[offer.id] }}
              />
              <TouchableOpacity
                onPress={() =>
                  openURL(offer.acf?.enlace_hacia_la_oferta_academica_)
                }
              >
                <View style={styles.academicText}>
                  <Text style={styles.conocerMsText}>Conocer más: </Text>
                  <Text style={styles.presionaAqu}>Presiona aquí</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
      <Footer style={styles.footer} />
    </View>
  );
};

export default AcademicOffers;
