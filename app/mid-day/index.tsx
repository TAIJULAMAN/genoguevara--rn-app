import { useState } from 'react';
import {
    ImageBackground,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../context/AppContext';

function getFormattedDate(): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `Today is ${day}, ${date} ${month}, ${year}`;
}

export default function MidDayScreen() {
    const { selectedPath } = useAppContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    return (
        <ImageBackground
            source={require('../../assets/nbg.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <Container style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Mid Day</Text>
                    <TouchableOpacity
                        style={styles.menuButton}
                        activeOpacity={0.7}
                        onPress={() => setMenuOpen(true)}
                    >
                        <Text style={styles.menuDots}>•••</Text>
                    </TouchableOpacity>
                </View>

                {/* Dropdown Menu */}
                <Modal
                    visible={menuOpen}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setMenuOpen(false)}
                >
                    <Pressable style={styles.overlay} onPress={() => setMenuOpen(false)}>
                        <View style={styles.dropdown}>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                activeOpacity={0.7}
                                onPress={() => { setMenuOpen(false); router.push('/journal'); }}
                            >
                                <Text style={styles.dropdownIcon}>📖</Text>
                                <Text style={styles.dropdownLabel}>Journal</Text>
                            </TouchableOpacity>

                            <View style={styles.dropdownDivider} />

                            <TouchableOpacity
                                style={styles.dropdownItem}
                                activeOpacity={0.7}
                                onPress={() => { setMenuOpen(false); router.push('/settings'); }}
                            >
                                <Text style={styles.dropdownIcon}>⚙️</Text>
                                <Text style={styles.dropdownLabel}>Settings</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Modal>

                {/* Center Content */}
                <View style={styles.centerContent}>
                    <Text style={styles.greeting}>Good Afternoon.</Text>
                    <Text style={styles.dateText}>{getFormattedDate()}</Text>

                    {/* Start Button */}
                    <TouchableOpacity
                        style={styles.startOuterCircle}
                        activeOpacity={0.8}
                        onPress={() => {
                            // Mid day could go to a specific midday routine if implemented
                            // For now, staying consistent with path selection
                            if (selectedPath === 'dr_bob') {
                                router.push('/dr-bob');
                            } else {
                                router.push('/big-book');
                            }
                        }}
                    >
                        <View style={styles.startInnerCircle}>
                            <Text style={styles.startText}>Start</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Bottom Tab Bar */}
                <View style={styles.tabBar}>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => router.push('/home')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.tabIcon}>☀️</Text>
                        <Text style={styles.tabLabel}>Morning</Text>
                    </TouchableOpacity>

                    <View style={[styles.tab, styles.tabActive]}>
                        <View style={styles.activeTabIndicator}>
                            <Text style={[styles.tabIcon, styles.tabIconActive]}>⚙️</Text>
                            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Mid Day</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => { }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.tabIcon}>🌙</Text>
                        <Text style={styles.tabLabel}>Night</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'web' ? 16 : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    title: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 32,
        color: '#000000', // Making it darker as per screenshot
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuDots: {
        fontSize: 16,
        color: '#333333',
        letterSpacing: 2,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: Platform.OS === 'web' ? 70 : 90,
        paddingRight: 24,
    },
    dropdown: {
        backgroundColor: 'rgba(20, 30, 55, 0.92)',
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 6,
        minWidth: 180,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 12,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        gap: 14,
    },
    dropdownIcon: {
        fontSize: 22,
    },
    dropdownLabel: {
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
        color: '#ffffff',
    },
    dropdownDivider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        marginHorizontal: 16,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    greeting: {
        fontFamily: 'Inter_500Medium',
        fontSize: 22,
        color: '#000000',
        marginBottom: 6,
    },
    dateText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#1a1a1a',
        marginBottom: 48,
    },
    startOuterCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        // Shadow for premium look
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 10,
    },
    startInnerCircle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 22,
        color: '#000000',
    },
    tabBar: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginBottom: 28,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    tabActive: {
        flex: 1.2,
    },
    activeTabIndicator: {
        backgroundColor: '#ffffff',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    tabIcon: {
        fontSize: 18,
        color: '#777777',
        marginBottom: 2,
    },
    tabIconActive: {
        fontSize: 20,
        color: '#000000',
    },
    tabLabel: {
        fontFamily: 'Inter_500Medium',
        fontSize: 10,
        color: '#999999',
    },
    tabLabelActive: {
        fontFamily: 'Inter_700Bold',
        fontSize: 10,
        color: '#000000',
    },
});
