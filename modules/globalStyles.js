import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    backImg: {
        flex: 1,
        resizeMode: "cover",
    },
    borders: {
        borderWidth: 3,
        borderColor: getPrimaryGrey(),
        borderStyle: "solid",
        backgroundColor: "white",
    },
});

function getPrimaryBlue() {
    return "#0a618c";
}

function getPrimaryGrey() {
    return "#D3D3D3";
}

export { globalStyles, getPrimaryBlue, getPrimaryGrey };
