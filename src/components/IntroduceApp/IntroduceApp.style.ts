import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  banner: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtBanner: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  content: {
    margin: 20,
    marginBottom: '15%',
  },
  btnSignUp: {
    backgroundColor: '#4BD963',
    padding: 10,
    borderRadius: 5,
  },
  txtSignUp: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  btnLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  txt: {
    marginRight: 5,
    color: 'white',
    fontSize: 16,
  },
  login: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
