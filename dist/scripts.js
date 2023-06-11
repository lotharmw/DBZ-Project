function slide(breed){
    var perso=document.getElementsByClassName("perso");
    console.log(perso);
    for (i=0;i<perso.length;i++){
        perso[i].classList.add("hidden");
        console.log(perso[i].classList);
    }

    // document.getElementsByName("perso").classList.remove("hidden")

    document.getElementById(breed).classList.remove("hidden");
    
   
}

