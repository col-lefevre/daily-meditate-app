import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState } from "react";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
});
