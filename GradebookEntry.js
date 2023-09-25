import { View, Text } from "react-native";
import { StudentGradeInfo } from "./StudentGradeInfo";
import { StudentCard } from "./StudentCard";

export function GradebookEntry({ name, grade, absences }) {
	return (
		<View style={{ marginBottom: 30 }}>
			<StudentCard />
			<Text style={{ fontSize: 20 }}>{name}</Text>
			<StudentGradeInfo grade={grade} absences={absences} />
		</View>
	);
}
