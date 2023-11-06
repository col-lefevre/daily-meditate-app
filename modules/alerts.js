import { Alert } from "react-native";

export function binaryChoiceAlert(choiceText, noFunc, yesFunc) {
    Alert.alert(
        "Confirmation",
        `Are you sure you want to ${choiceText}?`,
        [
            {
                text: "No",
                onPress: noFunc,
                style: "cancel",
            },
            {
                text: "Yes",
                onPress: yesFunc,
            },
        ],
        { cancelable: false }
    );
}
