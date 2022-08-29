$(document).ready(function(){
    var userScore = 0;
    var aiMove = "";
    var aiScore = 0;
    $("#replay").hide();
    $("#rock").click(function(){
        var x = Math.floor((Math.random() * 3) + 1);
        if(x == 1){
            aiMove = "rock";
            $("#alerts2").text("You tied!");
        }
        if(x == 2){
            aiMove = "paper";
            userScore+=1;
            $("#userScores").text(userScore);
            $("#alerts2").text("You win!");
        }
        if(x == 3){
            aiMove = "scissors";
            aiScore+=1;
            $("#aiScores").text(aiScore);
            $("#alerts2").text("You lost!");
        }
        if(userScore == 5){
            $("#alerts2").text("You win the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true);
            $("#replay").show();
        }
        else if(aiScore == 5){
            $("#alerts2").text("You lost the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true);
            $("#replay").show(); 
        }
    });
    $("#paper").click(function(){
        var x = Math.floor((Math.random() * 3) + 1);
        if(x == 1){
            aiMove = "rock";
            userScore+=1;   
            $("#userScores").text(userScore);
            $("#alerts2").text("You win!");
        }
        if(x == 2){
            aiMove = "paper";
            $("#alerts2").text("You tied!");
        }
        if(x == 3){
            aiMove = "scissors";
            aiScore+=1;
            $("#aiScores").text(aiScore);
            $("#alerts2").text("You lost!");
        }
        if(userScore == 5){
            $("#alerts2").text("You win the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true);
            $("#replay").show();
        }
        else if(aiScore == 5){
            $("#alerts2").text("You lost the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true); 
            $("#replay").show();
        }
    });
    $("#scissors").click(function(){
        var x = Math.floor((Math.random() * 3) + 1);
        if(x == 1){
            aiMove = "rock";
            $("#alerts2").text("You tied!");
        }
        if(x == 2){
            aiMove = "paper";
            userScore+=1;
            $("#userScores").text(userScore);
            $("#alerts2").text("You win!");
        }
        if(x == 3){
            aiMove = "scissors";
            aiScore+=1;
            $("#aiScores").text(aiScore);
            $("#alerts2").text("You lost!");
        }
        if(userScore == 5){
            $("#alerts2").text("You win the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true);
            $("#replay").show();
        }
        else if(aiScore == 5){
            $("#alerts2").text("You lost the game!");
            $("#rock").prop("disabled", true);
            $("#paper").prop("disabled", true);
            $("#scissors").prop("disabled", true); 
            $("#replay").show();
        }
    });
});