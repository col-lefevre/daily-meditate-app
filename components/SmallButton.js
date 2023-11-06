import { Text, TouchableOpacity, StyleSheet } from "react-native";

import globalStyles from "../modules/globalStyles";

export function SmallButton({
    buttonText,
    buttonFuncs,
    disabledStatus = false,
}) {
    let buttonColor = disabledStatus
        ? styles.disabledButton
        : styles.enabledButton;

    let customButton = StyleSheet.compose(styles.customButtonText, buttonColor);

    return (
        <TouchableOpacity
            style={[styles.buttonDimensions, globalStyles.borders]}
            onPress={buttonFuncs}
            disabled={disabledStatus}
        >
            <Text style={customButton}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonDimensions: {
        padding: 15,
        borderRadius: 10,
    },
    enabledButton: {
        color: "black",
    },
    disabledButton: {
        color: "#D3D3D3",
    },
    customButtonText: {
        textAlign: "center",
        fontSize: 17.5,
        letterSpacing: 0.75,
    },
});
