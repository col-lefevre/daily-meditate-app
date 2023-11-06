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
        borderColor: "#D3D3D3",
        borderStyle: "solid",
        backgroundColor: "white",
    },
});

export default globalStyles;
