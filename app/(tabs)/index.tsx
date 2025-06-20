import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";




export default function Index() {
    const router = useRouter();
    return (
        <View className="flex-1" style={{ backgroundColor: "#0f0D23" }}>
            <Image
                source={images.bg}
                style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}
                resizeMode="cover"
            />
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minWidth: "100%", paddingBottom: 10 }}
            >
                <Image source={icons.logo} style={{ width: 48, height: 40, marginTop: 80, marginBottom: 20, alignSelf: "center" }} />
                <View className="flex-1 mt-5">
                    <SearchBar  onPress={() => (
                        router.push("/search")
                    )}
                                placeholder="Search for movies, TV shows, people, and more"

                    />
                </View>
            </ScrollView>
        </View>
    );
}
