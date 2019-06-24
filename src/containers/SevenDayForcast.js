import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button
} from 'react-native';
import moment from 'moment';
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
class SavenDayForcast extends Component {
  state = {
    show: true
  };
  componentDidMount() {
    //console.log(this.props.SevenDayForcast);
    //this.reset();
  }

  reset = () => {
    this.setState({ state: this.state });
  };

  toggleShow = () => {
    this.setState({ state: this.state });
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="7 Day Forcast"
          style={{ backgroundColor: '#0072ff' }}
          onPress={this.toggleShow}
        />
        {this.state.show ? (
          <React.Fragment>
            <FlatList
              data={this.props.SevenDayForcast}
              extraData={this.state}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10
                  }}
                >
                  <View style={{ width: 100 }}>
                    <Text
                      style={(styles.item, { color: '#fff', fontSize: 17 })}
                    >
                      {days[moment(item.applicable_date).day()]}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri:
                        'https://www.metaweather.com/static/img/weather/png/' +
                        item.weather_state_abbr +
                        '.png'
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>
                      {item.max_temp.toFixed(0)}
                    </Text>
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#fff',
                        marginRight: 10,
                        marginTop: -6
                      }}
                    >
                      &#176;
                    </Text>
                    <Text style={{ fontSize: 20, color: '#fff', opacity: 0.5 }}>
                      {item.min_temp.toFixed(0)}
                    </Text>
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#fff',
                        opacity: 0.5,
                        marginTop: -6
                      }}
                    >
                      &#176;
                    </Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </React.Fragment>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
});

export default SavenDayForcast;
