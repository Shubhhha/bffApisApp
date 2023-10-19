import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/screens/auth/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProductsByCategory from '@/screens/product/components/ProductsByCategory';
import ProductDetailsScreen from '@/screens/product/ProductDetailsScreen';
import SignUpScreen from '@/screens/auth/SignUpScreen';
import PersonalDetailsScreen from '@/screens/profile/PersonalDetailsScreen';
import CartScreen from '@/screens/cart/CartScreen';
import CollectionsScreen from '@/screens/collection/CollectionsScreen';
import CheckoutScreen from '@/screens/checkout/CheckoutScreen';
import OrderScreen from '@/screens/orders/OrdersScreen';
import OrderDetailsScreen from '@/screens/orders/OrderDetailsScreen';
import ViewAddress from '@/screens/address/components/ViewAddress';
import AddAddress from '@/screens/address/components/AddAddress';
import AddressScreen from '@/screens/address/AddressScreen';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="CollectionsScreen" component={CollectionsScreen} />
      <Stack.Screen
        name="PersonalDetailsScreen"
        component={PersonalDetailsScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="OrdersScreen" component={OrderScreen} />
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
      <Stack.Screen name="ViewAddress" component={ViewAddress} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
