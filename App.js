import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GradebookEntry } from "./GradebookEntry";

export default function App() {
	return (
		<View style={styles.container}>
			<GradebookEntry name="Derek" absences="2" grade="90%" />
			<GradebookEntry name="Sitha" absences="1" grade="95%" />
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
