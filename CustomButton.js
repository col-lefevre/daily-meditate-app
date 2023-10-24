import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton({ buttonText, buttonFuncs, disabledStatus }) {
	let buttonColor = disabledStatus
		? styles.disabledButton
		: styles.enabledButton;

	let customButton = StyleSheet.compose(styles.buttonDimensions, buttonColor);

	return (
		<TouchableOpacity
			style={customButton}
			onPress={buttonFuncs}
			disabled={disabledStatus}
		>
			<Text style={styles.customButtonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonDimensions: {
		padding: 10,
		marginTop: 5,
		borderRadius: 5,
		justifyContent: "center",
	},
	enabledButton: {
		backgroundColor: "purple",
	},
	disabledButton: {
		backgroundColor: "grey",
	},
	customButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 15,
	},
});
