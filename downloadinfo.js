import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions, Linking } from 'react-native';
import config from './config'; // Import the config.js file

const { width, height } = Dimensions.get('window');

const DownloadPatientInfoScreen = () => {
  const downloadPersonalInfo = () => {
    const url = `${config.apiBaseUrl}downloadPersonalInfo.php`; // Use the API base URL from config.js
    Linking.openURL(url)
      .catch(() => {
        Alert.alert('Error', 'Failed to download the personal information CSV file.');
      });
  };

  const downloadMedicalInfo = () => {
    const url = `${config.apiBaseUrl}downloadMedicalInfo.php`; // Use the API base URL from config.js
    Linking.openURL(url)
      .catch(() => {
        Alert.alert('Error', 'Failed to download the medical information CSV file.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Download Patient Information</Text>

      <TouchableOpacity style={styles.button} onPress={downloadPersonalInfo}>
        <Text style={styles.buttonText}>Download Personal Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={downloadMedicalInfo}>
        <Text style={styles.buttonText}>Download Medical Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: height * 0.05,
  },
  button: {
    backgroundColor: '#0AB7B7',
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.2,
    marginVertical: height * 0.02,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DownloadPatientInfoScreen;
