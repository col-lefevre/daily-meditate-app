import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

import { formatTimer } from "../modules/datesTimes";
import { LargeButton } from "../components/LargeButton";
import globalStyles from "../modules/globalStyles";

export default function TimerScreen({ navigation }) {
    let [timer, setTimer] = useState();
    let [sound, setSound] = useState();

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

    async function muteMusic() {
        // Prevent crash if sound does not load
        if (sound) {
            await sound.setVolumeAsync(0, 0);
        }
    }

    async function unmuteMusic() {
        // Prevent crash if sound does not load
        if (sound) {
            await sound.setVolumeAsync(0, 0);
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
