import {StyleSheet, Platform} from 'react-native';

export const CELL_SIZE = 45;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

export default StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,

    elevation: 10
  },

  // =======================

  root: {
    marginBottom: 30,
    marginTop: 15
  },
});
