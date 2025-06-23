import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { images } from '@/constants/images';
import MovieCard from '@/components/MoviesCard';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
import MoviesCard from "@/components/MoviesCard";

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
                renderItem={({ item }) => (
                    <MoviesCard
                        {...item}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
                scrollEnabled={false}
                contentContainerStyle={styles.movieList}

                ListHeaderComponent={
                    <>
                        <Image source={icons.logo} style={styles.logo} />

                        <View style={styles.searchContainer}>
                            <SearchBar placeholder="Search for movies, TV shows, people, and more" />
                        </View>

                        {moviesLoading && (
                            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
                        )}

                        {moviesError && (
                            <Text style={styles.errorText}>Error: {moviesError?.message}</Text>
                        )}

                        {!moviesLoading && !moviesError && movies?.length > 0 && (
                            <Text style={styles.resultsText}>
                                Search results for{' '}
                                <Text style={styles.accentText}>SEARCH TERM</Text>
                            </Text>
                        )}
                    </>
                }
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0D23',
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        zIndex: -1,
    },
    logo: {
        width: 48,
        height: 40,
        marginTop: 80,
        marginBottom: 20,
        alignSelf: 'center',
    },
    searchContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    loader: {
        marginTop: 20,
        alignSelf: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    resultsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    accentText: {
        color: '#facc15',
    },
    columnWrapper: {
        justifyContent: 'flex-start',
        gap: 20,
        paddingRight: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    listContent: {
        paddingBottom: 128,
        paddingTop: 10,
    },
    columnWrapper: {
        justifyContent: "flex-start",
        gap: 20,
        paddingRight: 5,
        marginBottom: 10,
    },
    movieList: {
        marginTop: 8,
        paddingBottom: 128,
    },
});
