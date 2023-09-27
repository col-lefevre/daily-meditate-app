import { Image } from "react-native";

export function StudentCard() {
	return (
		<Image
			style={{ width: 100, height: 100, marginTop: 10 }}
			source={require("./assets/placeholder.png")}
		/>
	);
}
