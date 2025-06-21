import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : `https://placehold.co/600x400/ffffff.png`,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{title}</Text>
                {/* <Text style={styles.subtitle}>{release_date}</Text> */}
            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    card: {
        width: '30%',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 208, // h-52 = 52 * 4 = 208
        borderRadius: 8,
    },
    title: {
        fontSize: 14, // text-sm
        fontWeight: 'bold',
        marginTop: 8, // mt-2
        color: 'white', // optional, depending on your background
    },
    subtitle: {
        fontSize: 12, // text-xs
        color: '#a8b5db', // adjust to your theme
        marginTop: 2,
    },
});
