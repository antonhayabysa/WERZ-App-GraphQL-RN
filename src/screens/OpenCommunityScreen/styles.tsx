import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  item: {
    alignItems: 'center',
    marginRight: 20,
  },
  imageItem: {
    width: 100,
    height: 100,
  },
  text: {
    paddingTop: 5,
    lineHeight: 9,
    color: '#333035',
    fontWeight: '700',
    fontSize: 9,
  },
});

export default styles;
