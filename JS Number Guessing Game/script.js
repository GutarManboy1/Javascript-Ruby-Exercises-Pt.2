let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

const answer = Math.floor(Math.random() * 100) + 1;

let num_of_guesses = 0;

let guessed_nums = [];

function play() {
  let user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 100) {
    alert("Enter a Number between 1-100, dummy!");
  } else {
    guessed_nums.push(user_guess);
    num_of_guesses += 1;

    if (user_guess < answer) {
      msg1.textContent = "Your Guess is Too Low.";
      msg2.textContent = "Number of guesses:" + num_of_guesses;
      msg3.textContent = "Guessed numbers are :" + guessed_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Your Guess is Too High.";
      msg2.textContent = "Number of guesses:" + num_of_guesses;
      msg3.textContent = "Guessed numbers are :" + guessed_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "Aw yeah, boyee!";
      msg2.textContent = "The number was : " + answer;
      msg3.textContent = "You guessed it in " + num_of_guesses + "guesses";
      document.getElementById("my_btn").disabled = true;
    }
  }
}
