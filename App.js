import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('./assets/mypicture.png')} // ✅ your uploaded picture
          style={styles.profileImage}
        />

        <Text style={styles.name}>Brent Timothy G. Cruspe</Text>
        <Text style={styles.course}>BS Computer Science </Text>
        <Text style={styles.course}>• 3rd Year •</Text>

        {/* Contact Info */}
        <Text style={styles.contact}>📧 brent.cruspe@email.com</Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>About Me:</Text>
          <Text style={styles.info}>
            A simple guy trying his best.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}> 🏆Achievements:</Text>
          <Text style={styles.info}>
            • With Honors (2017-2021){'\n'}
            • Former member of Computer Science Student Organization (CIA){'\n'}
            • Member of AWS Learning Club - Spade (MARKETING){'\n'}
            • Community Volunteer
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>💻Skills:</Text>
          <Text style={styles.info}>
            • Java{'\n'}
            • Python{'\n'}
            • Public Speaking{'\n'}
            • Problem Solving
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#00796b',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
  },
  course: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
    color: '#555',
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#b2dfdb',
    marginVertical: 10,
  },
  section: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});
