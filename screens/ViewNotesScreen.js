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
import { formatDate, formatTimer } from "../modules/datesTimes";

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
        <SafeAreaView style={styles.container1}>
            <View style={styles.container2}>
                <FlatList
                    style={styles.flatList}
                    data={userData}
                    renderItem={({ item }) => (
                        <FlatListEntry
                            timestamp={item.timestamp}
                            timer={item.timer}
                            notes={item.notes}
                            prompt={item.prompt}
                            id={item.id}
                            deleteFunc={deleteBundler}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

function FlatListEntry({ timestamp, timer, notes, prompt, id, deleteFunc }) {
    return (
        <View>
            <View style={styles.detailsContainer}>
                <View style={styles.detailContainer}>
                    <Ionicons
                        name={"calendar-outline"}
                        size={20}
                        color={"black"}
                    />
                    <Text style={styles.detailText}>
                        {formatDate(timestamp)}
                    </Text>
                </View>
                <View style={styles.detailContainer}>
                    <Ionicons
                        name={"hourglass-outline"}
                        size={20}
                        color={"black"}
                    />
                    <Text style={styles.detailText}>{formatTimer(timer)}</Text>
                </View>
            </View>
            <Text style={styles.notesText}>Notes: {notes}</Text>
            <View style={styles.detailContainer}>
                <TouchableOpacity onPress={() => deleteFunc(id)}>
                    <Ionicons
                        name={"trash-outline"}
                        size={20}
                        color={"black"}
                    />
                </TouchableOpacity>
                <Text style={styles.detailText}>Delete?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: "white",
        flex: 1,
    },

    container2: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        flex: 1,
    },
    detailText: {
        fontSize: 15,
    },
    detailContainer: {
        flexDirection: "row",
        gap: 5,
    },
    detailsContainer: {
        flexDirection: "row",
        gap: 20,
    },
    notesText: {
        fontSize: 15,
        color: "black",
        paddingVertical: 10,
    },
});
