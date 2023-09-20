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
					<Student name={student.name} grade={student.grade}></Student>
				))}
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

function Student({ name, grade }) {
	return (
		<View>
			<Text style={styles.studentText}>
				Name: {name} | Grade: {grade}%
			</Text>
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

	studentText: {
		fontSize: 20,
		paddingTop: 10,
		color: "green",
	},
});
