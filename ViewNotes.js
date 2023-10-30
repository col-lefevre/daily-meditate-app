import { StyleSheet, View, Text, FlatList } from "react-native";
import { getEntries } from "./database";
import { useState, useEffect } from "react";

export function ViewNotes() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getEntries();
				setUserData(data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	function formatTime(timestamp) {
		let date = new Date(timestamp);
		let formattedTime = new Intl.DateTimeFormat("en-US", {
			dateStyle: "full",
			timeStyle: "long",
		}).format(date);
		return formattedTime;
	}

	function formatTime(timestamp) {
		let date = new Date(timestamp);
		let formattedTime = new Intl.DateTimeFormat("en-US", {
			weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			timeZoneName: "short",
		}).format(date);
		return formattedTime;
	}

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={userData}
				renderItem={({ item }) => (
					<View style={styles.listEntry}>
						<Text style={styles.notesText}>{item.notes}</Text>
						<Text style={styles.timeText}>{formatTime(item.timestamp)}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	notesText: {
		fontSize: 25,
		flex: 2,
		color: "black",
	},
	timeText: {
		fontSize: 15,
		flex: 1,
		color: "blue",
	},
	flatList: {
		backgroundColor: "pink",
		padding: 20,
		margin: 20,
	},
	listEntry: {
		marginBottom: 10,
	},
});
