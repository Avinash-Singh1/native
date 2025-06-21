import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { icons } from '@/constants/icons'; // Make sure you import icons if needed

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>

                <View style={styles.row}>
                    <Image source={icons.star} style={styles.starIcon} />
                    <Text style={styles.rating}>
                        {Math.round(vote_average / 2)}
                    </Text>
                </View>

                <View style={styles.spaceBetween}>
                    <Text style={styles.subtitle}>
                        {release_date?.split("-")[0]}
                    </Text>
                    <Text style={styles.subtitle}>Movie</Text>
                </View>
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
        height: 208, // h-52
        borderRadius: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    starIcon: {
        width: 16,
        height: 16,
    },
    rating: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    subtitle: {
        fontSize: 12,
        color: '#a8b5db',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});
