import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center"
    >
      <Text className="text-5xl text-[red]" >Welcome.</Text>
      {/*<Text className="text-5xl text-[red]" >Avinash.</Text>*/}
      {/*<Link href="/onboarding">Go to onboarding</Link>*/}
      {/*<Link href="/movie/avenger">avenger</Link>*/}
    </View>
  );
}
