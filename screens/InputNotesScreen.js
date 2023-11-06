import { SafeAreaView } from "react-native";

import { InputNotes } from "../components/InputNotes";

import globalStyles from "../modules/globalStyles";

export default function InputNotesScreen({ navigation }) {
    const navToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <InputNotes navFunc={navToHome} />
        </SafeAreaView>
    );
}
