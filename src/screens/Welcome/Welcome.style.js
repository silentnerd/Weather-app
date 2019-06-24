import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: theme.colors.white,
    marginTop: 40
  },
  textStyle: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    fontSize: theme.sizes.h3,
    //paddingLeft: 30,
    color: theme.colors.black
  },
  inputsContainer: {
    flex: 0.2,
    alignItems: 'center'
  },
  fullWidthButton: {
    backgroundColor:theme.colors.primary,
    height:50,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  fullWidthButtonText: {
    fontSize: theme.sizes.h2,
    color: 'white'
  }
});
