import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Transaction from '../Transaction/Transaction.native';

import { sectionTitle } from '../../config/Strings';

interface Transaction {
  index: number;
  value: string;
  type: string;
}

interface Props {
  transactions: Transaction[];
}

const Transactions = ({ transactions }: Props): ReactElement => (
  <View
    accessible
    accessibilityLabel="Transactions:Wrapper"
    testID={'Transactions:Wrapper'}
    style={styles.sectionContainer}>
    <Text
      accessible
      accessibilityLabel="Transactions:Title"
      testID={'Transactions:Title'}
      style={styles.sectionTitle}>
      {sectionTitle}
    </Text>
    <ScrollView testID={'Transactions:List'}>
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          value={transaction.value}
          type={transaction.type}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E4E4E4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 16,
  },
});

export default Transactions;
