import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use the appropriate icon library

export default function BottomNavBar() {
  return (
    <View style={styles.navBar}>
      {/* Home Button */}
      <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
        <Icon name="home" size={24} color="#fff" />
        <Text style={styles.activeNavText}>Home</Text>
      </TouchableOpacity>

      {/* Search Icon */}
      <TouchableOpacity style={styles.navItem}>
        <Icon name="search" size={24} color="#ccc" />
      </TouchableOpacity>

      {/* Favorite Icon */}
      <TouchableOpacity style={styles.navItem}>
        <Icon name="favorite-outline" size={24} color="#ccc" />
      </TouchableOpacity>

      {/* Tickets Icon */}
      <TouchableOpacity style={styles.navItem}>
        <Icon name="confirmation-number" size={24} color="#ccc" />
      </TouchableOpacity>

      {/* Profile Icon */}
      <TouchableOpacity style={styles.navItem}>
        <Icon name="person-outline" size={24} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavItem: {
    backgroundColor: '#FF5C5C', // Highlighted red color
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  activeNavText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
