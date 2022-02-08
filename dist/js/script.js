function functionHam() {
    var x = document.getElementById("myLinks");


//ici on fait disparaitre le menu
    if (x.classList.contains("ham-classe")) {
        x.classList.remove("ham-classe");
        x.classList.add("no-display");
    } else {
        //ici on fait afficher le menu
        if (x.classList.contains("no-display")) {
            x.classList.remove("no-display");
        }
        x.classList.add("ham-classe");

    }
}