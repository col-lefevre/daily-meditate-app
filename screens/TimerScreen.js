import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Audio } from "expo-av";
import { Slider } from "@react-native-assets/slider";
import Ionicons from "@expo/vector-icons/Ionicons";

import { LargeButton } from "../components/LargeButton";
import { PromptContext } from "../components/PromptContext";
import { CustomCardFrameBottom } from "../components/CustomCard";

import { formatTimer } from "../modules/datesTimes";
import {
    globalStyles,
    getPrimaryBlue,
    getPrimaryGrey,
} from "../modules/globalStyles";

export default function TimerScreen({ navigation }) {
    const { timer, prompt } = useContext(PromptContext);

    let [localTimer, setLocalTimer] = useState(timer);
    let [sound, setSound] = useState();
    let [volume, setVolume] = useState(0.5); // Default volume

    // Setup / play music on page load
    useEffect(() => {
        async function setupPlayMusic() {
            const { sound } = await Audio.Sound.createAsync(
                require("../assets/music/music1.mp3")
            );
            setSound(sound);
            if (sound) {
                await sound.playAsync();
            }
        }
        // Prevent music from playing when opening page with timer = 0
        if (localTimer > 0) {
            setupPlayMusic();
        }
    }, []);

    // Unload sound on page unmount
    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);

    useEffect(() => {
        // Decrement timer every second;
        if (localTimer > 0) {
            const interval = setInterval(() => {
                setLocalTimer(localTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        // Stop music when timer ends
        else if (localTimer == 0 && sound) {
            async function stopMusic() {
                await sound.stopAsync();
            }
            stopMusic();
        }
    }, [localTimer]);

    // Make sound volume match "volume" state
    useEffect(() => {
        if (sound) {
            async function setMusicVolume() {
                await sound.setVolumeAsync(volume);
            }
            setMusicVolume();
        }
    }, [volume]);

    // Wrapper for setVolume
    function setVolumeState(inputNum) {
        if (inputNum <= 1 && inputNum >= 0) {
            setVolume(inputNum);
        }
    }

    // Nav wrapper
    const navToInputNotes = () => {
        navigation.navigate("InputNotes");
    };

    return (
        <SafeAreaView style={[globalStyles.container, styles.container]}>
            <LargeButton
                title={localTimer > 0 ? formatTimer(localTimer) : "Done"}
                subtitle={
                    localTimer > 0 ? "Currently Meditating" : "Tap to Finish"
                }
                funcs={navToInputNotes}
                disabledStatus={localTimer > 0}
            />

            {/* <View style={[styles.tab, globalStyles.borders]}>
                
            </View> */}
            <CustomCardFrameBottom title={"Your Prompt"}>
                <Text>{prompt}</Text>
                <View style={styles.volumeControls}>
                    <Ionicons
                        name={"volume-low"}
                        size={30}
                        color={getPrimaryBlue()}
                    />
                    <Slider
                        style={styles.slider}
                        value={0.5}
                        minimumValue={0}
                        maximumValue={1}
                        step={0}
                        minimumTrackTintColor={getPrimaryBlue()}
                        maximumTrackTintColor="#D3D3D3"
                        thumbTintColor={getPrimaryBlue()}
                        trackHeight={7}
                        thumbSize={20}
                        onValueChange={(value) => setVolumeState(value)}
                    />
                    <Ionicons
                        name={"volume-high"}
                        size={30}
                        color={getPrimaryBlue()}
                    />
                </View>
            </CustomCardFrameBottom>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 180,
    },
    slider: {
        width: 150,
        height: 60,
    },
    volumeControls: {
        paddingTop: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 20,
        flexGrow: 0,
        alignItems: "center",
    },
    tab: {
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 0,
        borderWidth: 3,
        borderColor: getPrimaryGrey(),
        borderStyle: "solid",
        backgroundColor: "white",
        width: 350,
        justifyContent: "center",
        alignItems: "center",
    },
});
