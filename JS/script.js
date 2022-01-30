$(document).ready(function () {
    var ComPick = Math.floor(Math.random() * 4) + 1;
    var LockTheGame = false;

    console.log(" Computer pick " + ComPick);
    

    $(".btn-choice").on("click", function () {

        // Line below will prevent the user from changing the option after the game is done

        var UserPick = $(this).val();
        console.log(" you have chosen " + UserPick);

        $("#computer-pick").text(ComPick);

        // if the choice matches the computers pick:

        if (parseInt(UserPick) === ComPick) {
            $("#result").text(" Yup! You won! Refresh to play again!");

            LockTheGame = true;

        }
        // if the choice doesnt match:

        else {
            $("#result").text(" Nope! Refresh and try again!");
            LockTheGame = true;

        }
    
    });
});