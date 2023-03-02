import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { footerDisclaimer } from '../../config/Strings';

const Footer = (): ReactElement => (
  <View testID={'Footer:Wrapper'} style={styles.footerContainer}>
    <Text testID={'Footer:Disclaimer'} style={styles.footerTitle}>
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
