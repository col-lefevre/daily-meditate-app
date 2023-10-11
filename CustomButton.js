import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton({ buttonText, advanceProgress }) {
	return (
		<TouchableOpacity style={styles.customButton} onPress={advanceProgress}>
			<Text style={styles.customButtonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	customButton: {
		backgroundColor: "purple",
		padding: 10,
		marginTop: 5,
		borderRadius: 5,
		justifyContent: "center",
	},
	customButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 15,
	},
});
