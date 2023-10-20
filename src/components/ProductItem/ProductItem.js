/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '@atoms';
import Icons from '@/assets/constants/Icons';
import config from '@/config';

const ProductItem = React.memo(({ item }) => {
  const navigation = useNavigation();
  return (
    <Box marginHorizontal="s4" flexShrink={1} mb="s12" flex={1}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetailsScreen', {
            item: item,
          });
        }}
      >
        <Box alignItems="center">
          <Image
            source={{
              uri:
                item?.SkuImageUrl ||
                item?.product_image ||
                item?.images?.image1 ||
                item?.skus?.[0]?.images ||
                item?.productImage,
            }}
            style={[
              styles.productImage,
              { resizeMode: config.app.isSfcc ? 'cover' : 'contain' },
            ]}
          />
        </Box>
        <Box maxWidth="95%">
          <Text
            style={styles.productTitle}
            variant="semiBold18"
            color="darkText"
            numberOfLines={2}
          >
            {item?.ProductName ||
              item?.product_name ||
              item?.name ||
              item?.productName}
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingVertical="s2"
        >
          <Box>
            <Text variant="semiBold14" color="darkText">
              $
              {item?.basePrice ||
                item?.product_price?.listPrice ||
                item?.productPrice?.DEFAULT ||
                item?.product_price?.sellingPrice}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
      <Box position="absolute" alignSelf="flex-end">
        <TouchableOpacity style={{ padding: 6 }}>
          <Image
            source={Icons.wishlistIcon}
            style={{
              width: 24,
              height: 24,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
      </Box>
    </Box>
  );
});

export default ProductItem;

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 250,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  productTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    borderRadius: 14,
  },
});