import { Audio } from "expo-av";

async function setupMusic(setSoundState) {
    const { sound } = await Audio.Sound.createAsync(
        require("./assets/music/music1.mp3")
    );
    setSoundState(sound);
}

async function playMusic(soundState) {
    if (soundState) {
        await soundState.playAsync();
    }
}

async function pauseMusic(soundState) {
    if (soundState) {
        await soundState.pauseAsync();
    }
}

async function stopMusic(soundState) {
    if (soundState) {
        await soundState.stopAsync();
    }
}

export { setupMusic, playMusic, pauseMusic, stopMusic };
