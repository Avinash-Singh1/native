import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const Details = () => {
    const {id} = useLocalSearchParams()
    return (
        <View >
            <Text>Movie Details: {id}</Text>
        </View>
    );
};

export default Details;
