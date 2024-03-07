// Here is the Javascript code for the tic-tac-toe game
$(document).ready(function() // Here is where the code is ready to execute using jQuery once the html is fully loaded.
{
    // Here is the jQuery objects that referemce elements from the html code.
    const cells = $('[data-cell]'); //The cells variable represents all of the elements in the html code with the data-cell attribute.
    const status = $('#status'); //The status variable represents the id attribute of status in the html code
    const restartButton = $('#restart-btn'); //the restart button variable represents the id attribute of restart-btn in the html code
    const grid = $('#grid'); //The grid variable represents the id attribute of grid in the html code

    let Player = 'X'; //Here is the player variable
    let Board = ['', '', '', '', '', '', '', '', '']; //Here is the board variable that will hold 9 empty strings and each string is for one of the cells on the board
    let game_active = true;  //Here, is the variable that checks if the game is active or not.

    //Here is all of the possible move the players can make to win the game
    const winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ];

    //This event listener checks to see whenever the user clicks on a cell to update that cell with an x or an o and checks for a winner
    cells.on('click', function()
    {
        const cell = $(this);
        const indexCell = cell.index();

        if (Board[indexCell] === '' && game_active)
        {
            Board[indexCell] = Player;
            cell.text(Player);
            cell.addClass(Player);
            switchPlayer();
            checkWinner();
        }
    });

    // This event listener waits until a player clicks on the restart button and when the player does, the game gets reset.
    restartButton.on('click', function()
    {
        restartGame();

    });

    // Here this function lets players know whos turn it is
    function switchPlayer()
    {
        Player = Player === 'X' ? 'O' : 'X';
        status.text(`${Player}'s turn`);
    }

    // Here this function checks to see if there is one of the winning moves on the board and if there is displays the winner or a draw
    function checkWinner()
    {
        for (const combo of winningMoves)
        {
            const [a, b, c] = combo;
            if (Board[a] && Board[a] === Board[b] && Board[a] === Board[c])
            {
                game_active = false;
                highlightWinner(combo);
                toastr.success(`${Board[a]} wins!`);
                status.text(`${Board[a]} wins!`);
              
            }
        }

        if(!Board.includes('') && game_active)
        {
            game_active = false;
            toastr.info("It's a draw!");
            status.text("It's a draw!");
        }
    }

    // This function is used to add a winner class to which ever cell is the winning one
    function highlightWinner(combo)
    {
        for (const index of combo)
        {
            cells.eq(index).addClass('winner');
        }
    }

    //Here this function is used to reset the game and sets the player to x to start off
    function restartGame ()
    {
        Board = ['', '', '', '', '', '', '', '', ''];
        game_active = true;
        Player = 'X';
        status.text(`${Player}'s turn`);
        cells.text('');
        cells.removeClass('X O winner');
    }

    restartGame();  //Here is where we are starting the game and setting everything to the initial state. 

});

        