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
    marginBottom: 50,
    marginTop: 30
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
    marginTop: 10,
    marginBottom: 10,
    width: '80%'
  },
  desc: {
    color: '#B9BECA',
    marginBottom: 20,
    width: '80%'
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10
  },
  imgUser: {
    width: 22,
    height: 22,
    marginRight: 10,
    tintColor: 'black'
  },
  txtInput: {
    width: '80%'
  },
  btnNext: {
    backgroundColor: '#F5C142',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20

  },
  txtBtn: {
    fontWeight: 'bold'
  }
})