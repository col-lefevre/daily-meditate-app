import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
		<View style={{ marginBottom: 30, flexDirection: "row" }}>
			<View
				style={{
					flexDirection: "column",
					flex: 1,
					backgroundColor: "teal",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 20 }}>{name}</Text>
				<StudentCard />
			</View>
			<View
				style={{
					flexDirection: "column",
					flex: 1,
					backgroundColor: "pink",
				}}
			>
				<Text
					style={{
						flex: 1,
						fontSize: 50,
						textAlign: "center",
					}}
				>
					{grade + bonusPoints}%
				</Text>
				<View
					style={{ flex: 1, flexDirection: "row", backgroundColor: "coral" }}
				>
					<Text
						style={{
							flex: 1,
							fontSize: 50,
							textAlign: "center",
						}}
					>
						{absences}
					</Text>
					<TouchableOpacity
						style={styles.customButton}
						onPress={awardBonusPoint}
					>
						<Text style={styles.customButtonText}>Bonus!</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	customButton: {
		backgroundColor: "purple",
		padding: 10,
		marginTop: 5,
		borderRadius: 5,
		justifyContent: "center",
		flex: 1,
	},
	customButtonText: {
		color: "white",
		textAlign: "center",
	},
});
