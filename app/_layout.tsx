import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="welcome/index" />
            <Stack.Screen name="reminders/index" />
            <Stack.Screen name="selection/index" />
            <Stack.Screen name="home/index" />
            <Stack.Screen name="journal/index" />
            <Stack.Screen name="settings/index" />
            <Stack.Screen name="notifications/index" />
        </Stack>
    );
}
