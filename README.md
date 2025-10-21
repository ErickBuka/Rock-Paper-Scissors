# Rock Paper Scissors Game

A classic Rock-Paper-Scissors game implemented in JavaScript that runs in the browser using popup dialogs.

## 🎮 Play Now

**[Play the Game](https://erickbuka.github.io/Rock-Paper-Scissors/)**

## Description

This is a simple browser-based implementation of the classic hand game Rock-Paper-Scissors. The player competes against the computer over 5 rounds, with the winner determined by the best overall score.

## Features

- 5-round gameplay format
- Input validation with error handling
- Real-time score tracking
- Round-by-round results display
- Final game summary
- Replay option after game completion
- Clean, user-friendly popup interface

## How to Play

1. Open the `index.html` file in your web browser
2. When prompted, enter your choice: `rock`, `paper`, or `scissors`
3. View the round results showing both choices and the winner
4. Continue for all 5 rounds
5. See the final score and overall winner
6. Choose to play again or exit

## Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Same choices result in a tie (no points awarded)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/ErickBuka/Rock-Paper-Scissors.git
```

2. Navigate to the project directory:
```bash
cd Rock-Paper-Scissors
```

3. Open `index.html` in your browser:
```bash
# On Linux/Mac
open index.html

# On Windows
start index.html

# Or simply double-click the file
```

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Browser Dialog APIs (prompt, alert, confirm)

## Project Structure

```
Rock-Paper-Scissors/
│
├── index.html          # Main HTML file
├── script.js           # Game logic
└── README.md          # Project documentation
```

## Code Features

- Modular function design
- Unbiased random selection algorithm
- Score encapsulation
- Graceful cancellation handling
- Input sanitization (lowercase, trimmed)

## Future Enhancements

- [ ] Add GUI with HTML/CSS interface
- [ ] Implement different game modes (best of 3, best of 7)
- [ ] Add sound effects
- [ ] Track win/loss statistics across sessions
- [ ] Add multiplayer mode
- [ ] Include game history log

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Erick Buka**

GitHub: [@ErickBuka](https://github.com/ErickBuka)

## Acknowledgments

- Inspired by the classic hand game
- Built as a practice project for JavaScript fundamentals

---

Enjoy playing! May the odds be ever in your favor.