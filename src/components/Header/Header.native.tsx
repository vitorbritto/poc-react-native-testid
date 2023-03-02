import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { headerTitle } from '../../config/Strings';

const Header = (): ReactElement => (
  <View testID={'header-wrapper'} style={styles.headerContainer}>
    <Text testID={'header-title'} style={styles.headerTitle}>
      {headerTitle}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
    borderRadius: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default Header;
