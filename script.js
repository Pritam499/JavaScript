'use strict';

// console.log( document.querySelector('.message').textContent);

// document.querySelector(".message").textContent = '💥Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;
// display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// display number function
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

// display score function
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

// display background color function
const displayBackground = function (background) {
    document.querySelector('body').style.backgroundColor = background;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input!
  if (!guess) {
    // document.querySelector('.message').textContent = '🥺No Number Inserted! ✏️';
    displayMessage('🥺 No Number Inserted! ✏️');

    // when player wins!
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '💥Correct Number!';
    displayMessage('💥Correct Number!');
      // document.querySelector('.number').textContent = secretNumber;
      displayNumber(secretNumber);
      // document.querySelector('body').style.backgroundColor = '#60b347';
      displayBackground('#60b347');

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //   when guess is wrong! will be execute this code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '⬆️ Too High! ❌' : '⬇️ Too Low! ❌';
      displayMessage(
        guess > secretNumber ? '⬆️ Too High! ❌' : '⬇️ Too Low! ❌',
      );
      score--;
        //   document.querySelector('.score').textContent = score;
        displayScore(score);

      if (score < 17 && score > 10) {
        document.querySelector('.heading').style.backgroundColor = '#3e2714';
        document.querySelector('.again').style.backgroundColor = '#820000';
        document.querySelector('.check').style.backgroundColor = '#820000';
        // document.querySelector('body').style.backgroundColor =
          //   guess > secretNumber ? '#f2acac' : '#34499B';
          displayBackground(guess > secretNumber ? '#f2acac' : '#34499B');
      }
    } else if (score <= 10 && score > 0) {
      document.querySelector('.check').style.backgroundColor = '#440000';
        //   document.querySelector('body').style.backgroundColor = '#333';
        displayBackground('#333');
    }
  } else {
      // document.querySelector('.message').textContent = '📢 You Lost the game!📍';
      displayMessage('📢 You Lost the game!📍');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
      // document.querySelector('body').style.backgroundColor = 'rgb(203, 0, 41)';
      displayBackground('rgb(203, 0, 41)');
    document.querySelector('.heading').style.backgroundColor = '#3e2714';
    document.querySelector('.check').style.backgroundColor = '#eee';
    document.querySelector('.label-highscore').style.Color = '#eee';
  }
  // when guess is too high!
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬆️ Too High! ❌';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       if (score < 17 && score > 10) {
  //         document.querySelector('.heading').style.backgroundColor = '#3e2714';
  //         document.querySelector('.again').style.backgroundColor = '#820000';
  //         document.querySelector('body').style.backgroundColor = '#f2acac';
  //         document.querySelector('.check').style.backgroundColor = '#820000';
  //       } else if (score <= 10 && score > 0) {
  //         document.querySelector('.check').style.backgroundColor = '#440000';
  //         document.querySelector('body').style.backgroundColor = '#333';
  //       }
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '📢 You Lost the game!📍';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'rgb(203, 0, 41)';
  //       document.querySelector('.heading').style.backgroundColor = '#3e2714';
  //       document.querySelector('.check').style.backgroundColor = '#eee';
  //     }

  //     // when guess is too low!
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬇️ Too Low! ❌';
  //       score--;
  //       document.querySelector('.score').textContent = score;

  //       if (score < 17 && score > 10) {
  //         document.querySelector('.heading').style.backgroundColor = '#3e2714';
  //         document.querySelector('.again').style.backgroundColor = '#820000';
  //         document.querySelector('body').style.backgroundColor = '#34499B';
  //         document.querySelector('.check').style.backgroundColor = '#820000';
  //       } else if (score <= 10 && score > 0) {
  //         document.querySelector('.check').style.backgroundColor = '#440000';
  //         document.querySelector('body').style.backgroundColor = '#333';
  //       }
  //       document.querySelector('.heading').style.Color = '#fff';
  //       // when too low and failed
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '📢 You Lost the game!📍';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'rgb(203, 0, 41)';
  //       document.querySelector('.heading').style.backgroundColor = '#3e2714';
  //       document.querySelector('.label-highscore').style.Color = '#eee';
  //       document.querySelector('.check').style.backgroundColor = '#eee';
  //     }
  //   }
});

// game reset functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

    //   document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    //   document.querySelector('.score').textContent = score;
    displayScore(score);

    //   document.querySelector('.number').textContent = '?';
    displayNumber('?')
  document.querySelector('.guess').value = '';

  // reset colors and backgrounds
    //   document.querySelector('body').style.backgroundColor = 'cadetblue';
    displayBackground('cadetblue');
  document.querySelector('.heading').style.backgroundColor = '#008f77';
  document.querySelector('.again').style.backgroundColor = 'crimson';
  document.querySelector('.check').style.backgroundColor = 'crimson';
  document.querySelector('.number').style.width = '15rem';
});
