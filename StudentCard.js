import { Image } from "react-native";

export function StudentCard(source) {
	return (
		<Image
			style={{ width: 100, height: 100 }}
			source={require("./assets/placeholder.png")}
		/>
	);
}
