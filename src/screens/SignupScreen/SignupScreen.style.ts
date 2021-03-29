import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: 'space-between',
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  icBack:{
    width: 20,
    height: 20, 
    marginRight: 10,
    marginLeft: 10,
    tintColor:'#4477F9',
  },
  txtHeader:{
    fontWeight: 'bold',
    fontSize: 16,
    color:'#4477F9',
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title:{
    color: '#4477F9',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20
  },
  input:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderRadius: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%'
  },
  icInput:{
    width: 20,
    height: 20,
    tintColor: "#4577F9",
    marginRight: 10,
    marginLeft: 10
  },
  txtInput:{
    width: '80%'
  },
  confirm:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  checkbox:{
    width: 20,
    height: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  checkboxed:{
    width: 20,
    height: 20,
    borderColor: '#4477F9',
    borderWidth: 1,
    backgroundColor: '#4477F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  icCheckbox:{
    width: 17,
    height: 17,
    tintColor: 'white'
  },
  agree:{
    marginLeft: 10,
    color:'blue',
    fontSize: 13
  },
  terms:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 13
  },
  btnCreate:{
    backgroundColor: '#4477F9',
    margin: 15,
    paddingTop: 10,
    paddingBottom: 10, 
    paddingLeft: 20, 
    paddingRight: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20,
    width: '90%'
  },
  footer:{
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4477F9',
    width: '90%',
    margin: 15,
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15, 
    paddingLeft: 20, 
    paddingRight: 20,
    justifyContent: 'center',
    marginBottom: 40
  },
  txt:{
    color: '#4477F9',
    fontWeight: '700'
  }
})