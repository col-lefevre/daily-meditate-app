import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function LargeButton({
    title,
    subtitle,
    funcs,
    disabledStatus = false,
}) {
    return (
        <TouchableOpacity
            style={styles.bigCircle}
            onPress={funcs}
            disabled={disabledStatus}
        >
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bigCircle: {
        padding: 50,
        borderRadius: 100,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#D3D3D3",
        backgroundColor: "white",
    },
    titleText: {
        fontSize: 35,
        letterSpacing: 2,
        paddingBottom: 5,
        textAlign: "center",
    },
    subtitleText: {
        fontSize: 17.5,
        textAlign: "center",
    },
});
