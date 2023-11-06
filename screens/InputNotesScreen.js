import { SafeAreaView } from "react-native";

import { InputNotes } from "../components/InputNotes";

export default function InputNotesScreen({ navigation }) {
    const navToViewNotes = () => {
        navigation.navigate("ViewNotes");
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputNotes navFunc={navToViewNotes} />
        </SafeAreaView>
    );
}
