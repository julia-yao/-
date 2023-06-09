    let cardFooter = document.getElementById("cardfooter").className;
    let cartButton = document.getElementById("cartbutton").className;
    let carti = document.getElementById("carti").className;
    
    function addCartBtn (hc){
    
    for(let i=1;i<hc.length;i++){
    let newcf = document.createElement("div");
    let newcb = document.createElement("button");
    let newci = document.createElement("i");

    newci.className = carti;
    newcb.appendChild(newci);
    newcb.innerHTML = newcb.innerHTML+" 放入購物車"; 
    newcb.className = cartButton;
    newcf.className = cardFooter;
    newcf.appendChild(newcb);

    hc[i].appendChild(newcf);
    }
  }

  addCartBtn(hc);
 