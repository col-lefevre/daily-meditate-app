import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { getPrimaryGrey, globalStyles } from "../modules/globalStyles";
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

    // Nav wrapper
    const navToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <TouchableOpacity
                    onPress={navToHome}
                    style={styles.titleIconBlock}
                >
                    <TextIcon text={""} iconName={"arrow-back"} size={22.5} />
                </TouchableOpacity>
                <Text style={styles.titleText}>Your Notes</Text>
                <View style={styles.titleIconBlock}></View>
            </View>
            {userData.length > 0 ? (
                <FlatList
                    data={userData}
                    style={styles.flatList}
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
            ) : (
                <View style={styles.placeholderContainer}>
                    <View
                        style={[styles.placeholderView, globalStyles.borders]}
                    >
                        <Text style={styles.notesText}>
                            Once you meditate, any notes you make will show up
                            here!
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}

function FlatListEntry({ timestamp, timer, notes, prompt, id, deleteFunc }) {
    return (
        <View style={[styles.flatListEntry, globalStyles.borders]}>
            <View style={styles.headerContainer}>
                <View style={styles.detailsContainer}>
                    <TextIcon
                        iconName={"calendar"}
                        text={formatDate(timestamp)}
                    />
                    <TextIcon
                        iconName={"hourglass"}
                        text={formatTimer(timer)}
                    />
                </View>
                <TouchableOpacity onPress={() => deleteFunc(id)}>
                    <TextIcon iconName={"trash"} text={""} />
                </TouchableOpacity>
            </View>
            <Text style={styles.notesText}>{notes}</Text>
        </View>
    );
}

function TextIcon({ iconName, size = 20, color = "black", text }) {
    return (
        <View style={styles.detailContainer}>
            <Ionicons name={iconName} size={size} color={color} />
            <Text style={styles.detailText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailText: {
        fontSize: 16,
        letterSpacing: 0.5,
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
    },
    flatListEntry: {
        marginBottom: 20,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
    },
    flatList: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    titleView: {
        paddingTop: 50,
        backgroundColor: "white",
        borderBottomWidth: 3,
        borderBottomColor: getPrimaryGrey(),
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20,
        justifyContent: "center",
    },
    titleText: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
        letterSpacing: 1,
        flex: 5,
    },
    titleIconBlock: {
        flex: 1,
        paddingHorizontal: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    placeholderView: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        width: 300,
    },
});
