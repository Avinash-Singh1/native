import { Image, TextInput, View } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface Props {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-3">
            <Image
                source={icons.search}
                style={{ width: 20, height: 20, tintColor: '#AB8BFF' }}
                resizeMode="contain"
            />
            <TextInput
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
                className="flex-1 ml-2 text-white"
                placeholderTextColor="#a8b5db"
            />
        </View>
    );
};

export default SearchBar;
