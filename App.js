import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

//

export default function App() {
	let myVar = 10;

	return (
		<View style={styles.container}>
			<Text>My amazing app! {myVar}</Text>
			<Text style={{ color: "blue" }}>Some more text</Text>
			<GiveData />
			<Button title="Click Me!" />

			<StatusBar style="auto" />
		</View>
	);
}

function GiveData() {
	return <Text>Here's some data</Text>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
