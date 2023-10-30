import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Alert,
} from "react-native";
import { getEntries, deleteEntry } from "./database";
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
	}, [deleteBundler]);

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

	async function deleteBundler(idNum) {
		await deleteEntry(idNum);
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
						<TouchableOpacity
							style={styles.deleteBlock}
							onPress={() => deleteBundler(item.id)}
						>
							<Text style={styles.deleteText}>Delete</Text>
						</TouchableOpacity>
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
	deleteText: {
		fontSize: 15,
		color: "red",
	},
	deleteBlock: {
		flex: 1,
		marginTop: 5,
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
