import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { sectionTitle } from '../../config/Strings';
import { getTestID } from '../../helpers/getTestIDHelper';

import Transaction from '../Transaction/Transaction.native';

interface Transaction {
  index: number;
  amount: string;
  type: string;
}

interface Props {
  transactions: Transaction[];
}

const Transactions = ({ transactions }: Props): ReactElement => (
  <View
    testID={getTestID('test_id__transaction-section-card')}
    style={styles.sectionContainer}>
    <Text
      testID={getTestID('test_id__transaction-section-title')}
      style={styles.sectionTitle}>
      {sectionTitle}
    </Text>
    <ScrollView testID={getTestID('test_id__transaction-section-list')}>
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          amount={transaction.amount}
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
