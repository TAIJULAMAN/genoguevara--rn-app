# Recovery Journey App (Geno Guevara)

A premium, high-fidelity React Native application designed to guide users through their recovery journey using the "Big Book Thumper" and "Dr. Bob Mode" spiritual practices. The app provides structured morning, midday, and evening routines, journaling tools, and meditation aids.

## 🚀 Key Features

### 🌅 Morning Routine
- **Big Book Thumper**: Meditation, capturing inspiration, and practical planning for the day.
- **Dr. Bob Mode**: Quiet reflection, anchor words, and the Serenity Prayer.

### ☀️ Midday Pause
- **Big Book Thumper**: Mid-day check-in, capturing guidance, and "Next Right Action" planning.
- **Dr. Bob Mode**: Spiritual focus, 4 Way Test (Honest, Pure, Unselfish, Loving), and guidance checks.

### 🌛 Night Review
- **Big Book Thumper**: Constructive evening review, inventory questions, and asking for corrective measures.
- **Dr. Bob Mode**: Gratitude and grace focus, "Listen for correction" prayer, and surrendering the day.

### 📓 Spiritual Tools
- **Journaling**: In-app journaling that saves entries locally via `AppContext`.
- **Meditation Timer**: Built-in timers with high-quality background audio (`meditation.mp3`).
- **Dynamic UI**: Theme-aware interface that adjusts for morning (bright), midday (blue), and night (dark) modes.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 55)
- **UI Library**: [React Native](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling**: Vanilla React Native StyleSheet
- **Audio**: `expo-av`
- **Typing**: TypeScript
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via `@expo-google-fonts/inter`

## 📂 Project Structure

```text
app/                   # Expo Router root
├── (tabs)/            # Main tab layout (Morning, Midday, Night)
├── morning/           # Morning flow routes
├── midday/            # Midday flow routes
├── night/             # Night flow routes
├── finish/            # Completion screens
├── home/              # Main dashboard
├── scriptures/        # Reference material
├── context/           # AppContext for global state & journaling
└── assets/            # Images, fonts, and audio
```

## 📜 License
Private Project.
