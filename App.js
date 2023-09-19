import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { gradebook } from "./data.js";

export default function App() {
	let numbers = [];
	for (i = 1; i < 11; i++) {
		numbers.push(i);
	}

	return (
		<View style={styles.container}>
			{numbers.map((num) => (
				// Experimented with component capitalization
				// <text>{num}</text>
				<View>
					<Text>{num}</Text>
				</View>
			))}
			{/* Experimented with self-closing tags and attribute names
				<Button title="Experiment!" >
				<Button Title="Experiment!" />*/}

			<Button title="Experiment!" />

			<View style={{ paddingTop: 20 }}>
				{gradebook.map((student) => (
					<View>
						<Text style={{ paddingTop: 10, color: "blue" }}>
							Name: {student.name} | Grade: {student.grade}%
						</Text>
					</View>
				))}
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
