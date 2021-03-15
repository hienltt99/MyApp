import { StyleSheet } from "react-native";

export default StyleSheet.create({
  category:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow:'hidden' 
  },
  itemContainer:{
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    overflow: 'scroll',
  },
  imgItem:{
    width: 170,
    height: 170,
    borderRadius: 15
  },
  nameItem:{
    fontWeight: 'bold',
    marginLeft: 10
  },
  descItem:{
    color: 'gray',
    marginLeft: 10,
    fontSize: 12
  }
})