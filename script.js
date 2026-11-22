

let cal = document.getElementById("calendrier");

let fenetre = document.getElementById("fenetre");
let titre = document.getElementById("titre");
let message = document.getElementById("message");
let fermer = document.getElementById("fermer");
let date = new Date();
let jour = date.getDate();
let mois = date.getMonth();

for (let i = 1; i <= 24; i++){
    let cases = document.createElement("div");
    cases.classList.add("case");
    if (mois == 10 && jour >= i) {
        cases.classList.add("accesible")
    }
    else{
        cases.classList.add("verrouillee")
    }

    cases.addEventListener("click", function(){
        if(!cases.classList.contains("verrouillee")){
            fenetre.style.display = "flex";
            requestAnimationFrame(() => {
                fenetre.style.opacity = 1;
                
            });
            titre.innerHTML = "Surptise numéro " + i;
        }

        
    })
    cases.textContent = i;
    cal.appendChild(cases);
    

}

fermer.addEventListener("click", function(){
    fenetre.style.opacity = 0;
    fenetre.style.display = "none";

})