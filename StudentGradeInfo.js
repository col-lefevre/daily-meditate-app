import { View, Text } from "react-native";

export function StudentGradeInfo({ grade, absences }) {
	return (
		<View>
            <Text>Grade: {grade}%</Text>
            <Text>Absences: {absences}</Text>
		</View>
	);
}