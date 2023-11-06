import { ImageBackground } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import globalStyles from "./modules/globalStyles";

import HomeScreen from "./screens/HomeScreen";
import PromptScreen from "./screens/PromptScreen";
import TimerScreen from "./screens/TimerScreen";
import ViewNotesScreen from "./screens/ViewNotesScreen";
import InputNotesScreen from "./screens/InputNotesScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Timer">
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
    // Necessary to have image background; ty Stack Overflow :)
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "transparent",
        },
    };

    return (
        <ImageBackground
            source={require("./assets/backgrounds/background2.jpg")}
            style={globalStyles.backImg}
        >
            <NavigationContainer theme={navTheme}>
                <MyStack />
            </NavigationContainer>
        </ImageBackground>
    );
}
