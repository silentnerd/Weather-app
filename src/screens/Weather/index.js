import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { LineChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCity, removeCity } from '../../redux/actions';
import fetchWeather from '../../redux/api/fetchWeather';
import { theme } from '../../constants';
import { Divider } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { Steps, SevenDayForcast, CurrentWeatherInfo } from '../../containers';
import styles from './Weather.style.js';

class Weather extends Component {
  static navigationOptions = {
    header: null
  };

  scrollX = new Animated.Value(0);

  state = {
    weatherId: this.props.navigation.state.params.wid,
    //isLoading: this.props.pending,
    savedCities: [],
    SevenDayForcast: [],
    cityFullInfo: []
  };

  removeCityFunc = id => {
    Alert.alert(
      'Delete',
      'Are you sure, do you want to delete this !',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'YES',
          onPress: () => {
            this.props.savedCities.length === 1
              ? (this.props.removeCity(id),
              this.props.navigation.navigate('Welcome'))
              : (this.props.removeCity(id), this.forceUpdate());
          }
        }
      ],
      { cancelable: false }
    );
  };

  refresh = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.props.fetchWeather(this.state.weatherId);
    this.refresh();
  }

  render() {
    if (this.props.pending) {
      //Loading View while data is loading
      return (
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../../../assets/weathericon.png')}
            style={{
              width: 110,
              height: 110,
              alignItems: 'center',
              marginBottom: 10
            }}
          />
          <Text
            style={{
              color: theme.colors.black,
              opacity: 0.5,
              fontSize: 20,
              marginBottom: 10
            }}
          >
            Loading ...
          </Text>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      );
    }

    const { navigation } = this.props;
    return (
      <LinearGradient style={{ flex: 1 }} colors={['#00c6ff', '#0072ff']}>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginRight: 10,
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 50,
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1
            }}
          >
            <Icon
              name={'plus'}
              onPress={() => navigation.navigate('SearchCities')}
              size={40}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.savedCities}
          extraData={this.state}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => (
            <React.Fragment>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
              >
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1
                  }}
                >
                  <Icon
                    name={'trash'}
                    onPress={() => this.removeCityFunc(index)}
                    size={40}
                    color={theme.colors.accent}
                  />
                </TouchableOpacity>
                <CurrentWeatherInfo currentInfo={item.CurrentTemp} />

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevationLow: {
                      ...Platform.select({
                        ios: {
                          shadowColor: theme.colors.black,
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.8,
                          shadowRadius: 2
                        },
                        android: {
                          elevation: 5
                        }
                      })
                    }
                  }}
                >
                  <LineChart
                    data={{
                      labels: [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thurs',
                        'Fri',
                        'Sat',
                        'Sun'
                      ],
                      datasets: [
                        {
                          data: [20, 40, 23, 32, 30, 27]
                        }
                      ]
                    }}
                    width={Dimensions.get('window').width - 50} // from react-native
                    height={220}
                    chartConfig={{
                      backgroundGradientFrom: '#00c6ff',
                      backgroundGradientTo: '#0072ff',
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: () => 'rgba(255, 255, 255)',
                      strokeWidth: 2,
                      style: {
                        borderRadius: 10
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                  />
                </View>
                <SevenDayForcast SevenDayForcast={item.SevenDayForcast} />
              </ScrollView>
            </React.Fragment>
          )}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { x: this.scrollX } }
            }
          ])}
        />
        <Divider />
        <Steps savedCities={this.props.savedCities} />
      </LinearGradient>
    );
  }
}

Weather.defaultProps = {
  savedCities: []
};

const mapStateToProps = state => ({
  savedCities: state.savedCities,
  error: state.weatherLists.error,
  weatherLists: state.weatherLists,
  pending: state.weatherLists.pending
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCity,
      removeCity,
      fetchWeather
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
