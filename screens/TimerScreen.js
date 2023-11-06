import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

import { LargeButton } from "../components/LargeButton";
import { SmallButton } from "../components/SmallButton";

import { formatTimer } from "../modules/datesTimes";
import globalStyles from "../modules/globalStyles";

export default function TimerScreen({ navigation }) {
    let [timer, setTimer] = useState();
    let [sound, setSound] = useState();
    let [muted, setMuted] = useState();

    // Setup / play music and start timer on page load
    useEffect(() => {
        async function setupPlayMusic() {
            const { sound } = await Audio.Sound.createAsync(
                require("../assets/music/music1.mp3")
            );
            setSound(sound);

            // Prevent crash if sound does not load
            if (sound) {
                await sound.setVolumeAsync(1, 1);
                setMuted(false);
                await sound.playAsync();
            }
        }
        setupPlayMusic();
        setTimer(10);
        return () => (sound ? sound.unloadAsync() : undefined);
    }, []);

    // Decrement timer every second
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // Stop music after timer ends
    useEffect(() => {
        // Prevent crash if sound does not load
        if (timer == 0 && sound) {
            async function stopMusic() {
                await sound.stopAsync();
            }
            stopMusic();
        }
    }, [timer]);

    // Control volume - mute / unmute
    async function controlVolume() {
        // Prevent crash if sound does not load
        if (sound) {
            if (muted) {
                await sound.setVolumeAsync(1, 1);
                setMuted(false);
            } else {
                await sound.setVolumeAsync(0, 0);
                setMuted(true);
            }
        }
    }

    // Nav wrapper
    const navToInputNotes = () => {
        navigation.navigate("InputNotes");
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <LargeButton
                title={timer > 0 ? formatTimer(timer) : "Done"}
                subtitle={timer > 0 ? "Currently Meditating" : "Tap to Finish"}
                funcs={navToInputNotes}
                disabled={timer > 0}
            />
        </SafeAreaView>
    );
}
