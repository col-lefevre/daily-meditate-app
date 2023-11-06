import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CustomCardFrame } from "../components/CustomCard";

import { globalStyles } from "../modules/globalStyles";
import { getEntries, deleteEntry } from "../modules/database";
import { formatDate } from "../modules/datesTimes";

export default function ViewNotesScreen({ navigation }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getEntries();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [deleteBundler]);

    async function deleteBundler(idNum) {
        await deleteEntry(idNum);
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <CustomCardFrame title={"Your Notes"}>
                <FlatList
                    style={styles.flatList}
                    data={userData}
                    renderItem={({ item }) => (
                        <View style={styles.listEntry}>
                            <View style={styles.entryTitleContainer}>
                                <Text style={styles.timeText}>
                                    {formatDate(item.timestamp)}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => deleteBundler(item.id)}
                                >
                                    <Ionicons
                                        name={"trash"}
                                        size={20}
                                        color="#0a618c"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.notesText}>{item.notes}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </CustomCardFrame>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    notesContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    notesText: {
        fontSize: 15,
        color: "black",
    },
    timeText: {
        fontSize: 17.5,
        color: "#0a618c",
        letterSpacing: 1,
        fontWeight: "normal",
    },
    deleteText: {
        fontSize: 15,
        color: "red",
    },
    flatList: {},
    listEntry: {
        marginBottom: 15,
    },
    entryTitleContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
