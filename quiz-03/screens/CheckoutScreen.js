import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

export default function CheckoutScreen({ route, navigation }) {
  const { cart } = route.params;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    Alert.alert(
      'Konfirmasi Pembayaran',
      `Total belanja Anda adalah ${formatCurrency(totalPrice)}. Lanjutkan pembayaran dengan metode KAS (Cash)?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Bayar',
          onPress: () => {
            Alert.alert(
              'Pembayaran Berhasil',
              'Pesanan Anda sedang dibuat. Terima kasih!',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Home', { checkoutSuccess: true }),
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Detail Pesanan</Text>
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{formatCurrency(item.price)}</Text>
          </View>
        ))}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Pembelian</Text>
          <Text style={styles.totalPrice}>{formatCurrency(totalPrice)}</Text>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handleCheckout}>
          <Text style={styles.payButtonText}>Bayar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  payButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});