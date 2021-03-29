import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icBack: {
    transform: [{ scale: 0.2 }],
  },
  txtHeader: {
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    marginTop: 15
  },
  imgContainer: {
    backgroundColor: '#e5e5e5',
    width: 150,
    height: 150,
    padding: 20,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  bgImg: {
    backgroundColor: '#b1b1b1',
    borderRadius: 100,
    width: 120,
    height: 120,
  },
  imgPass: {
    width: 120,
    height: 120,
    marginBottom: 10
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6F7A93',
    marginTop: 30,
    marginBottom: 20,
    width: '80%'
  },
  btnChangepass: {
    backgroundColor: '#F5C142',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 40

  },
  txtBtn: {
    fontWeight: 'bold'
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  icKey: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  txtInput: {
    width: '80%'
  },
  icEye: {

  }
})