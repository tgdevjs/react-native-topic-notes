import {StyleSheet} from 'react-native';

const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: blue,
  },
  input: {
    backgroundColor: white,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center',
  },
  button: {
    backgroundColor: white,
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: navy,
  }
});
