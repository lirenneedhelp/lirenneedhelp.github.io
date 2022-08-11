//Toggle Hamburger Menu
var navlinks = document.getElementsByClassName("nav-links")[0];  
  document.querySelector("#mobilenav").addEventListener("click",()=> {
    navlinks.classList.toggle("active");  // For mobile & tablet. If user click on hamburger menu
    // The nav menu links would appear

  });
  // Opening animation
  var animateTimer = null;

    var pos = 0; // This is for manipulation of any piece on the first move
    var pos2 = 0;// This is for manipulation of any piece on the second move
    var pos3 = 0;// This is for manipulation of any  piece on the third move
    var pos4 = 0;// This is for manipulation of any  piece on the forth move
    var pos5 = 0;// This is for manipulation of any  piece on the fifth move
    
    var firstPawn = document.getElementById("fifthwhitepawn"); // e-file white pawn
    var secondPawn = document.getElementById("forthpawn"); // d-file black pawn
    var blackQueen = document.getElementById("blackqueen"); // Black queen
    var boardSize = document.querySelector(".chessboard").offsetWidth; // Board width
    var rand4thmove;

    
    function callMove()
    {
       animateTimer = setInterval(move);
       rand4thmove = Math.floor(Math.random() * 3 + 1);
    }
    function move()
    {    
        if (pos == boardSize/8 * 2) // Check whether the piece has moved 2 squares up.Each square is boardSize / 8 width & height
        {
            move2(); // Continues the move order after the first move has been made
        }   
        else
        { 
           pos++;
           firstPawn.style.bottom = pos + "px"; // Move the piece upwards
        }
    }
    function move2()
    {
        if (pos2 == boardSize/8 * 2) 
        {
          move3();
        }
        else
        {
            pos2++;
            secondPawn.style.top =  pos2 + "px"; 
        }
    }
    function move3()
    {
      if (pos3 == boardSize/8)
      {
        // pos = pos2 = pos3 = 0;
        secondPawn.classList.add("hidepiece"); // Makes the piece disappear upon capturing
        move4();
      }
      else
      {
        pos3++
        firstPawn.style.bottom = pos + pos3 + "px";
        firstPawn.style.right = pos3 + "px";
       
      }

    }

    function move4()
    {
      if (pos4 == boardSize/8 * 3)
      {
        firstPawn.classList.add("hidepiece");// Makes the piece disappear upon capturing
        move5();
      }
      else
      {
        pos4++;
        blackQueen.style.top = pos4 + "px";

      }

    }

    function move5()
    {
      if (rand4thmove == 1) // Qa5 move
      {
        if (pos5 == boardSize / 8 * 3)
        {
          clearInterval(animateTimer);
          setTimeout(resetBoard,5000); // 5 sec timer before the board resets back to normal
        }
        else
        {
          pos5++;
          blackQueen.style.right = pos5 + "px";
        }

      }
      else if (rand4thmove == 2) //Qd6
      {
        if (pos5 == boardSize/ 8)
        {
          clearInterval(animateTimer);
          setTimeout(resetBoard,5000); // 5 sec timer before the board resets back to normal
        }
        else
        {
          pos5++;
          blackQueen.style.top = pos4-pos5 + "px";
        }
      }
      else if (rand4thmove == 3) //Qd8
      {
        if (pos5 == boardSize / 8 * 3)
        {
          clearInterval(animateTimer);
          setTimeout(resetBoard,5000); // 5 sec timer before the board resets back to normal
        }
        else
        {
          pos5++;
          blackQueen.style.top = pos4 - pos5 + "px";
        }
      }
      else
      {
        console.log("invalid_number");
      }
           
    }
    function resetBoard()
    {
      firstPawn.style.bottom = 0;
      firstPawn.style.right = 0;
      firstPawn.classList.remove("hidepiece");

      secondPawn.style.top = 0;
      secondPawn.classList.remove("hidepiece");

      blackQueen.style.top = 0;
      blackQueen.style.right = 0;
      blackQueen.style.bottom = 0;

      pos = pos2 = pos3 = pos4 = pos5 = 0;
      rand4thmove = 0;
    }

    document.getElementById("buttonscandi").style.color = "red";
    document.getElementById("buttonscandi").addEventListener("click",callMove);

  

  


