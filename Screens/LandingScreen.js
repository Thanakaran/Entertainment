import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

// Import static images
import profileImage from '../assets/images/profilePhoto.jpg';
import BottomNavBar from '../Component/BottomNavBar';

const categories = [
  { id: '1', name: 'Romance', emoji: '🥰' },
  { id: '2', name: 'Comedy', emoji: '😂' },
  { id: '3', name: 'Horror', emoji: '😱' },
  { id: '4', name: 'Drama', emoji: '😢' },
];

// const favoriteMovies = [
//   { id: '1', title: 'Fast & Furious 7', genre: 'Bollywood Movie', image: require('../assets/images/movie3.jpeg') },
//   { id: '2', title: 'De De Pyaar De', genre: 'Bollywood Movie', image: require('../assets/images/movie4.jpeg') },
//   { id: '3', title: '3 Idiots', genre: 'Bollywood Movie', image: require('../assets/images/movie5.jpeg') },
// ];

export default function LandingScreen() {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] =useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
 
  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://10.10.11.185:8080/movies');

      console.log()
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get('http://10.10.11.185:8080/favoritemovies');

      console.log()
      setFavoriteMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome Mark 👋</Text>
          <Text style={styles.subHeaderText}>Book your favourite movie</Text>
        </View>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="tune" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Latest Movies */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Latest Movies</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <Image source={{ uri: movie.image_url }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieGenre}>{movie.genre}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Favorite Movies */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Favorite Movies</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favoriteMovies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
           <Image source={{ uri: movie.image_url }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieGenre}>{movie.genre}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomNavBar /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#f00',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    marginHorizontal: 30,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  movieCard: {
    marginRight: 20,
    // paddingBottom:20,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  movieGenre: {
    fontSize: 12,
    color: '#888',
  },
});
