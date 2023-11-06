import { SafeAreaView } from "react-native-safe-area-context";

import { CustomCard } from "../components/CustomCard";
import { SmallButton } from "../components/SmallButton";

import meditationPrompts from "../modules/meditationPrompts";
import { globalStyles } from "../modules/globalStyles";

export default function PromptScreen({ navigation }) {
    // Nav wrapper
    const navToTimer = () => {
        navigation.navigate("Timer");
    };

    let randomPrompt =
        meditationPrompts[Math.floor(Math.random() * meditationPrompts.length)];

    return (
        <SafeAreaView style={globalStyles.container}>
            <CustomCard
                title={"Your Daily Meditation Prompt"}
                body={randomPrompt}
            />

            <SmallButton buttonText={"Begin"} buttonFuncs={navToTimer} />
        </SafeAreaView>
    );
}
