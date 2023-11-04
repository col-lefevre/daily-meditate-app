import { StyleSheet, View, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Card, Button, createTheme, ThemeProvider } from "@rneui/themed";

import { meditationPrompts } from "./InternalData";
import { Prompt } from "./Prompt";
import { CustomButton } from "./CustomButton";
import { Timer } from "./Timer";
import { InputNotes } from "./InputNotes";
import { ViewNotes } from "./ViewNotes";
import { CustomCard } from "./CustomCard";

import { stopMusic, pauseMusic, playMusic, setupMusic } from "./audio";
// import { Audio } from "expo-av";

const Stack = createStackNavigator();

const theme = createTheme({
    colors: {
        primary: "teal",
        secondary: "white",
    },
    components: {
        Button: {
            raised: false,
        },
        Text: {
            style: {
                fontFamily: "sans-serif",
            },
        },
        Card: {
            containerStyle: {
                backgroundColor: "white",
                elevation: 0,
                borderRadius: 5,
                borderColor: "light-grey",
                borderWidth: 1,
            },
            wrapperStyle: {
                backgroundColor: "white",
            },
        },
    },
});

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Testing">
            <Stack.Screen
                name="testing"
                component={TestingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Prompt"
                component={PromptScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Timer"
                component={TimerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="InputNotes"
                component={InputNotesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ViewNotes"
                component={ViewNotesScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function TestingScreen({ navigation }) {
    const navToHome = () => {
        navigation.navigate("Home");
    };

    let randomPrompt =
        meditationPrompts[Math.floor(Math.random() * meditationPrompts.length)];

    const [sound, setSound] = useState();

    useEffect(() => {
        setupMusic(setSound);
        return () => (sound ? sound.unloadAsync() : undefined); // Clean up resources
    }, []);

    return (
        <ImageBackground
            source={require("./assets/backgrounds/background2.jpg")}
            style={styles.backImg}
        >
            <SafeAreaView style={styles.container}>
                {/* <ThemeProvider theme={theme}>
                    <Card>
                        <CardTitle>Meditation Prompt</CardTitle>
                        <CardDivider></CardDivider>
                        <Text>Card content. Woah!</Text>
                    </Card>

                    <Button title="Hey :3" onPress={navToHome} />
                    <Text>Hi there</Text>
                </ThemeProvider> */}
                <CustomCard
                    title={"Your Daily Meditation Prompt"}
                    body={randomPrompt}
                />
                <CustomButton
                    buttonText={"Play Music"}
                    buttonFuncs={() => playMusic(sound)}
                />
                <CustomButton
                    buttonText={"Pause Music"}
                    buttonFuncs={() => pauseMusic(sound)}
                />
                <CustomButton
                    buttonText={"Stop Music"}
                    buttonFuncs={() => stopMusic(sound)}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

function HomeScreen({ navigation }) {
    // Nav wrapper
    const navToPrompt = () => {
        navigation.navigate("Prompt");
    };

    return (
        <View style={styles.container}>
            <CustomButton
                buttonText={"Meditate"}
                buttonFuncs={navToPrompt}
                disabledStatus={false}
            />
        </View>
    );
}

function PromptScreen({ navigation }) {
    // Nav wrapper
    const navToTimer = () => {
        navigation.navigate("Timer");
    };

    let randomPrompt =
        meditationPrompts[Math.floor(Math.random() * meditationPrompts.length)];

    return (
        <View style={styles.container}>
            <Prompt promptText={randomPrompt} />
            <CustomButton
                buttonText={"Begin"}
                buttonFuncs={navToTimer}
                disabledStatus={false}
            />
        </View>
    );
}

function TimerScreen({ navigation }) {
    // Timer
    let [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [timer]);

    function getFormattedTime() {
        let mins = Math.floor(timer / 60);
        let secs = timer % 60;

        let formatMins = String(mins).padStart(2, "0");
        let formatSecs = String(secs).padStart(2, "0");

        return `${formatMins}:${formatSecs}`;
    }

    // Nav wrapper
    const navToInputNotes = () => {
        navigation.navigate("InputNotes");
    };

    return (
        <View style={styles.container}>
            <Timer timerText={getFormattedTime()} />
            <CustomButton
                buttonText={"Take Notes"}
                buttonFuncs={navToInputNotes}
                disabledStatus={timer > 0}
            />
        </View>
    );
}

function InputNotesScreen({ navigation }) {
    const navToViewNotes = () => {
        navigation.navigate("ViewNotes");
    };

    return (
        <View style={styles.container}>
            <InputNotes navFunc={navToViewNotes} />
        </View>
    );
}

function ViewNotesScreen({ navigation }) {
    const navToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <ViewNotes />
            <CustomButton
                buttonText={"Finish"}
                buttonFuncs={navToHome}
                disabledStatus={false}
            />
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "start",
        alignItems: "center",
        flex: 1,
    },
    backImg: {
        flex: 1,
        resizeMode: "cover",
    },
});
