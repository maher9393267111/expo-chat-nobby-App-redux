import {StyleSheet} from 'react-native';

import colors from './../../../styles/colors';
import radius from './../../../styles/radius';
import spaces from './../../../styles/spaces';
import sizes from './../../../styles/fontSizes';

//Here the basic styles of the LocationMessage component are created.
const basicStyles = StyleSheet.create({
  container: {
    padding: spaces.padding.medium,
    paddingBottom: spaces.padding.micro,
    maxWidth: '65%',
    borderRadius: radius.mediumSoft,
    marginBottom: spaces.margin.big,
    opacity: 0.75,
  },
});

////Here the styles of the LocationMessage are created.
const styles = StyleSheet.create({
  sendContainer: {
    ...basicStyles.container,
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    marginRight: spaces.margin.big,
    paddingRight: spaces.padding.tiny,
  },
  receiveContainer: {
    ...basicStyles.container,
    backgroundColor: colors.primaryGreen,
    alignSelf: 'flex-start',
    marginLeft: spaces.margin.big,
    paddingRight: spaces.padding.small,
    borderBottomLeftRadius: 0,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: radius.hugeSoft,
    marginRight: spaces.padding.tiny,
  },
  timeWrapper: {
    alignSelf: 'flex-end',
    marginTop: spaces.margin.tiny,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: sizes.micro,
    color: colors.secondaryText,
  },
  icon: {
    marginLeft: spaces.margin.tiny,
  },
});

export default styles;
