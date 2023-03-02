import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { footerDisclaimer } from '../../config/Strings';
import { getTestID } from '../../helpers/getTestIDHelper';

const Footer = (): ReactElement => (
  <View
    accessible
    accessibilityLabel="App Footer"
    testID={getTestID('test_id__footer')}
    style={styles.footerContainer}>
    <Text
      accessible
      accessibilityLabel={footerDisclaimer}
      testID={getTestID('test_id__footer-disclaimer')}
      style={styles.footerTitle}>
      {footerDisclaimer}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Footer;
