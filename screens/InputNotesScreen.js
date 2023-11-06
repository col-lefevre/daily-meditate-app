import { SafeAreaView, StyleSheet, TextInput, Text, Modal } from "react-native";
import { useState } from "react";

import { SmallButton } from "../components/SmallButton";
import { CustomCardFrame } from "../components/CustomCard";

import { addEntry } from "../modules/database";
import { globalStyles } from "../modules/globalStyles";

export default function InputNotesScreen({ navigation }) {
    let [text, setText] = useState("");

    async function submitText() {
        let deviceTime = new Date();
        await addEntry(text, deviceTime.toISOString()); // idk if need ISO but it works
        navigation.navigate("Home");
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <CustomCardFrame title={"Your Meditation Notes"}>
                <TextInput
                    style={styles.inputBox}
                    placeholder={"Type your meditation notes here!"}
                    onChangeText={(textInput) => setText(textInput)}
                    multiline={true}
                    maxLength={150}
                ></TextInput>
                <Text>{`${text.length} / 150`}</Text>
            </CustomCardFrame>
            <SmallButton buttonText={"Submit"} buttonFuncs={submitText} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        height: 100,
        textAlign: "left",
        marginBottom: 10,
        textAlignVertical: "top",
    },
    inputContainer: {
        borderRadius: 10,
        marginBottom: 25,
        padding: 15,
    },
});
