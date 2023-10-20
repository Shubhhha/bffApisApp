import { Box, Text, theme } from '@/atoms';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import Icons from '@/assets/constants/Icons';

import { IS_IOS } from '@/utils/appUtils';
import GoBackButton from '@/components/GoBackButton/GoBackButton';
import { commonApi } from '@/api/CommanAPI';
import ProductItem from '@/components/ProductItem/ProductItem';

const SearchScreen = ({ onPress }) => {
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyItemFlag, setEmptyItemFlag] = useState(false);
  const handleSearch = async () => {
    setIsLoading(true);
    const resp = await commonApi.get(`/sfcc/products-by-query/${value}`);
    if (resp?.data?.status === 200) {
      if (resp?.data?.data?.ProductData?.length === 0) {
        setEmptyItemFlag(true);
      }
      setProducts(resp?.data?.data?.ProductData);
    }
    setIsLoading(false);
  };
  const ListEmptyComponent = () => {
    return (
      <Box flex={1} justifyContent="center">
        <Text textAlign="center">No Products Found</Text>
      </Box>
    );
  };
  const renderItem = ({ item, index }) => (
    <>
      {/* <ProductItem item={item} index={index} /> */}
      <ProductItem item={item} />
    </>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Box
        flexDirection="row"
        paddingHorizontal="s16"
        alignItems="center"
        paddingTop="s8"
      >
        <GoBackButton onPress={onPress} />
        <Box
          borderWidth={IS_IOS ? 0.5 : 1}
          borderColor="black"
          flexDirection="row"
          flex={1}
          height={32}
        >
          <TextInput
            onChangeText={text => setValue(text)}
            value={value}
            autoFocus={true}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            // style={styles.textInput}
            style={{ width: '100%', fontSize: 12 }}
          />
        </Box>
      </Box>

      <Box mt="s8" flex={1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={products}
            renderItem={renderItem}
            ListEmptyComponent={
              emptyItemFlag === true ? <ListEmptyComponent /> : <></>
            }
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
        )}
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productList: {
    paddingHorizontal: 16,
  },
  textInput: {
    width: '100%',
    height: 8,
  },
});

export default SearchScreen;
