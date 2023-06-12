function disableAll(){
    let welcome = document.getElementById("welcome");
    let humans = document.getElementById("humans");
    let saiyan = document.getElementById("saiyan");
    let namekian = document.getElementById("namekian");
    let freezer = document.getElementById("freezer");

    welcome.style.display = "none";
    humans.style.display = "none";
    saiyan.style.display = "none";
    namekian.style.display = "none";
    freezer.style.display = "none";
}


function humans(){
    let x = document.getElementById("humans");
    if (x.style.display === "grid"){
        welcome.style.display = "flex";
        x.style.display = "none";
    }
    else{
        disableAll();
        x.style.display ="grid";
    }
}
function saiyan(){
    let x = document.getElementById("saiyan");
    if (x.style.display === "grid"){
        welcome.style.display = "flex";
        x.style.display = "none";
    }
    else{
        disableAll();
        x.style.display ="grid";
    }
}
function namekian(){
    let x = document.getElementById("namekian");
    if (x.style.display === "grid"){
        welcome.style.display = "flex";
        x.style.display = "none";
    }
    else{
        disableAll();;
        x.style.display ="grid";
    }
}
function freezer(){
    let x = document.getElementById("freezer");
    if (x.style.display === "grid"){
        welcome.style.display = "flex";
        x.style.display = "none";
    }
    else{
        disableAll();
        x.style.display ="grid";
    }
}



// function addActiveClass() {
//     var elements = document.getElementById("btn");
  
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].addEventListener("click", function() {
//         // Entferne "active" von allen Elementen
//         for (var j = 0; j < elements.length; j++) {
//           elements[j].classList.remove("active");
//         }
  
//         // Füge "active" zum aktuellen Element hinzu
//         this.classList.add("active");
//       });
//     }
//   }
