import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { ViewNotes } from "../components/ViewNotes";
import { SmallButton } from "../components/SmallButton";

import globalStyles from "../modules/globalStyles";

export default function ViewNotesScreen({ navigation }) {
    const navToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView
            style={[
                globalStyles.container,
                { flex: 1, backgroundColor: "white" },
            ]}
        >
            <ViewNotes />
            <SmallButton
                buttonText={"Finish"}
                buttonFuncs={navToHome}
                disabledStatus={false}
            />
        </SafeAreaView>
    );
}
