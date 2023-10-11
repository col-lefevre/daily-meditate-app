import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { meditationPrompts } from "./InternalData";
import { Prompt } from "./Prompt";
import { CustomButton } from "./CustomButton";

export default function App() {
	let [progress, setProgress] = useState(0);

	const advanceProgress = () => {
		// Advances progress on the app
		// 0 - Home screen
		// 1 - Meditation prompt
		if (progress < 1) {
			setProgress(progress + 1);
		} else {
			setProgress(0);
		}
	};

	function getButtonText(progress) {
		if (progress == 0) {
			return "Meditate";
		} else if (progress == 1) {
			return "Begin";
		}
	}

	function getPrompt() {
		if (progress == 0) {
			return null;
		} else if ((progress = 1)) {
			return meditationPrompts[
				Math.floor(Math.random() * meditationPrompts.length)
			];
		}
	}

	return (
		<View style={styles.container}>
			<Prompt promptText={getPrompt()} />
			<CustomButton
				buttonText={getButtonText(progress)}
				advanceProgress={advanceProgress}
			></CustomButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
});
