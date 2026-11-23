

let cadeau = [
    ['💌' , 
    `
    <div class="lettre">
    <h2>Mon coeur ♡</h2>

    <p>
        Mon cœur, je t'ai préparé ce calendrier afin que tu aies une case à ouvrir tous les jours, j'espère qu'il te plaira. J'ai essayé de faire de mon mieux pour qu'il puisse te correspondre. Je l'ai créé à la main (avec l'aide de mon amie ChatGPT, bien sûr).<br><br>Je voulais te créer quelque chose pour cette fin d'année, quelque chose fait par moi-même et qui pourrait te faire plaisir, alors j'espère que ça sera le cas (il faut bien que mes études servent à quelque chose😂😂).<br><br> Pourquoi un calendrier virtuel ? Parce que ça m'a semblé le bon compromis entre discrétion et le fait de pouvoir te faire plaisir quand même. J'espère que tu détestes pas les calendriers, vu que tu es pas trop Noël😂. Mais ça m'a fait tellement plaisir de te le faire et je voulais tout de même te faire quelque chose. Tu as une case à ouvrir tous les jours, les cases des jours suivants ne sont pas encore accessibles (il faut attendre !!🥰🥰).<br><br>Tu pourras notamment trouver dans ce calendrier des souvenirs de nous deux, des choses réalisées fait main, des cadeaux et plein d'autres choses qui ont un rapport avec nous deux… C'est pas grand-chose et les cadeaux n'ont pas une grande importance, mais j'espère que tu apprécieras tout de même d'ouvrir une case tous les jours. Maintenant à toi de découvrir toutes les cases 😘!
    </p>
    <p>
        Ton chéri qui t'aime et qui pense à toi
    </p>
    <p>
        PS : le calendrier est accessible que par toi, le lien est privé
    </p>

    <span class="bisou bisou1">💋</span>
    <span class="bisou bisou2">💋</span>
    <span class="bisou bisou3">💋</span>
    <span class="bisou bisou4">💋</span>
    <span class="coeur">💗</span>
    <p class="signature">
        Je t'aime ❤️
    </p>
    </div>`], [
    '📸',
    `
    <div class="polaroid">
        <a href="image/image1.jpg" download="Notre_première_photo"><img src="image/image1.jpg" alt="Notre souvenir"></a>

        <p>Notre toute première photo essemble ❤️</p>
    </div>
    `
    
    ], 
    ['🎵',
     `<div class="choix">
        <div id="haut">
            <h2>Lecteur de musique</h2>
        </div>
        <div class="musique">
            <iframe
                src="https://open.spotify.com/intl-fr/embed/track/5qaEfEh1AtSdrdrByCP7qR?si=bbdd342178944ab2"
                width="100%"
                height="152"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <button class="like" id="like">♡</button>
        </div>
        <div class="musique">
            <iframe
                src="https://open.spotify.com/intl-fr/embed/track/5qaEfEh1AtSdrdrByCP7qR?si=bbdd342178944ab2"
                width="100%"
                height="152"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <button class="like" id="like">♡</button>
        </div>
        <div class="musique">
            <iframe
                src="https://open.spotify.com/intl-fr/embed/track/5qaEfEh1AtSdrdrByCP7qR?si=bbdd342178944ab2"
                width="100%"
                height="152"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <button class="like" id="like">♡</button>
        </div>
        <div class="musique">
            <iframe
                src="https://open.spotify.com/intl-fr/embed/track/5qaEfEh1AtSdrdrByCP7qR?si=bbdd342178944ab2"
                width="100%"
                height="152"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <button class="like" id="like">♡</button>
        </div>
        <div class="musique">
            <iframe
                src="https://open.spotify.com/intl-fr/embed/track/5qaEfEh1AtSdrdrByCP7qR?si=bbdd342178944ab2"
                width="100%"
                height="152"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <button class="like" id="like">♡</button>
        </div>
        <div id="bas">
            <p>Playliste love</p>
            <a>Lien vers la plailist</a>
        <div>
    </div>`
    ]
];




let cal = document.getElementById("calendrier");

let fenetre = document.getElementById("fenetre");
let titre = document.getElementById("titre");
let contenu = document.getElementById("cadeau");
let fermer = document.getElementById("fermer");
let date = new Date();
let jour = date.getDate();
let mois = date.getMonth();

for (let i = 1; i <= 24; i++){
    let cases = document.createElement("div");
    let porte = document.createElement("div");
    porte.classList.add("porte");
    porte.textContent = i;
    cases.appendChild(porte);
    cases.classList.add("case");
    if (mois == 10 && jour >= i) {
        cases.classList.add("accesible")
        if (localStorage.getItem("case" + i) === "ouverte") {
            porte.classList.add("anim");
        }
    }
    else{
        cases.classList.add("verrouillee")
    }

    cases.addEventListener("click", function(){

        if(!cases.classList.contains("verrouillee")){   
            document.body.style.overflowY = "hidden";
            document.body.style.pointerEvents = "none"; 
            fenetre.style.pointerEvents = "auto";
            if (localStorage.getItem("case" + i) === "ouverte") {
                porte.classList.remove("anim");
            }      
            localStorage.setItem("case" + i, "ouverte");
            cases.classList.add("position");
            setTimeout(function(){
                porte.classList.add("anim");
            }, 1000);
            setTimeout(function(){
                fenetre.style.display = "flex";
                requestAnimationFrame(() => {
                fenetre.style.opacity = 1;

            });
            }, 3000);
            contenu.innerHTML = cadeau[i-1][1];
            titre.textContent = cadeau[i-1][0] + " Case " + i ;
            if (i == 3){
                document.querySelectorAll(".like").forEach(function(like) {
                like.addEventListener("click", function() {
                    like.textContent = like.textContent === "♡" ? "♥" : "♡";
                });
                });
                
            }
        }

        
    })
    fermer.addEventListener("click", function(){
    fenetre.style.opacity = 0;
    fenetre.style.display = "none";
    cases.classList.remove("position");
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto"; 
    })
    cal.appendChild(cases);
    

}

