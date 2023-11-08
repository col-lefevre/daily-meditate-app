import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CustomCardFrame } from "../components/CustomCard";
import { SmallButton } from "../components/SmallButton";
import { PromptContext } from "../components/PromptContext";

import { meditationPrompts, timers } from "../modules/meditationPrompts";
import { globalStyles, getPrimaryBlue } from "../modules/globalStyles";
import { formatTimer } from "../modules/datesTimes";

export default function PromptScreen({ navigation }) {
    const { prompt, setPrompt } = useContext(PromptContext);
    const { timer, setTimer } = useContext(PromptContext);

    // Nav wrapper
    const navToTimer = () => {
        navigation.navigate("Timer");
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <CustomCardFrame title={"Your Daily Meditation"}>
                <Text style={styles.promptText}>{prompt}</Text>
                <SelectBlocks
                    data={meditationPrompts}
                    text={"Choose Prompt"}
                    state={prompt}
                    setState={setPrompt}
                />
                <Text style={styles.timerText}>{formatTimer(timer)}</Text>
                <SelectBlocks
                    data={timers}
                    text={"Choose Timer"}
                    state={timer}
                    setState={setTimer}
                />
            </CustomCardFrame>
            <SmallButton buttonText={"Begin"} buttonFuncs={navToTimer} />
        </SafeAreaView>
    );
}

function SelectBlocks({ data, text, state, setState }) {
    function changeInfo(forward, data, state, setState) {
        let newIndex = data.indexOf(state);
        if (forward) {
            newIndex++;
        } else {
            newIndex--;
        }
        if (newIndex == data.length) {
            newIndex = 0;
        } else if (newIndex == -1) {
            newIndex = data.length - 1;
        }
        setState(data[newIndex]);
    }

    return (
        <View style={styles.promptNav}>
            <TouchableOpacity
                onPress={() => changeInfo(false, data, state, setState)}
            >
                <Ionicons
                    name={"chevron-back"}
                    size={30}
                    color={getPrimaryBlue()}
                    style={styles.promptNavIcon}
                />
            </TouchableOpacity>
            <Text style={styles.promptNavText}>{text}</Text>
            <TouchableOpacity
                onPress={() => changeInfo(true, data, state, setState)}
            >
                <Ionicons
                    name={"chevron-forward"}
                    size={30}
                    color={getPrimaryBlue()}
                    style={styles.promptNavIcon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    promptNav: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginVertical: 10,
    },
    promptNavText: {
        textAlign: "center",
    },
    promptNavIcon: {},
    promptText: {},
    timerText: {
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 1,
    },
});
