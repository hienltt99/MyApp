import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  },
  icMenu: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  txtMenu: {
    fontWeight: '700',
    fontSize: 20,
    textTransform: "uppercase"
  },
  icSearch: {
    width: 20,
    height: 20,
    tintColor: 'black'
  },
  content: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 15,
    marginTop: 40,
  },
  imgBanner: {
    width: 150,
    height: 150,
    margin: 30,
    marginTop: 110,
    marginBottom: 50
  },
  txt: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  txtDesc: {
    fontSize: 12,
    color: '#CCCBD0',
    width: '44%',
    textAlign: 'center',
    marginTop: 15
  },
  btnFullmenu: {
    backgroundColor: '#02D126',
    borderRadius: 10,
    marginTop: '35%',
    marginBottom: -18
  },
  txtFullname: {
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: 'bold',
  }
})