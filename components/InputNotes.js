import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";

import { SmallButton } from "./SmallButton";
import { addEntry } from "../modules/database";

export function InputNotes({ navFunc }) {
    const [text, setText] = useState("");

    async function funcBundler() {
        let deviceTime = new Date();
        await addEntry(text, deviceTime.toISOString());
        navFunc();
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder={"Type your meditation notes here!"}
                    onChangeText={(textInput) => setText(textInput)}
                ></TextInput>
            </View>
            <SmallButton
                buttonText={"Submit"}
                buttonFuncs={funcBundler}
                disabledStatus={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "darkseagreen",
    },
    inputBox: {
        width: 200,
        height: 150,
        padding: 15,
        textAlign: "left",
    },
});
