# Keyboard Press Game

A fun and interactive browser-based game that challenges players to press the correct keys on their keyboard. This game combines auditory feedback and visual cues to create an engaging user experience.

---

## Features

### 1. **Dynamic Sound Playback**

- Each letter is associated with a unique sound file.
- The sound is replayed at regular intervals (1 second) to guide the player until they press the correct key.

### 2. **Real-Time Key Detection**

- Detects both physical keyboard inputs and virtual key clicks.
- Ensures compatibility with desktop and mobile devices.

### 3. **Scoring System**

- Players earn points for correct key presses.
- A live score counter updates in real-time.

### 4. **Life System**

- Players start with 5 lives.
- Incorrect key presses reduce the life count.
- Game ends when lives reach zero.

### 5. **Random Letter Generation**

- A random letter is displayed for the player to press.
- Enhances the unpredictability and replayability of the game.

### 6. **Play Again Feature**

- Players can restart the game with a fresh score and full lives.

### 7. **Pause and Exit**

- Press `Escape` to pause the game and stop all sounds.

---

## How to Play

1. **Start the Game**

   - Click the "Play" button or press `Enter` to begin.

2. **Press the Correct Key**

   - Look at the random letter displayed on the screen.
   - Press the corresponding key on your keyboard or click the virtual key.

3. **Scoring**

   - Correctly pressing the key increases your score.
   - An incorrect press deducts a life.

4. **Game Over**

   - When your lives reach zero, the game ends, and your final score is displayed.

5. **Replay**

   - Use the "Play Again" button to start a new game.

---

## Technical Overview

### Key Functions

- **`playSound(letter)`**

  - Plays a sound file associated with the given letter.
  - Loops the sound every second until the correct key is pressed.

- **`keyboardPressByPlayer(event)`**

  - Handles keyboard and virtual key inputs.
  - Updates score, life count, and checks for game-ending conditions.

- **`generateRandomAlphabets()`**

  - Generates and displays a random letter from the alphabet.
  - Triggers sound playback and updates the virtual keyboard.

- **`playAgain()`**

  - Resets score and lives.
  - Prepares the game for a new round.

### Event Listeners

- **`keyup`** Event

  - Captures physical keyboard inputs.

- **Virtual Key Clicks**

  - Listens for clicks on virtual keys, ensuring compatibility across devices.

---
## Contributing
Feel free to fork the repository and submit pull requests for improvements. Contributions are welcome!

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Shakhawat-Hosen/alpha-clash.git
