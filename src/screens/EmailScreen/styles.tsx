import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  loginBox: {
    width: 343,
    backgroundColor: '#FEFEF9',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#333035',
    fontWeight: '500',
    fontSize: 11,
    textTransform: 'uppercase',
    lineHeight: 22,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginWithPhoneText: {
    textDecorationLine: 'underline',
    color: '#333035',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
    lineHeight: 11,
    marginTop: 15,
  },
  loginButton: {
    width: 96,
    height: 43,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    lineHeight: 11,
    color: '#333035',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
  },
});

export default styles;
