import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import Header from './src/components/Header/Header.native';
import Transactions from './src/components/Transactions/Transactions.native';
import Footer from './src/components/Footer/Footer.native';

const transactions = [
  {
    index: 1,
    value: '1.500',
    type: '↑ Entrada',
  },
  {
    index: 2,
    value: '500',
    type: '↓ Saída',
  },
  {
    index: 3,
    value: '1.200',
    type: '↑ Entrada',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        testID={'App:MainScreen'}
        contentContainerStyle={styles.container}
        contentInsetAdjustmentBehavior={'automatic'}>
        <Header />
        <Transactions transactions={transactions} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    padding: 16,
  },
});

export default App;
