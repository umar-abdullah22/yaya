import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PalabraText from '../../components/PalabraText';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/busqueda';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';

const BusquedaDePalabras = ({ navigation }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://yayaappbackend-wordpress.server.highranknetwork.com/wp-json/wp/v2/posts'
    )
      .then((response) => response.json())
      .then((data) => {
        const nonAcademicOffers = data.filter(
          (item) => item.slug !== 'prueba-oferta-academica-1'
        );
        setAllData(nonAcademicOffers);
        setFilteredData(nonAcademicOffers);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = allData.filter((item) =>
      item.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleWordClick = (wordData) => {
    navigation.navigate('PalabraSingleWord', { wordData });
  };

  return (
    <View style={styles.busquedaDePalabras}>
      <View style={styles.mainHeaderWithLogo}>
        <View style={[styles.heroLogo]}>
          <View style={[styles.heroImageGradient]}>
            <Image
              style={styles.heroImage}
              contentFit="fill"
              source={require('../../assets/tainosintheriver-1.png')}
            />
            <LinearGradient
              style={styles.headerLinearGradient}
              locations={[0, 1]}
              colors={['rgba(0, 159, 232, 0.85)', 'rgba(0, 159, 232, 0.85)']}
            />
            <View style={styles.mainNavBar}>
              <View style={styles.navManage}>
                <Image
                  style={styles.image1Icon}
                  contentFit="cover"
                  source={require('../../assets/logo.png')}
                />
                <View style={[styles.searchbarLayout]}>
                  <Button
                    style={styles.btngoback}
                    mode="outlined"
                    btngoback="backscreenbutton"
                    contentStyle={styles.rectangleButtonBtn}
                    onPress={() => navigation.goBack()}
                  >
                    {/* BackButton */}
                    <Text style={styles.atrsBtn}>Atrás</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.searchBarRow}>
                <View style={styles.searchbar}>
                  <TextInput
                    style={styles.searchbar1}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Escribir palabra..."
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.searchbuttoncomponent}>
                  <Button
                    style={styles.searchButton}
                    mode="outlined"
                    labelStyle={styles.searchButtonBtn}
                    onPress={handleSearch}
                  >
                    Buscar
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={styles.midSection}>
          <ScrollView style={styles.searchresultcards}>
            {filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleWordClick(item)}
              >
                <View key={index} style={styles.flatlistLayout}>
                  <PalabraText text={item.slug} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <Footer />
    </View>
  );
};

export default BusquedaDePalabras;
