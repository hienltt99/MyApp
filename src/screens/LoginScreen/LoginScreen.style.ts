import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '-45%'

  },
  ic_back:{
    transform:[{scale: 0.3}],
    tintColor: 'white'
  },
  txtHeader:{
    marginLeft: '20%', 
    fontSize: 20,
    fontWeight: "bold"
  },
  signinContainer:{
    width: "95%",
    display:'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom: '5%',
    borderRadius: 10,
    padding: 10,
  },
  signinFB:{
    display: "flex",
    flexDirection:'row',
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: '#4267B2',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  ic_fb:{
    width: 20,
    height: 20,
    marginRight: 10
  },
  txtInput:{
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 15,
    borderRadius: 5,

  },
  inputEmail:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  btnSignIn:{
    backgroundColor: "#4CDA64",
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  txt:{
    color: 'white',
    fontSize: 18
  },
  forgotPass:{
    color: "#2DA2D6",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10
  }
});