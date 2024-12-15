import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutScreen = ({ route, navigation }) => {
  const { movie } = route.params; // Retrieve movie details from navigation

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Movie Details</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={movie.image} style={styles.poster} />
        <View style={styles.infoSection}>
          <View style={styles.tag}>
            <Icon name="movie" size={16} color="#fff" />
            <Text style={styles.tagText}>{movie.genre}</Text>
          </View>
          <View style={styles.tag}>
            <Icon name="access-time" size={16} color="#fff" />
            <Text style={styles.tagText}>{movie.duration}</Text>
          </View>
          <View style={styles.tag}>
            <Icon name="star" size={16} color="#fff" />
            <Text style={styles.tagText}>{movie.rating}</Text>
          </View>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Seat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 8 },
  poster: { width: '70%', height: 250, borderRadius: 8, marginBottom: 16 },
  infoSection: { marginLeft: 16 },
  tag: { flexDirection: 'row', backgroundColor: '#FF6666', borderRadius: 16, padding: 8, marginVertical: 5 },
  tagText: { color: '#fff', marginLeft: 8 },
  details: { marginTop: 16 },
  movieTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 14, color: '#666' },
  button: { position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#FF6666', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default AboutScreen;
