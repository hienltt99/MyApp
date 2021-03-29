import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    flex: 1
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    overflow: 'scroll',
  },
  imgItem: {
    width: 170,
    height: 170,
    borderRadius: 15
  },
  nameItem: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  descItem: {
    color: 'gray',
    marginLeft: 10,
    fontSize: 12
  }
})