import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GradebookEntry } from "./GradebookEntry";

export default function App() {
	const studentData = [
		{ id: 1, name: "Derek", absences: "2", grade: "90%" },
		{ id: 2, name: "Dave", absences: "1", grade: "85%" },
		{ id: 3, name: "John", absences: "3", grade: "97%" },
		{ id: 4, name: "Adam", absences: "5", grade: "63%" },
		{ id: 5, name: "Bob", absences: "0", grade: "100%" },
		{ id: 6, name: "Caleb", absences: "2", grade: "95%" },
		{ id: 7, name: "Jose", absences: "1", grade: "96%" },
	];

	return (
		<View style={styles.container}>
			<FlatList
				data={studentData}
				renderItem={({ item }) => (
					<GradebookEntry
						name={item.name}
						absences={item.absences}
						grade={item.grade}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>

		/* <ScrollView>
			<View style={styles.container}>
				<GradebookEntry name="Derek" absences="2" grade="90%" />
				<GradebookEntry name="Sitha" absences="1" grade="95%" />
				<GradebookEntry name="Sitha" absences="1" grade="95%" />
				<GradebookEntry name="Sitha" absences="1" grade="95%" />
				<GradebookEntry name="Sitha" absences="1" grade="95%" />
			</View>
		</ScrollView> */
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
