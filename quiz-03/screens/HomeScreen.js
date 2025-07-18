import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { UserContext } from '../user'; 

const productsData = [
    { id: 1, name: 'Nasi Goreng Spesial', price: 15000, type: 'Makanan' },
    { id: 2, name: 'Mie Ayam Bakso', price: 13000, type: 'Makanan' },
    { id: 3, name: 'Soto Ayam', price: 12000, type: 'Makanan' },
    { id: 4, name: 'Gado-Gado', price: 10000, type: 'Makanan' },
    { id: 5, 'name': 'Ayam Geprek', price: 14000, type: 'Makanan' },
    { id: 6, name: 'Batagor', price: 8000, type: 'Makanan' },
    { id: 7, name: 'Es Teh Manis', price: 5000, type: 'Minuman' },
    { id: 8, name: 'Es Jeruk', price: 6000, type: 'Minuman' },
    { id: 9, name: 'Jus Alpukat', price: 10000, type: 'Minuman' },
    { id: 10, name: 'Kopi Hitam', price: 5000, type: 'Minuman' },
    { id: 11, name: 'Air Mineral', price: 3000, type: 'Minuman' },
];

const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

export default function HomeScreen({ navigation, route }) {
  const { userName } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (route.params?.checkoutSuccess) {
      setCart([]);
      navigation.setParams({ checkoutSuccess: undefined });
    }
  }, [route.params?.checkoutSuccess]);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    Alert.alert('Sukses', `${product.name} telah ditambahkan ke keranjang.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>
          Selamat Datang, {userName}!
        </Text>

        <Text style={styles.sectionTitle}>Menu Makanan</Text>
        {productsData.filter(p => p.type === 'Makanan').map(product => (
          <View key={product.id} style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{formatCurrency(product.price)}</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} onPress={() => handleAddToCart(product)}>
              <Text style={styles.buyButtonText}>Tambah</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Menu Minuman</Text>
        {productsData.filter(p => p.type === 'Minuman').map(product => (
           <View key={product.id} style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{formatCurrency(product.price)}</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} onPress={() => handleAddToCart(product)}>
              <Text style={styles.buyButtonText}>Tambah</Text>
            </TouchableOpacity>
          </View>
        ))}

        {cart.length > 0 && (
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('Checkout', { cart: cart })}
          >
            <Text style={styles.checkoutButtonText}>
              Lihat Keranjang ({cart.length} item)
            </Text>
          </TouchableOpacity>
        )}
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
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});