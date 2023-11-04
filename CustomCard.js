import { Text, StyleSheet, View } from "react-native";

export function CustomCard({ title, body }) {
    return (
        <View style={styles.appContainer}>
            <View style={styles.cardContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.bodyText}>{body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        margin: 25,
        flex: 1,
    },
    cardContainer: {
        padding: 20,
        borderRadius: 10,
        borderColor: "#D3D3D3",
        borderWidth: 3,
        borderStyle: "solid",
        backgroundColor: "white",
    },
    titleText: {
        fontSize: 20,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#D3D3D3",
        borderStyle: "dashed",
    },
    bodyText: {
        paddingTop: 5,
        fontSize: 15,
    },
});
