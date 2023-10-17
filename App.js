import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { meditationPrompts } from "./InternalData";
import { Prompt } from "./Prompt";
import { CustomButton } from "./CustomButton";
import { Timer } from "./Timer";

export default function App() {
	let [progress, setProgress] = useState(0);
	let [timer, setTimer] = useState(0);

	const advanceProgress = () => {
		// Advances progress on the app
		// 0 - Home screen
		// 1 - Meditation prompt
		// 2 - Timer
		if (progress < 2) {
			setProgress(progress + 1);
		} else {
			setProgress(0);
		}
	};

	// Button text based on progress
	function getButtonText(progress) {
		textList = ["Meditate", "Begin", "Finish"];
		return textList[progress];
	}

	// Get random prompt
	function getPrompt() {
		if (progress == 1) {
			return meditationPrompts[
				Math.floor(Math.random() * meditationPrompts.length)
			];
		} else {
			return null;
		}
	}

	// Start timer
	function startTimer() {
		setTimer(30); // Manual value
	}

	// Format timer into minutes:seconds
	function getFormattedTime() {
		return `${Math.floor(timer / 60)}:${timer % 60}`;
	}

	// Update timer when it is "started", i.e., above 0
	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer(timer - 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [timer]);

	// Manage button functions (so it can trigger multiple on one press)
	function buttonFuncs() {
		if (progress == 1) {
			advanceProgress();
			startTimer();
		} else {
			advanceProgress();
		}
	}

	return (
		<View style={styles.container}>
			{progress == 1 ? <Prompt promptText={getPrompt()} /> : null}
			{progress == 2 ? <Timer timerText={getFormattedTime()} /> : null}
			<CustomButton
				buttonText={getButtonText(progress)}
				buttonFuncs={buttonFuncs}
				disabledStatus={timer > 0 ? true : false}
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
