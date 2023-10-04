import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StudentGradeInfo } from "./StudentGradeInfo";
import { StudentCard } from "./StudentCard";

export function GradebookEntry({
	name,
	grade,
	absences,
	plusTotalBonusPoints,
}) {
	let [bonusPoints, setBonusPoints] = useState(0);

	const awardBonusPoint = () => {
		setBonusPoints(bonusPoints + 1);
		plusTotalBonusPoints();
	};

	return (
		<View style={{ marginBottom: 30 }}>
			<StudentCard />
			<Text style={{ fontSize: 20 }}>{name}</Text>
			<StudentGradeInfo grade={grade + bonusPoints} absences={absences} />
			<TouchableOpacity style={styles.customButton} onPress={awardBonusPoint}>
				<Text style={styles.customButtonText}>Award Bonus Point!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	customButton: {
		backgroundColor: "green",
		padding: 10,
		marginTop: 5,
		borderRadius: 5,
	},
	customButtonText: {
		color: "white",
		textAlign: "center",
	},
});
