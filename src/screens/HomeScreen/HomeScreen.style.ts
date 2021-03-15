import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  },
  icMenu:{
    width: 20, 
    height: 20,
    tintColor: 'black',
  },
  txtMenu:{
    fontWeight: '700',
    fontSize: 20,
    textTransform: "uppercase"
  },
  icSearch:{
    width: 20, 
    height: 20,
     tintColor: 'black'
  }
})