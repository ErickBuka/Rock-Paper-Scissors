// Game constants
const CHOICES = ['rock', 'paper', 'scissors'];
const TOTAL_ROUNDS = 5;

// Computer choice generator
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Human input with validation
function getHumanChoice() {
  while (true) {
    const input = prompt('Enter your choice (rock/paper/scissors):');
    
    // Handle cancellation
    if (input === null) {
      return null;
    }
    
    const normalized = input.toLowerCase().trim();
    
    if (CHOICES.includes(normalized)) {
      return normalized;
    }
    
    alert('❌ Invalid choice! Please enter rock, paper, or scissors.');
  }
}

// Single round logic
function playRound(humanChoice, computerChoice, scores, roundNumber) {
  let message = `ROUND ${roundNumber} of ${TOTAL_ROUNDS}\n\n`;
  message += `You chose: ${humanChoice}\n`;
  message += `Computer chose: ${computerChoice}\n\n`;
  
  if (humanChoice === computerChoice) {
    message += `It's a TIE! Both chose ${computerChoice}`;
  } else {
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    
    if (winConditions[humanChoice] === computerChoice) {
      scores.human++;
      message += `YOU WIN! ${humanChoice} beats ${computerChoice}`;
    } else {
      scores.computer++;
      message += `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
    }
  }
  
  message += `\n\n Current Score:\nYou: ${scores.human} | Computer: ${scores.computer}`;
  
  alert(message);
}

// Display final results
function displayFinalResults(scores) {
  let message = `GAME OVER!\n\n`;
  message += `FINAL SCORE:\n`;
  message += `You: ${scores.human}\n`;
  message += `Computer: ${scores.computer}\n\n`;
  
  if (scores.human > scores.computer) {
    message += `CONGRATULATIONS!\nYou win the game!`;
  } else if (scores.computer > scores.human) {
    message += `Computer wins the game!\nBetter luck next time!`;
  } else {
    message += `It's a TIE GAME!\nWell played!`;
  }
  
  alert(message);
}

// Main game flow
function playGame() {
  const scores = { human: 0, computer: 0 };
  
  alert(`Welcome to Rock-Paper-Scissors!\n\nYou'll play ${TOTAL_ROUNDS} rounds against the computer.\n\nLet's begin!`);
  
  for (let round = 1; round <= TOTAL_ROUNDS; round++) {
    const humanSelection = getHumanChoice();
    
    // Handle game cancellation
    if (humanSelection === null) {
      alert('Game cancelled by player.\n\nThanks for playing!');
      return false;
    }
    
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, scores, round);
  }
  
  displayFinalResults(scores);
  return true;
}

// Game loop with replay option
function startGame() {
  const gameCompleted = playGame();
  
  if (gameCompleted && confirm('Would you like to play again?')) {
    startGame();
  } else {
    alert('Thanks for playing!\n\nSee you next time!');
  }
}

// Start the game
startGame();