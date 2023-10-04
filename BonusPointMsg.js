import { StyleSheet, Text } from "react-native";

export function BonusPointMsg({ totalBonusPoints }) {
	if (totalBonusPoints >= 10) {
		return <Text style={styles.msg}>Sooo many bonus points, wow!</Text>;
	} else if (totalBonusPoints >= 5) {
		return <Text style={styles.msg}>Lots of bonus points!</Text>;
	} else {
		return null;
	}
}

const styles = StyleSheet.create({
	msg: {
		fontSize: 30,
		marginTop: 10,
	},
});
