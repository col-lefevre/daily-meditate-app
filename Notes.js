import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";

import { CustomButton } from "./CustomButton";

export function Notes({ navFunc }) {
	const [text, setText] = useState("");

    function writeToFirebase() {
        
    }
    
    function funcBundler() {
		writeToFirebase();
		navFunc();
	}

	return (
		<View>
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					placeholder={"Type your meditation notes here!"}
					onChangeText={(textInput) => setText(textInput)}
				></TextInput>
			</View>
			<CustomButton
				buttonText={"Finish"}
				buttonFuncs={funcBundler}
				disabledStatus={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "darkseagreen",
	},
	inputBox: {
		width: 200,
		height: 150,
		padding: 15,
		textAlign: "left",
	},
});
