import {
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator,
    StyleSheet,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MoviesCard from "@/components/MoviesCard";

export default function Index() {
    const router = useRouter();
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() => fetchMovies({ query: "" }), []);

    return (
        <View style={styles.container}>
            <Image
                source={images.bg}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Image source={icons.logo} style={styles.logo} />
                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={styles.loader}
                    />
                ) : moviesError ? (
                    <Text style={styles.errorText}>Error: {moviesError?.message}</Text>
                ) : (
                    <View style={styles.contentWrapper}>
                        <SearchBar
                            onPress={() => router.push("/search")}
                            placeholder="Search for movies, TV shows, people, and more"
                        />

                        <Text style={styles.sectionTitle}>Latest Movies</Text>

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
                        />
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0D23",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContent: {
        minWidth: "100%",
        paddingBottom: 10,
    },
    logo: {
        width: 48,
        height: 40,
        marginTop: 80,
        marginBottom: 20,
        alignSelf: "center",
    },
    loader: {
        marginTop: 40,
        alignSelf: "center",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
    contentWrapper: {
        flex: 1,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 12,
    },
    movieTitle: {
        color: "white",
        fontSize: 14,
        width: "30%",
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
