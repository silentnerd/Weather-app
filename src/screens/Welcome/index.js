import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './Welcome.style.js';
import { theme } from '../../constants';

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    longitude: null,
    latitude: null
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetch(
          'https://www.metaweather.com/api/location/search/?lattlong=' +
            position.coords.longitude +
            ',' +
            position.coords.longitude
        )
          .then(response => response.json())
          .then(responseJson => {
            this.props.navigation.navigate('Weather', {
              wid: responseJson[0].woeid
            });
          });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={{flex:1}}>
        <View style={{ marginTop: 150}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center'}}>
          Welcome.
            <Text style={{fontSize: 30, color: theme.colors.primary}}> Weather Genie.</Text>
          </Text>
          <Text style={{ marginTop: theme.sizes.padding / 2, fontSize: 18, color: theme.colors.grey2, textAlign: 'center'}}>
          Enjoy the experience.
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('SearchCities');
            }} style={styles.fullWidthButton} >
              <Text style={styles.fullWidthButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={() => this.findCoordinates()} style={styles.fullWidthButton} >
              <Text style={styles.fullWidthButtonText}>Current Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

export default Welcome;
