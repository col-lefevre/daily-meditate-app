import { StyleSheet, View, Text } from "react-native";

export function Timer({ timerText }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{timerText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "skyblue",
		padding: 30,
		margin: 10,
		borderRadius: 100,
	},
	text: {
		fontSize: 50,
	},
});
