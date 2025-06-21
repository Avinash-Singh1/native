import { Image, TextInput, View, StyleSheet } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface Props {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={icons.search}
                style={styles.icon}
                resizeMode="contain"
            />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor="#a8b5db"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E', // assuming "bg-dark-200"
        borderRadius: 9999, // full rounded (rounded-full)
        paddingHorizontal: 20, // px-5
        paddingVertical: 12, // py-3
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#AB8BFF',
    },
    input: {
        flex: 1,
        marginLeft: 8, // ml-2
        color: 'white',
    },
});

export default SearchBar;
