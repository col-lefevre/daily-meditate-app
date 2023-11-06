import { View } from "react-native";
import { SafeAreaView } from "react-native";

import { LargeButton } from "../components/LargeButton";
import { SmallButton } from "../components/SmallButton";

import { globalStyles } from "../modules/globalStyles";

export default function HomeScreen({ navigation }) {
    // Nav wrapper
    const navToPrompt = () => {
        navigation.navigate("Prompt");
    };

    const navToNotes = () => {
        navigation.navigate("ViewNotes");
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <View
                style={{
                    flex: 9,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <LargeButton
                    title={"Meditate"}
                    subtitle={"Thursday"}
                    funcs={navToPrompt}
                />
            </View>
            <View style={{ flex: 1 }}>
                <SmallButton
                    buttonText={"Your Notes"}
                    buttonFuncs={navToNotes}
                />
            </View>
        </SafeAreaView>
    );
}
