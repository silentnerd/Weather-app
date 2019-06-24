import React, { Component } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import { Block } from '../components';
const { width } = Dimensions.get('window');
class Steps extends Component {
  scrollX = new Animated.Value(0);

  render() {
    const { savedCities } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={styles.stepsContainer}>
        {savedCities.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp'
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0072ff'
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});

export default Steps;
