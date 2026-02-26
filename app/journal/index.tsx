import { useState } from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

type JournalEntry = {
    id: string;
    date: string;
    title: string;
    preview: string;
    type: 'morning' | 'midday' | 'night';
};

const SAMPLE_ENTRIES: JournalEntry[] = [
    {
        id: '1',
        date: 'Today',
        title: 'Morning Reflection',
        preview: 'Grateful for another day of sobriety and clarity...',
        type: 'morning',
    },
    {
        id: '2',
        date: 'Yesterday',
        title: 'Evening Prayer',
        preview: 'Reviewed the day and found peace in surrender...',
        type: 'night',
    },
    {
        id: '3',
        date: 'Feb 24, 2026',
        title: 'Mid Day Check-in',
        preview: 'Paused to reconnect and ask for guidance...',
        type: 'midday',
    },
];

function getTypeIcon(type: JournalEntry['type']): string {
    switch (type) {
        case 'morning': return '☀️';
        case 'midday': return '⚙️';
        case 'night': return '🌙';
    }
}

export default function JournalScreen() {
    const router = useRouter();
    const [entries] = useState<JournalEntry[]>(SAMPLE_ENTRIES);

    const Container = Platform.OS === 'web' ? View : SafeAreaView;

    const renderEntry = ({ item }: { item: JournalEntry }) => (
        <TouchableOpacity style={styles.entryCard} activeOpacity={0.7}>
            <View style={styles.entryHeader}>
                <Text style={styles.entryIcon}>{getTypeIcon(item.type)}</Text>
                <View style={styles.entryHeaderText}>
                    <Text style={styles.entryTitle}>{item.title}</Text>
                    <Text style={styles.entryDate}>{item.date}</Text>
                </View>
            </View>
            <Text style={styles.entryPreview} numberOfLines={2}>
                {item.preview}
            </Text>
        </TouchableOpacity>
    );

    return (
        <Container style={styles.container}>
            <Text>Journal will be here</Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f0ff',
        paddingTop: Platform.OS === 'web' ? 16 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 20,
    },
    backButton: {
        fontSize: 28,
        color: '#333333',
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1a1a1a',
    },
    placeholder: {
        width: 28,
    },
    listContent: {
        paddingHorizontal: 24,
        paddingBottom: 32,
    },
    entryCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 18,
        marginBottom: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    entryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 12,
    },
    entryIcon: {
        fontSize: 24,
    },
    entryHeaderText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    entryTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    entryDate: {
        fontSize: 12,
        color: '#999999',
        fontWeight: '500',
    },
    entryPreview: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 20,
        paddingLeft: 36,
    },
    emptyState: {
        alignItems: 'center',
        paddingTop: 80,
    },
    emptyIcon: {
        fontSize: 48,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333333',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 14,
        color: '#888888',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 40,
    },
});
