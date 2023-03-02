import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  value: string;
  type: string;
}

const Transaction = ({ value, type }: Props): ReactElement => (
  <View
    testID={'com.pocreactnativetestid:id/transaction-wrapper'}
    style={styles.articleContainer}>
    <Text
      testID={'com.pocreactnativetestid:id/transaction-title'}
      style={styles.articleTitle}>
      {`R$ ${value},00`}
    </Text>
    <Text
      testID={'com.pocreactnativetestid:id/transaction-category'}
      style={styles.articleCategory}>
      {type}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  articleContainer: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E4E4E4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    margin: 2,
    flex: 1,
  },
  articleTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    padding: 10,
  },
  articleCategory: {
    fontSize: 14,
    fontWeight: '600',
    color: '#777',
    padding: 4,
    backgroundColor: '#E4E4E4',
    margin: 12,
    borderRadius: 4,
  },
});

export default Transaction;
