/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text, Box } from '@/atoms';
import Icons from '@/assets/constants/Icons';

const CommonSearchHeader = () => {
  return (
    <Box paddingHorizontal="s16" backgroundColor="white">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TouchableOpacity style={{ flex: 1, height: 32 }}>
          <Box
            flex={1}
            backgroundColor="white"
            borderWidth={0.5}
            borderColor="black"
            justifyContent="center"
            paddingHorizontal="s8"
          >
            <Box flexDirection="row" alignItems="center">
              {/* <SearchIconBlack /> */}
              <Image source={Icons.searchIcon} style={styles.searchIcon} />
              <Box>
                <Text>Search products here</Text>
              </Box>
            </Box>
          </Box>
        </TouchableOpacity>
        <Box flexDirection="row">
          <TouchableOpacity>
            <Box marginHorizontal="s16">
              <Image source={Icons.wishlistIcon} style={styles.wishlistIcon} />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box>
              <Image source={Icons.cartIcon} style={styles.wishlistIcon} />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonSearchHeader;

const styles = StyleSheet.create({
  wishlistIcon: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
  },
  searchIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 4,
  },
});