import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import 'moment-timezone';

class CurrentWeatherInfo extends Component {

  render() {
    const { currentInfo } = this.props;
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let applicableDate = new Date(moment().format('YYYY-MM-DD'));
    applicableDate = days[applicableDate.getDay()];
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 35, color: '#fff' }}>{currentInfo.title}</Text>
        <Text style={{ fontSize: 15, color: '#fff' }}>
          {currentInfo.consolidated_weather[0].weather_state_name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: 35,
              justifyContent: 'center'
            }}
          >
            <Text style={{ color: 'white' }}>
              {moment(currentInfo.sun_rise)
                .tz(currentInfo.timezone)
                .format('HH:mm')}
            </Text>
            <Image
              source={require('../../assets/icons/sunrise.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: 'white' }}>Sunrise</Text>
          </View>

          <Text style={{ fontSize: 80, color: '#fff' }}>
            {currentInfo.consolidated_weather[0].the_temp.toFixed(0)}
          </Text>
          <Text style={{ fontSize: 80, color: '#fff' }}>&#176;</Text>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 35,
              justifyContent: 'center'
            }}
          >
            <Text style={{ color: 'white' }}>
              {moment(currentInfo.sun_set)
                .tz(currentInfo.timezone)
                .format('HH:mm')}
            </Text>
            <Image
              source={require('../../assets/icons/sunset.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: 'white' }}>Sunset</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'left',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20
            }}
          >
            {applicableDate}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'left',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20
            }}
          >
            TODAY
          </Text>
        </View>
      </View>
    );
  }
}

export default CurrentWeatherInfo;
