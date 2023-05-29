let favbutton = document.getElementById("favbutton").className;
    let favi = document.getElementById("favi").className;
    let newFav = document.createElement("button");
    let newI = document.createElement("i");
    let hc = document.getElementsByClassName("hovercard");

    function addfav(){
      newI.className = favi;
      newFav.className = favbutton;
      newFav.style.top = 12;
      newFav.style.right = 12;
      newFav.appendChild(newI);
      hc[1].appendChild(newFav);
    }
    
    addfav();