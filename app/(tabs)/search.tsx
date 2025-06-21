import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { images } from '@/constants/images';
import MovieCard from '@/components/MoviesCard';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';

const Search = () => {
    const router = useRouter();
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() => fetchMovies({ query: '' }), []);

    return (
        <View style={styles.container}>
            <Image source={images.bg} style={styles.backgroundImage} resizeMode="cover" />
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id?.toString()}

                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // adjust to your theme
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        zIndex: -1,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
});
