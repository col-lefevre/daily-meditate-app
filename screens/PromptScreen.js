import { SafeAreaView } from "react-native-safe-area-context";

import { CustomCard } from "../components/CustomCard";
import { SmallButton } from "../components/LargeButton";

import { meditationPrompts } from "../modules/internalData";

export default function PromptScreen({ navigation }) {
    // Nav wrapper
    const navToTimer = () => {
        navigation.navigate("Timer");
    };

    let randomPrompt =
        meditationPrompts[Math.floor(Math.random() * meditationPrompts.length)];

    return (
        <SafeAreaView style={styles.container}>
            <CustomCard
                title={"Your Daily Meditation Prompt"}
                body={randomPrompt}
            />
            <SmallButton
                buttonText={"Begin"}
                buttonFuncs={navToTimer}
                disabledStatus={false}
            />
        </SafeAreaView>
    );
}
