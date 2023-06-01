    let favbutton = document.getElementById("favbutton").className;
    let favi = document.getElementById("favi").className;
    let hc = document.getElementsByClassName("hovercard");

    function addfav(hc){
      for(let i=1;i<hc.length;i++){
        let newFav = document.createElement("button");
        let newI = document.createElement("i");
        newI.className = favi;
        newFav.className = favbutton;
        newFav.appendChild(newI);
        hc[i].appendChild(newFav);
      }
    }
    addfav(hc);