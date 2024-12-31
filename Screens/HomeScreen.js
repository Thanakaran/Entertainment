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
import useClickStore from '../Component/Store'; // Import Zustand store

import profileImage from '../assets/images/profilePhoto.jpg';
import BottomNavBar from '../Component/BottomNavBar';

const categories = [
  { id: '1', name: 'Romance', emoji: '  🥰' },
  { id: '2', name: 'Comedy', emoji: '   😂' },
  { id: '3', name: 'Horror', emoji: '   😱' },
  { id: '4', name: 'Drama', emoji: '    😢' },
];

export default function LandingScreen() {
  const { clickCount, increment } = useClickStore();
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchFavoriteMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://172.20.10.4:8080/movies');
      //http://10.10.11.185:8080/movies
      //http://localhost:8080/movies
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get('http://172.20.10.4:8080/favoritemovies');
      //http://10.10.11.185:8080/favoritemovies
      //http://localhost:8080/favoritemovies
      setFavoriteMovies(response.data);
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Thanakaran 👋</Text>
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
            <TouchableOpacity
              key={movie.id}
              style={styles.movieCard}
              onPress={increment} // Increment click count
            >
              <Image source={{ uri: movie.image_url }} style={styles.movieImage} />
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieGenre}>{movie.genre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Favorite Movies */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favorite Movies</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favoriteMovies.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              style={styles.movieCard}
              onPress={increment} // Increment click count
            >
              <Image source={{ uri: movie.image_url }} style={styles.movieImage} />
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieGenre}>{movie.genre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => alert(`Total Clicks: ${clickCount}`)}
      >
        <Text style={styles.buttonText}>{clickCount}</Text>
      </TouchableOpacity>

      <BottomNavBar />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
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
    padding: 2,
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
    marginRight: 10,
    marginHorizontal: 20,
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
    marginRight: 18,
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
  floatingButton: {
    position: 'absolute',
    bottom: 150,
    right: 20,
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
