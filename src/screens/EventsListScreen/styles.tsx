import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  imageItem: {
    height: 180,
    width: 280, // You can adjust this value
    resizeMode: 'contain',
  },
  eventTimeContainer: {
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    height: 25,
    justifyContent: 'center',
  },

  eventContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e883ac',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    width: 300,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  eventTitle: {
    fontSize: 32,
    color: '#140D07',
    fontWeight: '400',
    lineHeight: 32,
    textAlign: 'center',
    padding: 10,
  },
  eventDate: {
    fontSize: 12,
    color: '#140D07',
    fontWeight: '400',
    textTransform: 'uppercase',
    lineHeight: 12,
    textAlign: 'center',
  },
  eventLocationTop: {
    fontSize: 21,
    color: '#140D07',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 21,
    textAlign: 'center',
  },
  eventLocation: {
    fontSize: 12,
    color: '#140D07',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 12,
    textAlign: 'center',
  },
});

export default styles;
