var userScore = 0;
var aiMove = "";
var aiScore = 0;

$("#replay").hide();
$("#rock").click(function () {
   var x = Math.floor(Math.random() * 3 + 1);
   if (x == 1) {
      aiMove = "rock";
      $("#message").text("You tied!");
   }
   if (x == 2) {
      aiMove = "paper";
      userScore += 1;
      $("#userScores").text(userScore);
      $("#message").text("You win!");
   }
   if (x == 3) {
      aiMove = "scissors";
      aiScore += 1;
      $("#aiScores").text(aiScore);
      $("#message").text("You lost!");
   }
   if (userScore == 5) {
      $("#message").text("You win the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   } else if (aiScore == 5) {
      $("#message").text("You lost the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   }
});
$("#paper").click(function () {
   var x = Math.floor(Math.random() * 3 + 1);
   if (x == 1) {
      aiMove = "rock";
      userScore += 1;
      $("#userScores").text(userScore);
      $("#message").text("You win!");
   }
   if (x == 2) {
      aiMove = "paper";
      $("#message").text("You tied!");
   }
   if (x == 3) {
      aiMove = "scissors";
      aiScore += 1;
      $("#aiScores").text(aiScore);
      $("#message").text("You lost!");
   }
   if (userScore == 5) {
      $("#message").text("You win the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   } else if (aiScore == 5) {
      $("#message").text("You lost the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   }
});
$("#scissors").click(function () {
   var x = Math.floor(Math.random() * 3 + 1);
   if (x == 1) {
      aiMove = "rock";
      $("#message").text("You tied!");
   }
   if (x == 2) {
      aiMove = "paper";
      userScore += 1;
      $("#userScores").text(userScore);
      $("#message").text("You win!");
   }
   if (x == 3) {
      aiMove = "scissors";
      aiScore += 1;
      $("#aiScores").text(aiScore);
      $("#message").text("You lost!");
   }
   if (userScore == 5) {
      $("#message").text("You win the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   } else if (aiScore == 5) {
      $("#message").text("You lost the game!");
      $("#rock").prop("disabled", true);
      $("#paper").prop("disabled", true);
      $("#scissors").prop("disabled", true);
      $("#replay").show();
   }
});
