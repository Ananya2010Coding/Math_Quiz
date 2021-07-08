Player1_name = localStorage.getItem("player1_name");
Player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = Player1_name ;
document.getElementById("player_2_name").innerHTML = Player2_name ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_Q").innerHTML = "Question Turn :" +player1_name;
document.getElementById("player_ANS").innerHTML = "Answer Turn :" +player2_name;

function send(){
    getNumber1 = document.getElementById("no-1").value;
    getNumber2 = document.getElementById("no-2").value;
    actual_Q = parseInt(getNumber1) * parseInt(getNumber2);

    question = "Q: "+getNumber1+' X '+getNumber2;
    inputBox = "<br><br>Answer<input type='number' id='answer_input'>";
    buttonCHECK = "<br><br><button class='btn btn-warning' onclick='check()'>CHECK</button>";
    main_div = question + inputBox + buttonCHECK;

    document.getElementById("output").innerHTML = main_div;

    document.getElementById("no-1").value = "";
    document.getElementById("no-2").value = "";
}