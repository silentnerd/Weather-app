import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { theme } from '../../constants';
export default StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.white,
    marginTop: Platform.OS == 'ios' ? 30 : 0
  },
  textStyle: {
    padding: 10,
    fontSize: theme.sizes.h3,
    paddingLeft: 30,
    color: theme.colors.black
  }
});
