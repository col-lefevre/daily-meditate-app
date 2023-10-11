import { StyleSheet, View, Text } from "react-native";

export function Prompt({ promptText }) {
	if (promptText == null) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{promptText}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "darkseagreen",
		padding: 10,
		margin: 20,
    },
    text: {
        fontSize: 15,
    }
});
