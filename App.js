import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { meditationPrompts } from "./InternalData";
import { Prompt } from "./Prompt";
import { CustomButton } from "./CustomButton";
import { Timer } from "./Timer";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Prompt"
				component={PromptScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Timer"
				component={TimerScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

function HomeScreen({ navigation }) {
	// Nav wrapper
	const navToPrompt = () => {
		navigation.navigate("Prompt");
	};

	return (
		<View style={styles.container}>
			<CustomButton
				buttonText={"Meditate"}
				buttonFuncs={navToPrompt}
				disabledStatus={false}
			/>
		</View>
	);
}

function PromptScreen({ navigation }) {
	// Nav wrapper
	const navToTimer = () => {
		navigation.navigate("Timer");
	};

	let randomPrompt =
		meditationPrompts[Math.floor(Math.random() * meditationPrompts.length)];

	return (
		<View style={styles.container}>
			<Prompt promptText={randomPrompt} />
			<CustomButton
				buttonText={"Begin"}
				buttonFuncs={navToTimer}
				disabledStatus={false}
			/>
		</View>
	);
}

function TimerScreen({ navigation }) {
	// Timer
	let [timer, setTimer] = useState(30);

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

	// function getFormattedTime() {
	// 	return `${Math.floor(timer / 60)}:${timer % 60}`;
	// }

	function getFormattedTime() {
		let mins = Math.floor(timer / 60);
		let secs = timer % 60;

		let formatMins = String(mins).padStart(2, "0");
		let formatSecs = String(secs).padStart(2, "0");

		return `${formatMins}:${formatSecs}`;
	}

	// Nav wrapper
	const navToHome = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<Timer timerText={getFormattedTime()} />
			<CustomButton
				buttonText={"Finish"}
				buttonFuncs={navToHome}
				disabledStatus={timer > 0}
			/>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
});
