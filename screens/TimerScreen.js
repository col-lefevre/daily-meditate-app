import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import { Slider } from "@react-native-assets/slider";
import Ionicons from "@expo/vector-icons/Ionicons";

import { LargeButton } from "../components/LargeButton";

import { formatTimer } from "../modules/datesTimes";
import { globalStyles } from "../modules/globalStyles";

export default function TimerScreen({ navigation }) {
    let [timer, setTimer] = useState(10); // Timer value
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
        setupPlayMusic();
    }, []);

    // Unload sound on page unmount
    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);

    useEffect(() => {
        // Decrement timer every second;
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        // Stop music when timer ends
        else if (timer == 0 && sound) {
            async function stopMusic() {
                await sound.stopAsync();
            }
            stopMusic();
        }
    }, [timer]);

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
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-end" }]}
        >
            <LargeButton
                title={timer > 0 ? formatTimer(timer) : "Done"}
                subtitle={timer > 0 ? "Currently Meditating" : "Tap to Finish"}
                funcs={navToInputNotes}
                disabledStatus={timer > 0}
            />
            <View style={[styles.volumeControls, globalStyles.borders]}>
                <Ionicons name={"volume-low"} size={30} color="#0a618c" />
                <Slider
                    style={styles.slider}
                    value={0.5}
                    minimumValue={0}
                    maximumValue={1}
                    step={0}
                    minimumTrackTintColor="#0a618c"
                    maximumTrackTintColor="#D3D3D3"
                    thumbTintColor="#0a618c"
                    trackHeight={7}
                    thumbSize={20}
                    onValueChange={(value) => setVolumeState(value)}
                />
                <Ionicons name={"volume-high"} size={30} color="#0a618c" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    slider: {
        width: 150,
        height: 60,
    },
    volumeControls: {
        borderRadius: 50,
        paddingVertical: 0,
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 20,
        flexGrow: 0,
        alignItems: "center",
        marginTop: 250,
        marginBottom: 50,
    },
});
