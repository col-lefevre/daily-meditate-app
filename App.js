import { ImageBackground } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

import { globalStyles } from "./modules/globalStyles";
import { meditationPrompts, timers } from "./modules/meditationPrompts.js";

import { PromptContext } from "./components/PromptContext.js";

import HomeScreen from "./screens/HomeScreen";
import PromptScreen from "./screens/PromptScreen.js";
import TimerScreen from "./screens/TimerScreen";
import ViewNotesScreen from "./screens/ViewNotesScreen";
import InputNotesScreen from "./screens/InputNotesScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
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

export default function App() {
    const [prompt, setPrompt] = useState(meditationPrompts[0]);
    const [timer, setTimer] = useState(timers[0]);

    // Necessary to have image background; ty Stack Overflow :)
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "transparent",
        },
    };

    return (
        <PromptContext.Provider value={{ prompt, setPrompt, timer, setTimer }}>
            <ImageBackground
                source={require("./assets/backgrounds/background2.jpg")}
                style={globalStyles.backImg}
            >
                <NavigationContainer theme={navTheme}>
                    <MyStack />
                </NavigationContainer>
            </ImageBackground>
        </PromptContext.Provider>
    );
}
