function add_user()
{
    player_1 = document.getElementbyId("input_player1").value;
    player_2 = document.getElementbyId("input_player2").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}