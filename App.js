import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState } from "react";
import { GradebookEntry } from "./GradebookEntry";
import { BonusPointMsg } from "./BonusPointMsg";

export default function App() {
	const studentData = [
		{ id: 1, name: "Derek", absences: "2", grade: 90 },
		{ id: 2, name: "Dave", absences: "1", grade: 85 },
		{ id: 3, name: "John", absences: "3", grade: 97 },
		{ id: 4, name: "Adam", absences: "5", grade: 63 },
		{ id: 5, name: "Bob", absences: "0", grade: 100 },
		{ id: 6, name: "Caleb", absences: "2", grade: 95 },
		{ id: 7, name: "Jose", absences: "1", grade: 96 },
	];

	let [totalBonusPoints, setTotalBonusPoints] = useState(0);

	const plusTotalBonusPoints = () => {
		setTotalBonusPoints(totalBonusPoints + 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Z101 Gradebook</Text>
			</View>
			<BonusPointMsg totalBonusPoints={totalBonusPoints} />
			<FlatList
				data={studentData}
				renderItem={({ item }) => (
					<GradebookEntry
						name={item.name}
						absences={item.absences}
						grade={item.grade}
						plusTotalBonusPoints={plusTotalBonusPoints}
					/>
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
	header: {
		height: "20%",
		backgroundColor: "grey",
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		fontSize: 24,
		color: "black",
	},
});
