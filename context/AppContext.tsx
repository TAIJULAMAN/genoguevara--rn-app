import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PathOption = 'dr_bob' | 'big_book';

export interface JournalEntry {
    id: string;
    date: string;
    title: string;
    preview: string;
    content: string;
    type: 'morning' | 'midday' | 'night';
}

interface AppContextType {
    selectedPath: PathOption;
    setSelectedPath: (path: PathOption) => void;
    journalEntries: JournalEntry[];
    addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [selectedPath, setSelectedPath] = useState<PathOption>('big_book');
    const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

    const addJournalEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
        const newEntry: JournalEntry = {
            ...entry,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        };
        setJournalEntries(prev => [newEntry, ...prev]);
    };

    return (
        <AppContext.Provider value={{
            selectedPath,
            setSelectedPath,
            journalEntries,
            addJournalEntry
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
