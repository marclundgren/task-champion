import { StyleSheet } from 'react-native';

const primaryColor = '#16a085';
const secondaryColor = '#e74c3c';
const black = '#000';
const white = '#fff';
const gray = '#aaa';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  padded: {
    padding: 10,
  },
  margined: {
    margin: 10,
  },
  bordered: {
    borderColor: black,
    borderWidth: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  primaryColor: {
    color: primaryColor,
  },
  secondaryColor: {
    color: secondaryColor,
  },
  backgroundPrimary: {
    backgroundColor: primaryColor,
  },
  backgroundSecondary: {
    backgroundColor: secondaryColor,
  },
  borderColorPrimary: {
    borderColor: primaryColor,
  },
  borderColorTertiary: {
    borderColor: gray,
  },
  borderColorWhite: {
    borderColor: white,
  },
  backgroundTertiary: {
    backgroundColor: '#ccc',
  },
  white: {
    color: white,
  },
  gray: {
    color: gray,
  },
  strong: {
    fontWeight: 'bold',
  },
});
