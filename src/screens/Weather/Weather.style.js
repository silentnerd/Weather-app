import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { theme } from '../../constants';

export default StyleSheet.create({
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 100,
    flexGrow: 1,
    width: width
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white
  }
});
