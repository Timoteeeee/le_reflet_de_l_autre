import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

// Initialize Kaplay with a larger canvas so the background appears bigger
const GAME_WIDTH = 192;
const GAME_HEIGHT = 108;

kaplay({
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scale: getScale(),
  letterbox: true, // garde le ratio propre
});

// load fonts
loadFont("comic", "fonts/font_comic.otf");
loadFont("journal", "fonts/OldNewspaperTypes.ttf");
loadFont("dogica", "fonts/dogicapixel.ttf");

// load maps
loadSprite('terrain_foot', 'assets/terrain_foot.png');
loadSprite('foret_1', 'assets/foret_1.png');
loadSprite('ville_1', 'assets/ville_1.png');
loadSprite('accueil', 'assets/fond_accueil.png');
loadSprite('garage', 'assets/garage.png');
loadSprite('prison', 'assets/prison.png');
loadSprite('hopital_couloir', 'assets/hopital_couloir.png');
loadSprite('hopital_chambre', 'assets/hopital_chambre.png');

// load interface
loadSprite('point_quete', 'assets/point_quete.png');

// load decors forêt
loadSprite('arbre_1', 'assets/arbre_1.png');
loadSprite('arbre_2', 'assets/arbre_2.png');
loadSprite('arbre_3', 'assets/arbre_3.png');
loadSprite('fleur_rouge', 'assets/fleur_rouge.png',{
    sliceX: 7,
    anims: {
        idle: {
            from: 0,
            to: 6,
            speed: 2,
            loop: true
        }
    }
});
loadSprite('fleur_blanche', 'assets/fleur_blanche.png',{
    sliceX: 7,
    anims: {
        idle: {
            from: 0,
            to: 6,
            speed: 2,
            loop: true
        }
    }
});
loadSprite('fleur_bleue', 'assets/fleur_bleue.png',{
    sliceX: 7,
    anims: {
        idle: {
            from: 0,
            to: 6,
            speed: 2,
            loop: true
        }
    }
});

// load decors terrain de foot
loadSprite('barriere_foot_gauche', 'assets/barriere_foot_gauche.png');
loadSprite('barriere_foot_droite', 'assets/barriere_foot_droite.png');
loadSprite('barriere_foot_haut', 'assets/barriere_foot_haut.png');
loadSprite('barriere_foot_bas', 'assets/barriere_foot_bas.png');
loadSprite('goal', 'assets/goal.png');
loadSprite('goal_anim', 'assets/goal_anim.png',{
    sliceX: 8,
    anims: {
        confettis: {
            from: 0,
            to: 7,
            speed: 10
        }
    }
})

// load decors ville
loadSprite('hopital_bat', 'assets/hopital_bat.png');
loadSprite('ecole_bat', 'assets/ecole_bat.png');
loadSprite('garage_bat', 'assets/garage_bat.png');
loadSprite('prison_bat', 'assets/prison_bat.png');

// load objets
loadSprite('ballon_foot', 'assets/ballon_foot.png',{
    sliceX: 13,
    anims: {
        bounce: {
            from: 1,
            to: 12,
            speed: 10
        }
    }
});
loadSprite('plante_1', 'assets/plante_en_pot_1.png');
loadSprite('boules_de_jonglage', 'assets/boules_de_jonglage.png');
loadSprite('velo', 'assets/velo.png',{
    sliceX: 3,
    anims: {
        roule: {
            from: 0,
            to: 2,
            speed: 10
        }
    }
});

// load decors garage
loadSprite('garage_boite_1', 'assets/garage_boite_1.png');
loadSprite('garage_boite_2', 'assets/garage_boite_2.png');
loadSprite('garage_meuble_1', 'assets/garage_meuble_1.png');
loadSprite('garage_meuble_2', 'assets/garage_meuble_2.png');
loadSprite('garage_meuble_3', 'assets/garage_meuble_3.png');
loadSprite('garage_marteau', 'assets/garage_marteau.png');
loadSprite('garage_tournevis', 'assets/garage_tournevis.png');
loadSprite('garage_balais', 'assets/garage_balais.png');
loadSprite('garage_cliquet', 'assets/garage_cliquet.png');
loadSprite('garage_crayon', 'assets/garage_crayon.png');
loadSprite('garage_cle', 'assets/garage_cle.png');
loadSprite('garage_double_metre', 'assets/garage_double_metre.png');

// load decors prison
loadSprite('prison_meuble_1', 'assets/prison_meuble_1.png');
loadSprite('prison_meuble_2', 'assets/prison_meuble_2.png');

// load decors hopital
loadSprite('hopital_layer', 'assets/hopital_layer.png');
loadSprite('hopital_porte', 'assets/hopital_porte.png');
loadSprite('hopital_accessoire', 'assets/hopital_accessoire.png');
loadSprite('hopital_chaise', 'assets/hopital_chaise.png');
loadSprite('hopital_lit', 'assets/hopital_lit.png');
loadSprite('hopital_meuble', 'assets/hopital_meuble.png');

// load sounds
loadSound('bruit_pas', 'sounds/bruits_pas.mp3');
loadSound('musique_jeu', 'sounds/musique_trompette_jeu_final.mp3');
loadSound('musique_foot', 'sounds/musique_foot.mp3');
loadSound('oiseau_son', 'sounds/oiseau_son.mp3');
loadSound('son_defaite', 'sounds/son_defaite.mp3');
loadSound('son_victoire', 'sounds/son_victoire.mp3');
loadSound('son_ballon', 'sounds/son_ballon.mp3');
loadSound('son_velo', 'sounds/velo.mp3');
loadSound('son_velo_arret', 'sounds/velo_arret.mp3');
loadSound('son_velo_casse', 'sounds/velo_casse.mp3');
loadSound('son_menu', 'sounds/son_menu.mp3');
loadSound('son_clavier', 'sounds/son_clavier.mp3');

// load personnages
loadSprite('elie_1', 'assets/elie_1.png',{
    sliceX: 8,
    sliceY: 4,
    anims: {
        walk_side: {
            from: 0,
            to: 7,
            speed: 10,
            loop: true,
        },
        idle_side: {
            from: 8,
            to: 9,
            speed: 2,
            loop: true,
        },
        idle_front: {
            from: 10,
            to: 11,
            speed: 2,
            loop: true,
        },
        walk_front: {
            from: 12,
            to: 17,
            speed: 6,
            loop: true
        },
        idle_behind: {
            from: 18,
            to: 19,
            speed: 2,
            loop: true
        },
        walk_behind: {
            from: 20,
            to: 25,
            speed: 6,
            loop: true
        },
        kick_side: {
            from: 26,
            to: 26,
            speed: 4
        },
        kick_front: {
            from: 27,
            to: 27,
            speed: 4
        },
        kick_behind: {
            from: 21,
            to: 21,
            speed: 4
        },
        velo: {
            from:28,
            to:28,
            speed: 4
        }
    }
});

loadSprite('elie_2', 'assets/elie_2.png',{
    sliceX: 8,
    sliceY: 4,
    anims: {
        walk_side: {
            from: 0,
            to: 7,
            speed: 10,
            loop: true,
        },
        idle_side: {
            from: 8,
            to: 9,
            speed: 2,
            loop: true,
        },
        idle_front: {
            from: 10,
            to: 11,
            speed: 2,
            loop: true,
        },
        walk_front: {
            from: 12,
            to: 17,
            speed: 6,
            loop: true
        },
        idle_behind: {
            from: 18,
            to: 19,
            speed: 2,
            loop: true
        },
        walk_behind: {
            from: 20,
            to: 25,
            speed: 6,
            loop: true
        },
        kick_side: {
            from: 26,
            to: 26,
            speed: 4
        },
        kick_front: {
            from: 27,
            to: 27,
            speed: 4
        },
        kick_behind: {
            from: 21,
            to: 21,
            speed: 4
        },
        velo: {
            from:28,
            to:28,
            speed: 4
        }
    }
});

loadSprite('mela', 'assets/mela.png', {
    sliceX: 5,
    sliceY:2,
    anims: {
        idle_front: {
            from: 0,
            to: 1,
            speed: 1.8,
            loop: true
        },
        jongle_front: {
            from: 5,
            to: 9,
            speed: 10,
            loop: true
        }
    }
});

loadSprite('melo', 'assets/melo.png', {
    sliceX: 2,
    anims: {
        idle_front: {
            from: 0,
            to: 1,
            speed: 1.82,
            loop: true
        }
    }
});

loadSprite('papa', 'assets/papa.png', {
    sliceX: 2,
    anims: {
        idle_front: {
            from: 0,
            to: 1,
            speed: 1.84,
            loop: true
        }
    }
});

loadSprite('oscar', 'assets/oscar.png', {
    sliceX: 8,
    sliceY: 4,
    anims: {
        walk_side: {
            from: 0,
            to: 7,
            speed: 10,
            loop: true,
        },
        idle_side: {
            from: 8,
            to: 9,
            speed: 2,
            loop: true,
        },
        idle_front: {
            from: 10,
            to: 11,
            speed: 2,
            loop: true,
        },
        walk_front: {
            from: 12,
            to: 17,
            speed: 6,
            loop: true
        },
        idle_behind: {
            from: 18,
            to: 19,
            speed: 2,
            loop: true
        },
        walk_behind: {
            from: 20,
            to: 25,
            speed: 6,
            loop: true
        },
        kick_side: {
            from: 26,
            to: 26,
            speed: 4
        },
        kick_front: {
            from: 27,
            to: 27,
            speed: 4
        },
        kick_behind: {
            from: 21,
            to: 21,
            speed: 4
        }
    }
});

// variables
let fin = false
let jeu_lance = false
let apparence = "elie_1"
let pseudo = ""
let tuto_ballon = false
let near = false
let dialogueStage = 0
let currentSpeaker = null
let currentTag = null
let currentMessages = []
let zone_arrivee = null
let nearball = false
let position_velo_x = null
let position_velo_y = null
let velo_monte = false
let tuto_inventaire = false
let score_foot = [0, 0]
let bool_pas = false
let bool_velo = false
let typing = false
let stopLoop = null
const pas = play("bruit_pas", {
        volume: 0.15,
        loop: true
})
pas.stop()
const son_velo = play("son_velo", {
        volume: 1,
        loop: true
})
son_velo.stop()
const son_velo_casse = play("son_velo_casse", {
        volume: 0.9,
        loop: true
})
son_velo_casse.stop()
const son_velo_arret = play("son_velo_arret", {
        volume: 1,
        loop: false
})
son_velo_arret.stop()
const son_ballon = play("son_ballon", {
    volume: 1
})
son_ballon.stop()
const musique_jeu = play("musique_jeu", {
    volume: 0.75,
    loop: true
})
const musique_foot = play("musique_foot", {
    volume: 0.3,
    loop: true
})
musique_jeu.stop()
musique_foot.stop()
const son_menu = play("son_menu", {
    volume: 0.4,
    loop: false
})
son_menu.stop()
const son_clavier = play("son_clavier", {
    volume: 0.5,
    loop: true
})
son_clavier.stop()
const overlay = document.getElementById("overlay");
const messageBox = document.getElementById("message");
let tuto_deplacement = false
let savoir_velo = false
let velo
let animation_check = false
let velo_location = "foret_1"
let promptCallback = null
let fadeTimeout;
let hideTimeout;
let partie_foot_faite = false
let currentMessages_inv_1 = null
let currentMessages_inv_2 = null

// garage
let cle_compteur = false
let marteau_compteur = false
let cliquet_compteur = false
let double_metre_compteur = false
let crayon_compteur = false
let tournevis_compteur = false
let compteur_garage = 0

// état des outils du garage
let marteau_present = true
let tournevis_present = true
let crayon_present = true
let cliquet_present = true
let double_metre_present = true
let cle_present = true

// INVENTAIRE
let inventoryOpen = false;

const inventory = document.getElementById("inventory");

document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === "i"){

        inventoryOpen = !inventoryOpen;

        if(inventoryOpen){
            inventory.style.display = "block";
        }
        else{
            inventory.style.display = "none";
        }
    }
});

const slots = document.querySelectorAll(".slot");

let currentSlot = 0;

function addItem(spritePath, objet){
    if(!tuto_inventaire){
        message("Appuyer sur [I] pour afficher votre inventaire", 1)
    }
    tuto_inventaire = true

    const img = document.createElement("img");
    img.src = spritePath;
    slots[currentSlot].appendChild(img);
    texte_inventaire(`Vous avez récupéré ${objet}`)
    currentSlot++;
}

function removeItemBySprite(spritePath, objet){

    for(let i = 0; i < slots.length; i++){

        const img = slots[i].querySelector("img");

        if(img && img.src.includes(spritePath)){

            slots[i].innerHTML = "";
            currentSlot--;
            texte_inventaire(`Vous avez abandonné ${objet}`)
            return; // stop après suppression
        }
    }
}

function texte_inventaire(texte){
    // supprime ancien texte éventuel
    if (currentMessages_inv_1) {
        destroy(currentMessages_inv_1)
    }

    if (currentMessages_inv_2) {
        destroy(currentMessages_inv_2)
    }
    const message_inventaire_1 = add([text(texte, {
        font: "journal"
    }),
    pos(3, 3),
    scale(0.10),
    color(BLACK),
    opacity(1)
    ]);
    message_inventaire_1.z = 500
    const message_inventaire_2 = add([text(texte, {
        font: "journal"
    }),
    pos(message_inventaire_1.pos.x + 0.3, message_inventaire_1.pos.y - 0.3 ),
    scale(0.10),
    color(WHITE),
    opacity(1)
    ]);
    message_inventaire_2.z = 500
    currentMessages_inv_1 = message_inventaire_1
    currentMessages_inv_2 = message_inventaire_2
    wait(2, () => {
        let elapsed = 0;
        const fadeDuration = 1.5;

        onUpdate(() => {
            elapsed += dt();
            const t = Math.min(elapsed / fadeDuration, 1);
            message_inventaire_1.opacity = 1 - t;
            message_inventaire_2.opacity = 1 - t;

            if(t >= 1){
                destroy(message_inventaire_1);
                destroy(message_inventaire_2);
            }

            if (currentMessages_inv_1 === message_inventaire_1) {
                currentMessages_inv_1 = null
            }

            if (currentMessages_inv_2 === message_inventaire_2) {
                currentMessages_inv_2 = null
            }
        });
    });
}

// INITIALISATION FONCTIONS
// arreter musique
function fadeOutMusic(music, duration) {

    const startVolume = music.volume

    tween(
        startVolume,
        0,
        duration,
        (v) => {
            music.volume = v
        }
    )

    wait(duration, () => {
        music.stop()
    })
}
// son marcher
function playFootsteps() {
    if (!bool_pas) {
        pas.play()
        bool_pas = true
    }
}
function isAnyMovementKeyDown() {
    return isKeyDown("w") || isKeyDown("a") || isKeyDown("s") || isKeyDown("d") || isKeyDown("left") || isKeyDown("up") || isKeyDown("right") || isKeyDown("down");
}
// taille écran
function getScale() {
  return Math.floor(Math.min(
    window.innerWidth / GAME_WIDTH,
    window.innerHeight / GAME_HEIGHT
  ));
}

// prompt
function showPrompt(callback) {
    // overlay visible
    messageBox.textContent = "";
    overlay.style.opacity = "1";
    overlay.style.display = "flex";
    overlay.style.pointerEvents = "auto";
  
    // prompt visible
    promptBox.style.display = "block";

    promptCallback = callback;
}
function hidePrompt() {
    promptBox.style.display = "none";
    overlay.style.transition = "none";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
}
document.getElementById("okButton").addEventListener("click", () => {

    const value = document.getElementById("playerName").value.trim();

    if (value !== "") {

        hidePrompt();

        window.focus();

        const canvas = document.querySelector("canvas");

        if (canvas) {
            canvas.focus();
        }

        if (promptCallback) {
            promptCallback(value);
        }
    }
});

// numeros aleatoires
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function destroyCurrentMessages() {
    currentMessages.forEach((m) => destroy(m))
    currentMessages = []
}

// afficher un message en grand
function message(texte, vitesse = 1) {

    // annule anciennes animations
    clearTimeout(fadeTimeout);
    clearTimeout(hideTimeout);

    // reset
    overlay.style.transition = "none";
    overlay.style.opacity = "0";
    overlay.style.display = "flex";

    // change texte
    messageBox.textContent = texte;

    // force repaint
    overlay.offsetHeight;

    // fade in
    overlay.style.transition = `${1.5 / vitesse}s linear`;
    overlay.style.opacity = "1";

    // fade out
    fadeTimeout = setTimeout(() => {

        overlay.style.transition = `${3 / vitesse}s linear`;
        overlay.style.opacity = "0";

        // hide final
        hideTimeout = setTimeout(() => {
            overlay.style.display = "none";
        }, (3 / vitesse) * 1000);

    }, (3 / vitesse) * 1000);
}

// afficher ligne dialogue
function ftc_text_near(player, msg, speaker, tag) {
    destroyCurrentMessages()
    let currentText = "";
    let index = 0;
    if(msg === "\\[E\\] intéragir" || msg === "\\[ESPACE\\] en poussant pour tirer" || msg === "\\[E\\] prendre" || msg === "\\[E\\] entrer") {
        currentText = msg;
    }

    const message1 = add([text(currentText, {
                font: "journal"
            }),
            pos(speaker.pos.x - 0.2, speaker.pos.y - 19.7),
            anchor("center"),
            color(BLACK),
            scale(0.09),
            animate({relative: true})])
    const message2 = add([text(currentText, {
                font: "journal"
            }),
            pos(speaker.pos.x, speaker.pos.y - 20),
            anchor("center"),
            color(WHITE),
            scale(0.09),
            animate({relative: true})])
    
    message1.z = 200
    message2.z = 200
// animation texte interaction
    if(msg === "\\[E\\] intéragir" || msg === "\\[ESPACE\\] en poussant pour tirer" || msg === "\\[E\\] prendre" || msg === "\\[E\\] entrer") {
        message1.animate("pos", [vec2(0,0), vec2(0,-1.7)], {
            duration: 0.8,
            direction: "ping-pong",
            loops: Infinity,
        });
        message2.animate("pos", [vec2(0,0), vec2(0,-1.7)], {
            duration: 0.8,
            direction: "ping-pong",
            loops: Infinity,
        });
        message1.animate("opacity", [1,0.3], {
            duration: 1.6,
            loops: Infinity
        });
        message2.animate("opacity", [1,0.3], {
            duration: 1.6,
            loops: Infinity
        });
    }

    currentMessages = [message1, message2]
    near = true
    currentSpeaker = speaker
    currentTag = tag

// animation texte dialogue
    if(msg != "\\[E\\] intéragir" && msg != "\\[ESPACE\\] en poussant pour tirer" && msg != "\\[E\\] prendre" && msg != "\\[E\\] entrer") {
        typing = true

        son_clavier.play()

        if(stopLoop) {
            stopLoop.cancel()
            stopLoop = null
        }
            
        stopLoop = loop(0.03, () => {
            if (index < msg.length) {
                onKeyPress('e', () => {
                    if(typing){
                        currentText = msg;
                        message1.text = msg;
                        message2.text = msg;
                        index = msg.length;                     
                    }
                })
                currentText += msg[index];
                message1.text = currentText;
                message2.text = currentText;
                index++;
            } else {
                son_clavier.stop()
                typing = false
                stopLoop.cancel()
                stopLoop = null
                return
            }
        })
        

    }
}

// initialisation quetes
let point_quete_boule = true
let quete_boule = false
let quete_boule_1 = false
let quete_boule_2 = false
let quete_boule_fin = false
let partie_foot = false
let cadeau_1 = false
let velo_garage = false
let quete_velo_repare = false

scene("accueil",()=>{
    add([
        sprite('accueil'),
    ]);

    const message1 = add([text("Appuyer sur 'ESPACE' pour commencer", {
        font: "journal"
        }),
        pos(center()),
        anchor("center"),
        color(BLACK),
        scale(0.15),
    ])
    message1.pos.y = GAME_HEIGHT/11*10
    const message2 = add([text("Appuyer sur 'ESPACE' pour commencer", {
        font: "journal"
        }),
        pos(message1.pos.x + 0.5, message1.pos.y - 0.5),
        anchor("center"),
        color(WHITE),
        scale(0.15),
    ])

    onKeyPress("space", () => {
        if(!jeu_lance){
            jeu_lance = true
            destroy(message1)
            destroy(message2)
            musique_jeu.play()
            message("Un jeu de Timoté Sarrasin", 1)
            wait(7, () => {
                message("Imaginé par Timoté Sarrasin", 1)
                wait(7, () => {
                    message("Réalisé par Timoté Sarrasin", 1)
                    wait(7, () => {
                        message("Introduction écrite par Timoté Sarrasin", 1)
                        wait(7, () => {
                            message("Timoté Sarrasin présente", 1)
                            wait(7, () => {
                                message("LE REFLET DE L'AUTRE", 0.8)
                                fadeOutMusic(musique_jeu, 10)
                                wait(10, () => {
                                    go("choix")
                                })
                            })
                        })
                    })
                })
            })
        }
    })
})

scene("choix",()=>{
    add([
        sprite('accueil'),
    ]);
    // fond noir
    const fond = add([
        rect(width(), height()),
        pos(0, 0),
        color(BLACK),
        opacity(0),
        animate(),
        fixed(),
        z(495),
    ]);

    // création messages
    const message1 = add([text("Choisir une apparence:", {
        font: "journal"
    }),
    pos(GAME_WIDTH/2, 20),
    scale(0.15),
    anchor("center"),
    color(BLACK),
    opacity(0),
    animate()
    ]);
    message1.z = 500
    const message2 = add([text("Choisir une apparence:", {
        font: "journal"
    }),
    pos(message1.pos.x + 0.3, message1.pos.y - 0.3 ),
    scale(0.15),
    anchor("center"),
    color(WHITE),
    opacity(0),
    animate()
    ]);
    message2.z = 500

    const message3 = add([text("Utiliser \\[A\\]\\[D\\] pour choisir et \\[E\\] pour confirmer", {
        font: "journal"
    }),
    pos(GAME_WIDTH/2, 94),
    scale(0.12),
    anchor("center"),
    color(BLACK),
    opacity(0),
    animate()
    ]);
    message3.z = 500
    const message4 = add([text("Utiliser \\[A\\]\\[D\\] pour choisir et \\[E\\] pour confirmer", {
        font: "journal"
    }),
    pos(message3.pos.x + 0.3, message3.pos.y - 0.3 ),
    scale(0.12),
    anchor("center"),
    color(WHITE),
    opacity(0),
    animate()
    ]);
    message4.z = 500

    // skins
    const skin_fille = add([
        sprite("elie_1"),
        z(505),
        anchor("center"),
        opacity(0),
        scale(2),
        pos(GAME_WIDTH/3, GAME_HEIGHT/2)
    ])
    skin_fille.play("idle_front")

    const skin_garcon = add([
        sprite("elie_2"),
        z(505),
        anchor("center"),
        opacity(0),
        scale(2),
        pos(GAME_WIDTH/3*2, GAME_HEIGHT/2)
    ])
    skin_garcon.play("idle_front")

    // fade in
    tween(0,1,1.5/1, (val) => message1.opacity = val, easings.linear);
    tween(0,1,1.5/1, (val) => message2.opacity = val, easings.linear);
    wait(1.5,()=>{
        tween(0,1,1.5/1, (val) => skin_fille.opacity = val, easings.linear);
        tween(0,1,1.5/1, (val) => skin_garcon.opacity = val, easings.linear);
    })
    wait(3,()=>{
        tween(0,0.7,2/1, (val) => message3.opacity = val, easings.linear);
        tween(0,0.7,2/1, (val) => message4.opacity = val, easings.linear);
    })
    tween(0,0.5,1.5/1, (val) => fond.opacity = val, easings.linear);

    // choisir
    onKeyPress("a", () => {
        son_menu.play()
        skin_fille.scaleTo(2.3)
        skin_garcon.scaleTo(1.8)
        skin_garcon.opacity = 0.5
        skin_fille.opacity = 1
        apparence = "elie_1"
    })

    onKeyPress("d", () => {
        son_menu.play()
        skin_fille.scaleTo(1.8)
        skin_garcon.scaleTo(2.3)
        skin_fille.opacity = 0.5
        skin_garcon.opacity = 1
        apparence = "elie_2"
    })

    onKeyPress("e", () => {
        son_menu.play()
        if(apparence != ""){
            go("foret_1")
        }
    })
})

scene("foret_1",()=>{
    add([
        sprite('foret_1'),
    ]);

    const bruit_fond = play("oiseau_son", {
        volume: 1,
        loop: true
    })

    // message tuto
    if(!tuto_deplacement){
        message("Utiliser [W][A][S][D] pour vous déplacer", 1)
        tuto_deplacement = true
    }

    
// INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(50,50),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    if(zone_arrivee === "gauche"){
        ELIE.pos.x = 8
        ELIE.pos.y = 65
    }

    if(zone_arrivee === "droite"){
        ELIE.pos.x = 186
        ELIE.pos.y = 74
    }

    ELIE.play("idle_side")

    if(velo_monte){
        velo_location = "foret_1"
        ELIE.play("velo")
        ELIE.velo_utilise = add([
            sprite("velo"),
            pos(ELIE.pos.x, ELIE.pos.y + 11),
            body(),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 10)
            }),
            "velo"
        ]);
        velo_monte = true
    }

// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown()) {
            pas.stop()
            son_velo.stop()
            son_velo_casse.stop()

            bool_pas = false
            bool_velo = false
        }

        if(velo_monte) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTIONS
    ELIE.onCollide("mela", (mela) => {
        if (!near) {
            if(point_quete_boule){
                point_quete.opacity = 0
            }
            ftc_text_near(ELIE, "\\[E\\] intéragir", mela, "mela")
            dialogueStage = 1
        }
    })

    ELIE.onCollide("melo", (melo) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", melo, "melo")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("mela", () => {
        destroyCurrentMessages()
        if(point_quete_boule){
                point_quete.opacity = 1
            }
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ELIE.onCollideEnd("melo", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ELIE.onCollide("zone_gauche", (zone_gauche) => {
        zone_arrivee = "droite",
        pas.stop(),
        bruit_fond.stop(),
        go("terrain_foot")
    })

    ELIE.onCollide("zone_droite", (zone_droite) => {
        if(velo_monte){
            zone_arrivee = "gauche",
            pas.stop(),
            bruit_fond.stop(),
            go("ville_1")
        }
        else{
            message("Il est plus prudent d'avoir un vélo pour se déplacer en ville", 1)
        }
    })

    ELIE.onCollide("boules_de_jonglage", (boules_de_jonglage) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] prendre", boules_de_jonglage, "boules_de_jonglage")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("boules_de_jonglage", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ELIE.onCollide("velo", (velo) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", velo, "velo")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("velo", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    onKeyPress("e", () => {
        // à pied
        if(typing){return}
        if(near){
            son_menu.play()
        }
        if(!velo_monte){
            // prendre boules
            if (near && dialogueStage === 1 && currentSpeaker === boules_de_jonglage) {
                destroy(boules_de_jonglage)
                quete_boule = true
                addItem("assets/boules_de_jonglage.png", "'boules de jonglage'")
                return
            }

            //monter sur le velo
            if (near && dialogueStage === 1 && currentSpeaker === velo && !savoir_velo) {
                message("Ce n'est pas votre vélo",1)
                return
            }

            if (near && dialogueStage === 1 && currentSpeaker === velo && savoir_velo) {
                destroy(velo)
                ELIE.play("velo")
                ELIE.velo_utilise = add([
                    sprite("velo"),
                    pos(ELIE.pos.x, ELIE.pos.y + 11),
                    body(),
                    anchor("bot"),
                    area({
                        shape: new Rect(vec2(0, 0), 20, 10)
                    }),
                    "velo"
                ]);
                velo_monte = true
                return
            }
        
            // dialogues mela
            if (near && dialogueStage === 1 && currentSpeaker === MELA && !quete_boule) {
                ftc_text_near(ELIE, "Salut ! Je m'appelle Mela.\nTu pourrais me rendre \nun service s'il te plaît ?", currentSpeaker, currentTag)
                dialogueStage = 2
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === MELA && !quete_boule) {
                ftc_text_near(ELIE, "Tu parles pas ? Ok, c'est cool. \nSi tu veux bien, tu m'apporterais les \nboules de jonglage que j'ai oubliées \nde l'autre côté de la forêt ? Merci !", currentSpeaker, currentTag)
                dialogueStage = 3
                point_quete_boule = false
                return
            }
            if (near && dialogueStage === 3 && currentSpeaker === MELA && !quete_boule) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", MELA, "mela")
                dialogueStage = 1
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === MELA  && quete_boule) {
                ftc_text_near(ELIE, "Merci ! J'adore jongler. \nJ'ai rien pour te remercier, mais \ntu peux aller voir mon grand frère, \nil te donnera un jouet !", currentSpeaker, currentTag)
                removeItemBySprite("assets/boules_de_jonglage.png", "'boules de jonglage'");
                quete_boule_1 = true
                point_quete_boule = false
                dialogueStage = 2
                if (MELA.curAnim() != "jongle_front") {
                    destroy(boules_de_jonglage)
                    destroy(point_quete)
                    MELA.play("jongle_front")
                }
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === MELA  && quete_boule) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", MELA, "mela")
                dialogueStage = 1
            }

            // dialogues melo
            if (near && dialogueStage === 1 && currentSpeaker === MELO && !quete_boule_1) {
                let num = getRandomInt(2) 
                if (num === 0) {
                    ftc_text_near(ELIE, "Je t'ai rien demandé.", currentSpeaker, currentTag)
                }

                if (num === 1) {
                    ftc_text_near(ELIE, "Regarde ailleurs.", currentSpeaker, currentTag)
                }
                return
            }
            
            if (near && dialogueStage === 1 && currentSpeaker === MELO && quete_boule_1 && !partie_foot) {
                ftc_text_near(ELIE, "T'as aidé ma soeur. C'est cool.", currentSpeaker, currentTag)
                dialogueStage = 2
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === MELO && quete_boule_1 && !partie_foot) {
                ftc_text_near(ELIE, "Pourquoi tu me regardes comme ça ? \nTu veux ma photo ?", currentSpeaker, currentTag)
                dialogueStage = 3
                return
            }
            if (near && dialogueStage === 3 && currentSpeaker === MELO && quete_boule_1 && !partie_foot) {
                ftc_text_near(ELIE, "Elle a encore promis que je donnerais un jouet ? \nBon... si t'amènes ce ballon à mon pote, \npeut-être que je t'en donne un.", currentSpeaker, currentTag)
                dialogueStage = 4
                if(!quete_boule_2){
                    addItem("assets/ballon_foot_item.png", "'ballon de foot'")
                }
                quete_boule_2 = true
                return
            }
            if (near && dialogueStage === 4 && currentSpeaker === MELO && quete_boule_1 && !partie_foot) {
                ftc_text_near(ELIE, "Il est au terrain de foot, à l'ouest.", currentSpeaker, currentTag)
                dialogueStage = 5
                return
            }
            if (near && dialogueStage === 5 && currentSpeaker === MELO && quete_boule_1 && !partie_foot) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", MELO, "melo")
                dialogueStage = 1
            }
            if (near && dialogueStage === 1 && currentSpeaker === MELO && quete_boule_1 && partie_foot && !partie_foot_faite) {
                ftc_text_near(ELIE, "J'suis sûr que t'arrives pas\nà battre Oscar.", currentSpeaker, currentTag)
                dialogueStage = 2
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === MELO && quete_boule_1 && partie_foot && !partie_foot_faite) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", MELO, "melo")
                dialogueStage = 1
            }
            if (near && dialogueStage === 1 && currentSpeaker === MELO && partie_foot_faite && !cadeau_1) {
                ftc_text_near(ELIE, "Ahah, t'as la tête de quelqu'un\nqui vient de jouer contre Oscar.", currentSpeaker, currentTag)
                dialogueStage = 2
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === MELO && partie_foot_faite && !cadeau_1) {
                ftc_text_near(ELIE, "Je tiens mes promesses, tiens.", currentSpeaker, currentTag)
                cadeau_1 = true
                dialogueStage = 3
                return
            }
            if (near && dialogueStage === 3 && currentSpeaker === MELO && partie_foot_faite && cadeau_1) {
                ftc_text_near(ELIE, "Ah, au fait. Mon vélo fait un bruit bizarre.", currentSpeaker, currentTag)
                dialogueStage = 4
                return
            }
            if (near && dialogueStage === 4 && currentSpeaker === MELO && partie_foot_faite && cadeau_1) {
                ftc_text_near(ELIE, "Ton père est mécano c'est ça ?\nTu peux aller lui montrer ma bécane ?", currentSpeaker, currentTag)
                savoir_velo = true
                dialogueStage = 5
                return
            }
            if (near && dialogueStage === 5 && currentSpeaker === MELO && partie_foot_faite && cadeau_1) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", MELO, "melo")
                dialogueStage = 1
            }
        }

        // descendre du velo
        if(velo_monte){
            destroy(ELIE.velo_utilise)
            ELIE.play("idle_side")
            velo = add([
                pos(ELIE.pos.x,ELIE.pos.y),
                sprite('velo'),
                body({ isStatic: true}),
                anchor("bot"),
                area({
                    shape: new Rect(vec2(0, 0), 20, 3)
                }),
                'velo'
            ])
            position_velo_x = velo.pos.x
            position_velo_y = velo.pos.y
            velo.z = velo.pos.y
            velo_monte = false
        }
    })

// INITIALISATION DECORS

// changement zones
    const zone_gauche = add([
        rect(1, 30),
        pos(0, 50),
        "zone_gauche",
        area(),
        opacity(0)
    ]);

    const zone_droite = add([
        rect(1, 30),
        pos(191, 60),
        "zone_droite",
        area(),
        opacity(0)
    ]);

// objets amovibles   
    // boules de jonglage
    const boules_de_jonglage = add([
        pos(167,87),
        sprite('boules_de_jonglage'),
        body(),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 12, 7)
        }),
        'boules_de_jonglage'
    ])

    boules_de_jonglage.onUpdate(() => {
        boules_de_jonglage.z = boules_de_jonglage.pos.y
    })

    if(quete_boule){
        destroy(boules_de_jonglage)
    }

    // velo
    if(!velo_monte && velo_location === "foret_1"){
        velo = add([
            pos(35,45),
            sprite('velo'),
            body({ isStatic: true}),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 3)
            }),
            'velo'
        ])
        if(position_velo_x){
            velo.pos.x = position_velo_x
            velo.pos.y = position_velo_y
        }
        velo.z = velo.pos.y
        velo_location = "foret_1"
    }

// arbres et fleurs
    const arbre_1 = add([
        pos(34,47),
        sprite('arbre_1'),
        body({ isStatic: true }),
        anchor("bot"),
        area({
            shape: new Rect(vec2(-4, 0), 21, 4)
        }),
        'arbre_1'
    ])
    arbre_1.z = arbre_1.pos.y

    const arbre_2 = add([
        pos(100,55),
        sprite('arbre_2'),
        body({ isStatic: true }),
        anchor("bot"),
        area({
            shape: new Rect(vec2(-4, 0), 21, 6)
        }),
        'arbre_2'
    ])
    arbre_2.z = arbre_2.pos.y

    const arbre_3 = add([
        pos(150,100),
        sprite('arbre_3'),
        body({ isStatic: true }),
        anchor("bot"),
        area({
            shape: new Rect(vec2(-4, 0), 21, 8)
        }),
        'arbre_3'
    ])
    arbre_3.z = arbre_3.pos.y

    const fleur_rouge_1 = add([
        pos(25,39),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_1.z = fleur_rouge_1.pos.y
    
    fleur_rouge_1.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_2 = add([
        pos(17,41),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_2.z = fleur_rouge_2.pos.y
    
    fleur_rouge_2.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_3 = add([
        pos(21,38),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_3.z = fleur_rouge_3.pos.y
    
    fleur_rouge_3.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_1 = add([
        pos(30,50),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_1.z = fleur_blanche_1.pos.y
    
    fleur_blanche_1.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_2 = add([
        pos(33,52),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_2.z = fleur_blanche_2.pos.y
    
    fleur_blanche_2.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_3 = add([
        pos(39,43),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_3.z = fleur_blanche_3.pos.y
    
    fleur_blanche_3.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_1 = add([
        pos(50,35),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_1.z = fleur_bleue_1.pos.y
    
    fleur_bleue_1.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_2 = add([
        pos(52,32),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_2.z = fleur_bleue_2.pos.y
    
    fleur_bleue_2.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_3 = add([
        pos(57,36),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_3.z = fleur_bleue_3.pos.y
    
    fleur_bleue_3.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_4 = add([
        pos(5,100),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_4.z = fleur_rouge_4.pos.y
    
    fleur_rouge_4.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_5 = add([
        pos(9,103),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_5.z = fleur_rouge_5.pos.y
    
    fleur_rouge_5.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_6 = add([
        pos(12,99),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_6.z = fleur_rouge_6.pos.y
    
    fleur_rouge_6.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_7 = add([
        pos(20,96),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_7.z = fleur_rouge_7.pos.y
    
    fleur_rouge_7.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_8 = add([
        pos(36,80),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_8.z = fleur_rouge_8.pos.y
    
    fleur_rouge_8.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_9 = add([
        pos(88,90),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_9.z = fleur_rouge_9.pos.y
    
    fleur_rouge_9.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_rouge_10 = add([
        pos(162,12),
        sprite('fleur_rouge'),
        area(),
        anchor("bot")
    ])
    fleur_rouge_10.z = fleur_rouge_10.pos.y
    
    fleur_rouge_10.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_4 = add([
        pos(90,93),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_4.z = fleur_blanche_4.pos.y
    
    fleur_blanche_4.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_5 = add([
        pos(85,91),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_5.z = fleur_blanche_5.pos.y
    
    fleur_blanche_5.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_6 = add([
        pos(96,92),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_6.z = fleur_blanche_6.pos.y
    
    fleur_blanche_6.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_7 = add([
        pos(60,99),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_7.z = fleur_blanche_7.pos.y
    
    fleur_blanche_7.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_8 = add([
        pos(46,102),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_8.z = fleur_blanche_8.pos.y
    
    fleur_blanche_8.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_9 = add([
        pos(172,102),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_9.z = fleur_blanche_9.pos.y
    
    fleur_blanche_9.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_10 = add([
        pos(68,60),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_10.z = fleur_blanche_10.pos.y
    
    fleur_blanche_10.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_4 = add([
        pos(37,93),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_4.z = fleur_bleue_4.pos.y
    
    fleur_bleue_4.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_5 = add([
        pos(65,40),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_5.z = fleur_bleue_5.pos.y
    
    fleur_bleue_5.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_6 = add([
        pos(18,89),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_6.z = fleur_bleue_6.pos.y
    
    fleur_bleue_6.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_7 = add([
        pos(155,21),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_7.z = fleur_bleue_7.pos.y
    
    fleur_bleue_7.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_8 = add([
        pos(150,15),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_8.z = fleur_bleue_8.pos.y
    
    fleur_bleue_8.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_9 = add([
        pos(125,80),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_9.z = fleur_bleue_9.pos.y
    
    fleur_bleue_9.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_bleue_10 = add([
        pos(178,100),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_10.z = fleur_bleue_10.pos.y
    
    fleur_bleue_10.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

//personnages
    const MELA = add([
        sprite('mela'),
        pos(40,100),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 7, 3)
        }),
        body({ isStatic: true }),
        'mela'
    ]);

    const point_quete = MELA.add([
        sprite('point_quete'),
        pos(-1.5, -25),
        scale(0.2),
        animate({relative: true})
    ])

    if(!point_quete_boule){
        point_quete.opacity = 0
    }

    point_quete.animate("pos", [vec2(0,0), vec2(0,-1.7)], {
            duration: 0.8,
            direction: "ping-pong",
            loops: Infinity,
    });

    MELA.z = MELA.pos.y
    if(!quete_boule_1){
        MELA.play("idle_front")
    }
    if(quete_boule_1){
        MELA.play("jongle_front")
    }
    MELA.onUpdate(() => {
        if(MELA.pos.x > ELIE.pos.x && MELA.curAnim() != "jongle_front"){
            MELA.flipX = true
        } else {
            MELA.flipX = false
        }
    })

    const MELO = add([
        sprite('melo'),
        pos(130,25),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 6, 3)
        }),
        body({ isStatic: true }),
        'melo'
    ]);
    MELO.z = MELO.pos.y
    MELO.play("idle_front")
    MELO.onUpdate(() => {
        if(MELO.pos.x > ELIE.pos.x){
            MELO.flipX = true
        } else {
            MELO.flipX = false
        }
    })

})

scene("terrain_foot",()=>{
    add([
        sprite('terrain_foot'),
    ]);

    score_foot[0] = 0
    score_foot[1] = 0

// INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(50,50),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);
    if(zone_arrivee === "droite"){
        ELIE.pos.x = 180
        ELIE.pos.y = 21
    }

    if(zone_arrivee === "partie"){
        ELIE.pos.x = 60
        ELIE.pos.y = 60
    }

    ELIE.play("idle_side")

    if(velo_monte){
        velo = add([
            pos(180,16),
            sprite('velo'),
            body({ isStatic: true}),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 3)
            }),
            'velo'
        ])
        velo.flipX = true
        velo.z = velo.pos.y
        son_velo.stop()
        son_velo_casse.stop()
    }

// mouvements
    function bouger_droite() {

        ELIE.move(25, 0);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = true;
            ELIE.play("walk_side");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_droite() {

        ELIE.play("idle_side")

    }
    function bouger_bas() {

        ELIE.move(0, 25);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = false;
            ELIE.play("walk_front");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_bas(){

        ELIE.play("idle_front")

    }
    function bouger_haut(){

        ELIE.move(0, -25);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = true;
            ELIE.play("walk_behind");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_haut(){

        ELIE.play("idle_behind")

    }
    function bouger_gauche(){

        ELIE.move(-25, 0);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = false;
            ELIE.play("walk_side");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_gauche(){

        ELIE.play("idle_side")

    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            son_ballon.play()

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown() && !navigator.getGamepads()[0]) {
            pas.stop()
            bool_pas = false
        }
    })

// INITIALISATION DECORS
// changement zone
    const zone_droite = add([
        rect(1, 30),
        pos(191, 5),
        "zone_droite",
        area(),
        opacity(0)
    ]);

// barrieres
    const barriere_foot_gauche = add([
        pos(9,104),
        sprite('barriere_foot_gauche'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_cote"
    ])
    barriere_foot_gauche.z = barriere_foot_gauche.pos.y

    const barriere_foot_droite = add([
        pos(187,104),
        sprite('barriere_foot_droite'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_cote"
    ])
    barriere_foot_droite.z = barriere_foot_droite.pos.y

    const barriere_foot_haut = add([
        pos(96,9),
        sprite('barriere_foot_haut'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_longueur"
    ])
    barriere_foot_haut.z = barriere_foot_haut.pos.y

    const barriere_foot_bas = add([
        pos(96,104),
        sprite('barriere_foot_bas'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 174, 3)
        }),
        body({isStatic: true}),
        "barriere_longueur"
    ])
    barriere_foot_bas.z = barriere_foot_bas.pos.y

    // goals
    const goal_gauche = add([
        pos(15, 69),
        sprite('goal'),
        anchor("bot"),
        area(),
    ])
    goal_gauche.z = goal_gauche.pos.y

    const goal_gauche_hitbox1 = add([
        pos(15, 69),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_gauche_hitbox2 = add([
        pos(13, 67),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 1, 23)
        }),
        body({isStatic: true}),
        "goalll"
    ])

    const goal_gauche_hitbox3 = add([
        pos(15, 69),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, -25), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_droite = add([
        pos(178, 68),
        sprite('goal'),
        anchor("bot"),
        area(),
    ])
    goal_droite.z = goal_droite.pos.y
    goal_droite.flipX = true

    const goal_droite_hitbox1 = add([
        pos(178, 68),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_droite_hitbox2 = add([
        pos(178, 67),
        anchor("bot"),
        area({
            shape: new Rect(vec2(2, 0), 1, 23)
        }),
        body({isStatic: true}),
        "goalll"
    ])

    const goal_droite_hitbox3 = add([
        pos(178, 68),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, -25), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

// objets amovibles
    
    // ballon de foot
    const ballon_foot = add([
        pos(0,44),
        sprite('ballon_foot'),
        anchor("bot"),
        body(),
        area({
            shape: new Rect(vec2(), 7, 6)
        }),
        'ballon_foot'
    ])
    ballon_foot.onUpdate(() => {
        ballon_foot.z = ballon_foot.pos.y
        ballon_foot.vel = ballon_foot.vel.scale(1 - 2*dt())
    })
    if(!quete_boule_fin){
        ballon_foot.opacity = 0
    }
    if(partie_foot){
        ballon_foot.pos.x = 60
    }

//personnages

    const OSCAR = add([
        sprite('oscar'),
        pos(40,40),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 5, 3)
        }),
        body({ isStatic: true }),
        'oscar'
    ]);
    OSCAR.z = OSCAR.pos.y
    
    OSCAR.onUpdate(() => {
        if(OSCAR.pos.x < ELIE.pos.x){
            OSCAR.flipX = true
        } else {
            OSCAR.flipX = false
        }
    })

    OSCAR.play("idle_front")
    

// collisions
    ELIE.onCollide("zone_droite", (zone_droite) => {
        zone_arrivee = "gauche",
        pas.stop(),
        go("foret_1")
    })

    ELIE.onCollide("oscar", (oscar) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", oscar, "oscar")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("oscar", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    onKeyPress("e", () => {
    // dialogues oscar
        if(typing){return}
        if(near){
            son_menu.play()
        }   
        if (near && dialogueStage === 1 && currentSpeaker === OSCAR && !quete_boule_2 && !partie_foot) {
            let num = getRandomInt(3) 
            if (num === 0) {
                ftc_text_near(ELIE, "Salut, je m'appelle Oscar.", currentSpeaker, currentTag)
            }

            if (num === 1) {
                ftc_text_near(ELIE, "T'aimes bien le foot ?", currentSpeaker, currentTag)
            }

            if (num === 2) {
                ftc_text_near(ELIE, "J'ai perdu mon ballon :(", currentSpeaker, currentTag)
            }
            return
        }

        if (near && dialogueStage === 1 && currentSpeaker === OSCAR && quete_boule_2 && !partie_foot) {
            ftc_text_near(ELIE, "T'as trouvé mon ballon ! Merci beaucoup...", currentSpeaker, currentTag)
            removeItemBySprite("/assets/ballon_foot_item.png", "'ballon de foot'");
            dialogueStage = 2
            quete_boule_fin = true
            ballon_foot.opacity = 1
            ballon_foot.pos.x = 36
            return
        }

        if (near && dialogueStage === 2 && currentSpeaker === OSCAR && quete_boule_2 && !partie_foot) {
            showPrompt((name)=> {
                pseudo = name;
                console.log("Choisissez votre nom :", pseudo)
                dialogueStage = 3
                ftc_text_near(ELIE, `${pseudo}. C'est joli !\nEntraine-toi un peu avec le ballon et\nviens me voir si tu veux faire une partie.`, currentSpeaker, currentTag)
                partie_foot = true
            })
            return
        }

        if (near && dialogueStage === 3 && currentSpeaker === OSCAR && quete_boule_2 && partie_foot) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", OSCAR, "oscar")
            dialogueStage = 1
            return
        }

        if (near && dialogueStage === 1 && currentSpeaker === OSCAR && partie_foot) {
            ftc_text_near(ELIE, "Tu veux jouer ? C'est parti !", currentSpeaker, currentTag)
            
            wait(3, () => {
                    go("partie_foot")
                })
        }
    })

    ELIE.onCollide("ballon_foot", (ballon) => {
        nearball = true
        if(!tuto_ballon){
            if(!near){
                ftc_text_near(ELIE, "\\[ESPACE\\] en poussant pour tirer", ballon, "ballon_foot")
                dialogueStage = 1
            }
        }
        ballon_foot.vel.x = 0
        ballon_foot.vel.y = 0
    })

    ELIE.onCollideEnd("ballon_foot", () => {
        nearball = false
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ballon_foot.onCollide("barriere_cote", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("barriere_longueur", () => {
        ballon_foot.vel.y = -ballon_foot.vel.y
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("goal", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("goalll", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x/5
    })
    

})

scene("partie_foot",()=>{
    add([
        sprite('terrain_foot'),
    ]);
    musique_foot.volume = 0.3
    musique_foot.play()

    zone_arrivee = "partie"
    partie_foot_faite = true
// INITIALISATION VARIABLE SPECIFIQUE
    let var_goal = false
    nearball = false
    
// INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(70,60),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    ELIE.play("idle_side")

// mouvements
    function bouger_droite() {

        ELIE.move(25, 0);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = true;
            ELIE.play("walk_side");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_droite() {

        ELIE.play("idle_side")

    }
    function bouger_bas() {

        ELIE.move(0, 25);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = false;
            ELIE.play("walk_front");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_bas(){

        ELIE.play("idle_front")

    }
    function bouger_haut(){

        ELIE.move(0, -25);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = true;
            ELIE.play("walk_behind");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_haut(){

        ELIE.play("idle_behind")

    }
    function bouger_gauche(){

        ELIE.move(-25, 0);
        if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
            ELIE.flipX = false;
            ELIE.play("walk_side");
        }


        if(!bool_pas){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_gauche(){

        ELIE.play("idle_side")

    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            son_ballon.play()
            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown() && !navigator.getGamepads()[0]) {
            pas.stop()
            bool_pas = false
        }
    })

// INITIALISATION DECORS

// barrieres
    const barriere_foot_gauche = add([
        pos(9,104),
        sprite('barriere_foot_gauche'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_cote"
    ])
    barriere_foot_gauche.z = barriere_foot_gauche.pos.y

    const barriere_foot_droite = add([
        pos(183,104),
        sprite('barriere_foot_gauche'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_cote"
    ])
    barriere_foot_gauche.z = barriere_foot_gauche.pos.y
    barriere_foot_droite.z = barriere_foot_droite.pos.y

    const barriere_foot_haut = add([
        pos(96,9),
        sprite('barriere_foot_haut'),
        anchor("bot"),
        area(),
        body({isStatic: true}),
        "barriere_longueur"
    ])
    barriere_foot_haut.z = barriere_foot_haut.pos.y

    const barriere_foot_bas = add([
        pos(96,104),
        sprite('barriere_foot_bas'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 174, 3)
        }),
        body({isStatic: true}),
        "barriere_longueur"
    ])
    barriere_foot_bas.z = barriere_foot_bas.pos.y

    // goals
    const goal_gauche = add([
        pos(15, 69),
        sprite('goal'),
        anchor("bot"),
        area(),
    ])
    goal_gauche.z = goal_gauche.pos.y

    const confettis_gauche = goal_gauche.add([
            sprite('goal_anim'),
            anchor("center"),
            pos(0,-20)
    ])
    
    const goal_gauche_hitbox1 = add([
        pos(15, 69),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_gauche_hitbox2 = add([
        pos(15, 67),
        anchor("bot"),
        area({
            shape: new Rect(vec2(-2, 0), 1, 23)
        }),
        body({isStatic: true}),
        "goalll_gauche"
    ])

    const goal_gauche_hitbox3 = add([
        pos(15, 69),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, -25), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_droite = add([
        pos(178, 68),
        sprite('goal'),
        anchor("bot"),
        area(),
    ])
    goal_droite.z = goal_droite.pos.y
    goal_droite.flipX = true

    const confettis_droite = goal_droite.add([
            sprite('goal_anim'),
            anchor("center"),
            pos(0,-20)
    ])

    const goal_droite_hitbox1 = add([
        pos(178, 68),
        anchor("bot"),
        area({
            shape: new Rect(vec2(), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

    const goal_droite_hitbox2 = add([
        pos(178, 67),
        anchor("bot"),
        area({
            shape: new Rect(vec2(2, 0), 1, 23)
        }),
        body({isStatic: true}),
        "goalll_droite"
    ])

    const goal_droite_hitbox3 = add([
        pos(178, 68),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, -25), 5, 1)
        }),
        body({isStatic: true}),
        "goal"
    ])

// objets amovibles
    
    // ballon de foot
    const ballon_foot = add([
        pos(95,60),
        sprite('ballon_foot'),
        anchor("bot"),
        body(),
        area({
            shape: new Rect(vec2(), 7, 6)
        }),
        'ballon_foot'
    ])
    ballon_foot.onUpdate(() => {
        ballon_foot.z = ballon_foot.pos.y
        ballon_foot.vel = ballon_foot.vel.scale(1 - 2*dt())
    })

// personnages
    const OSCAR = add([
        sprite('oscar'),
        pos(120,58),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 5, 3)
        }),
        body({ isStatic: true }),
        'oscar'
    ]);
    OSCAR.z = OSCAR.pos.y
    
    OSCAR.onUpdate(() => {
        if(OSCAR.pos.x < ELIE.pos.x){
            OSCAR.flipX = true
        } else {
            OSCAR.flipX = false
        }
    })

    OSCAR.play("idle_front")
    
    // IA OSCAR

    let oscarSpeed = 18
    if(score_foot[0] === 1) {
        oscarSpeed = 22
    }
    if(score_foot[0] === 2) {
        oscarSpeed = 26
    }

    const oscarKickForce = 85
    
    let oscarCanKick = true
    let oscarDirection = "front"

    OSCAR.onUpdate(() => {

        const dirToBall = ballon_foot.pos.sub(OSCAR.pos)
        const dist = dirToBall.len()

        // déplacement vers le ballon
        if (dist > 8) {

            const moveDir = dirToBall.unit()

            OSCAR.move(
                moveDir.x * oscarSpeed,
                moveDir.y * oscarSpeed
            )

            // animations
            if (Math.abs(moveDir.x) > Math.abs(moveDir.y)) {

                oscarDirection = "side"

                if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                    OSCAR.play("walk_side")
                }
                if (moveDir.x > 0) {
                    OSCAR.flipX = true
                } else {
                    OSCAR.flipX = false
                }

            } else {

                if (moveDir.y > 0) {

                    oscarDirection = "front"

                    if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                        OSCAR.play("walk_front")
                    }                    

                } else {

                    oscarDirection = "behind"

                    if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                        OSCAR.play("walk_behind")
                    }
                }

            }

        } else {

            // animations idle
            if (oscarDirection === "side" && ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side") {
                OSCAR.play("idle_side")
            }

            if (oscarDirection === "front" && ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side") {
                OSCAR.play("idle_front")
            }

            if (oscarDirection === "behind" && ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side") {
                OSCAR.play("idle_behind")
            }

            // tir
            if (oscarCanKick) {

                oscarCanKick = false

                // animation de tir
                if (oscarDirection === "side"){
                    OSCAR.play("kick_side")
                }

                if (oscarDirection === "front"){
                    OSCAR.play("kick_front")
                }

                if (oscarDirection === "behind"){
                    OSCAR.play("kick_behind")
                }

                // vise le goal gauche
                const target = vec2(15, 55)

                const shotDir = target.sub(ballon_foot.pos).unit()

                ballon_foot.vel = shotDir.scale(oscarKickForce)

                ballon_foot.play("bounce")

                const son_ballon = play("son_ballon", {
                    volume: 1
                })

                wait(0.2, () => {
                    if (oscarDirection === "side") {
                        OSCAR.play("idle_side")
                    }

                    if (oscarDirection === "front") {
                        OSCAR.play("idle_front")
                    }

                    if (oscarDirection === "behind") {
                        OSCAR.play("idle_behind")
                    }
                })

                wait(1, () => {
                    oscarCanKick = true
                })
            }
        }

        OSCAR.z = OSCAR.pos.y
    })

// collisions
    
    // collisions ballon
    ELIE.onCollide("ballon_foot", (ballon) => {
        nearball = true
        if(!tuto_ballon){
            if(!near){
                ftc_text_near(ELIE, "\\[ESPACE\\] en poussant pour tirer", ballon, "ballon_foot")
                dialogueStage = 1
            }
        }
        ballon_foot.vel.x = 0
        ballon_foot.vel.y = 0
    })

    ELIE.onCollideEnd("ballon_foot", () => {
        nearball = false
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ballon_foot.onCollide("barriere_cote", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("barriere_longueur", () => {
        ballon_foot.vel.y = -ballon_foot.vel.y
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("goal", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x
        const son_ballon = play("son_ballon", {
            volume: 0.4
        })
    })
    ballon_foot.onCollide("goalll_gauche", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x/5
        if(!var_goal){
            confettis_gauche.play("confettis")
            play("son_defaite", {
                volume: 0.5
            })
            score_foot[1] = score_foot[1] + 1
            var_goal = true
            if(score_foot[1] === 3){
                message("Défaite...",5)
                fadeOutMusic(musique_foot, 3)
                wait(3.5, () => {
                    go("terrain_foot")
                })
            }
            else {
                wait(3.5, () => {
                    go("partie_foot")
                })
            }
        }
    })
    ballon_foot.onCollide("goalll_droite", () => {
        ballon_foot.vel.x = -ballon_foot.vel.x/5
        if(!var_goal){
            confettis_droite.play("confettis")
            play("son_victoire", {
                volume: 0.5
            })
            score_foot[0] = score_foot[0] + 1
            var_goal = true
            if(score_foot[0] === 3){
                message("Victoire !!!",5)
                fadeOutMusic(musique_foot, 3)
                wait(3.5, () => {
                    go("terrain_foot")
                })
            }
            else {
                wait(3.5, () => {
                    go("partie_foot")
                })
            }
        }
    })

    // messages partie
    message("BONNE CHANCE !", 4)

    // affichage du score
    const score_1 = add([text(`${pseudo}: ${score_foot[0]} | Oscar: ${score_foot[1]}`, {
        font: "journal",
    }),
    scale(0.2),
    color(BLACK),
    pos(3,3)
    ])
    score_1.z = 400

    const score_2 = add([text(`${pseudo}: ${score_foot[0]} | Oscar: ${score_foot[1]}`, {
        font: "journal",
    }),
    scale(0.2),
    color(WHITE),
    pos(3.3,2.7)
    ])
    score_2.z = 400

    const score_background = add([
        rect(55 + pseudo.length*3,9),
        pos(2,2),
        color(BLACK),
        opacity(0.4)
    ])
    score_background.z = 350
})

scene("ville_1",()=>{
    add([
        sprite('ville_1'),
    ]);

    // INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(50,50),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);
    if(zone_arrivee === "gauche"){
        ELIE.pos.x = 8
        ELIE.pos.y = 64
    }
    if(zone_arrivee === "garage"){
        ELIE.pos.x = 15
        ELIE.pos.y = 50
    }
    if(zone_arrivee === "prison"){
        ELIE.pos.x = 33
        ELIE.pos.y = 109
    }

    if(zone_arrivee === "hopital"){
        ELIE.pos.x = 120
        ELIE.pos.y = 46
    }

    if(zone_arrivee === "ecole"){
        ELIE.pos.x = 150
        ELIE.pos.y = 111
    }

    ELIE.play("idle_side")

    if(velo_monte){
        velo_location = "ville"
        ELIE.play("velo")
        ELIE.velo_utilise = add([
            sprite("velo"),
            pos(ELIE.pos.x, ELIE.pos.y + 11),
            body(),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 10)
            }),
            "velo"
        ]);
        velo_monte = true
    }
    
// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown()) {
            pas.stop()
            son_velo.stop()
            son_velo_casse.stop()

            bool_pas = false
            bool_velo = false
        }

        if(velo_monte) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTION
    onKeyPress("e", () => {
        if(typing){return}
        if(near){
            son_menu.play()
        }
        if(!velo_monte){
            //monter sur le velo
            if (near && dialogueStage === 1 && currentSpeaker === velo && !savoir_velo) {
                message("Ce n'est pas votre vélo",1)
                return
            }

            if (near && dialogueStage === 1 && currentSpeaker === velo && savoir_velo) {
                destroy(velo)
                ELIE.play("velo")
                ELIE.velo_utilise = add([
                    sprite("velo"),
                    pos(ELIE.pos.x, ELIE.pos.y + 11),
                    body(),
                    anchor("bot"),
                    area({
                        shape: new Rect(vec2(0, 0), 20, 10)
                    }),
                    "velo"
                ]);
                velo_monte = true
                return
            }
        }

        if(velo_monte){
            destroy(ELIE.velo_utilise)
            ELIE.play("idle_side")
            velo = add([
                pos(ELIE.pos.x,ELIE.pos.y),
                sprite('velo'),
                body({ isStatic: true}),
                anchor("bot"),
                area({
                    shape: new Rect(vec2(0, 0), 20, 3)
                }),
                'velo'
            ])
            position_velo_x = velo.pos.x
            position_velo_y = velo.pos.y
            velo.z = velo.pos.y
            velo_monte = false
        }
    })

// INITIALISATION DECORS
    // changement zone
    const zone_gauche = add([
        rect(1, 30),
        pos(0, 50),
        "zone_gauche",
        area(),
        opacity(0)
    ]);

    const zone_garage = add([
        rect(6, 2),
        pos(9, 38),
        "zone_garage",
        area(),
        opacity(0)
    ]);

    const zone_hopital = add([
        rect(14, 2),
        pos(112, 40),
        "zone_hopital",
        area(),
        opacity(0)
    ]);

    const zone_ecole = add([
        rect(16, 2),
        pos(139, 105),
        "zone_ecole",
        area(),
        opacity(0)
    ]);

    const zone_prison = add([
        rect(11, 2),
        pos(27, 104),
        "zone_prison",
        area(),
        opacity(0)
    ]);

    

    //bâtiments
    const hopital = add([
        pos(142,40),
        sprite('hopital_bat'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(4, 0), 79, 15)
        }),
        body({isStatic: true}),
        "hopital"
    ])
    hopital.z = hopital.pos.y - 13

    const ecole = add([
        pos(145,105),
        sprite('ecole_bat'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(2, 0), 66, 15)
        }),
        body({isStatic: true}),
        "ecole"
    ])
    ecole.z = ecole.pos.y - 13

    const garage = add([
        pos(30,38),
        sprite('garage_bat'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(2, 0), 52, 15)
        }),
        body({isStatic: true}),
        "garage"
    ])
    garage.z = garage.pos.y - 13

    const prison = add([
        pos(30,104),
        sprite('prison_bat'),
        anchor("bot"),
        area({
            shape: new Rect(vec2(3, 0), 57, 15)
        }),
        body({isStatic: true}),
        "prison"
    ])
    prison.z = prison.pos.y - 13

    // velo
    if(!velo_monte && velo_location === "ville"){
        velo = add([
            pos(35,45),
            sprite('velo'),
            body({ isStatic: true}),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 3)
            }),
            'velo'
        ])
        if(position_velo_x){
            velo.pos.x = position_velo_x
            velo.pos.y = position_velo_y
        }
        velo.z = velo.pos.y
        velo_location = "ville"
    }
    

// COLLISIONS
    // changement zone
    ELIE.onCollide("zone_gauche", (zone_gauche) => {
        if(velo_monte){
            zone_arrivee = "droite",
            pas.stop(),
            go("foret_1")
        } else {
            message("Vous avez oublié votre vélo")
        }
    })

    ELIE.onCollide("zone_garage", (zone_garage) => {
        pas.stop(),
        go("garage")
        
    })

    ELIE.onCollide("zone_hopital", (zone_garage) => {
        if(!velo_monte){
            pas.stop(),
            go("hopital")
        }
    })

    ELIE.onCollide("zone_prison", (zone_garage) => {
        if(!velo_monte){
            pas.stop(),
            go("prison")
        }
    })

    ELIE.onCollide("zone_ecole", (zone_garage) => {
        if(!velo_monte){
            pas.stop(),
            go("ecole")
        }
    })

    ELIE.onCollide("velo", (velo) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", velo, "velo")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("velo", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })
})

scene("garage",()=>{
    add([
        sprite('garage'),
    ]);

    // INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(30,104),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    ELIE.play("idle_behind")

    if(velo_monte){
        ELIE.pos.y = 80
        velo_location = "garage"
        ELIE.play("velo")
        ELIE.velo_utilise = add([
            sprite("velo"),
            pos(ELIE.pos.x, ELIE.pos.y + 11),
            body(),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 10)
            }),
            "velo"
        ]);
        velo_monte = true
    }
 
// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
        if(!bool_velo && velo_monte && !quete_velo_repare){
            son_velo_casse.play()
            bool_velo = true
        }
        if(!bool_velo && velo_monte && quete_velo_repare){
            son_velo.play()
            bool_velo = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
                if (!isAnyMovementKeyDown()){
                    son_velo_arret.play()
                }
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown()) {
            pas.stop()
            son_velo.stop()
            son_velo_casse.stop()

            bool_pas = false
            bool_velo = false
        }

        if(velo_monte) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTION
    onKeyPress("e", () => {
        if(typing){return}
        if(near){
            son_menu.play()
        }
        if(!velo_monte){
            // prendre outils
            if (near && dialogueStage === 1 && currentSpeaker === marteau) {
                if(currentSlot < slots.length){
                    destroy(marteau)
                    addItem("assets/garage_marteau.png", "'marteau'")
                    marteau_compteur = true
                    marteau_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }
            if (near && dialogueStage === 1 && currentSpeaker === tournevis) {
                if(currentSlot < slots.length){
                    destroy(tournevis)
                    addItem("assets/garage_tournevis.png", "'tournevis'")
                    tournevis_compteur = true
                    tournevis_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }
            if (near && dialogueStage === 1 && currentSpeaker === crayon) {
                if(currentSlot < slots.length){
                    destroy(crayon)
                    addItem("assets/garage_crayon.png", "'crayon'")
                    crayon_compteur = true
                    crayon_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }
            if (near && dialogueStage === 1 && currentSpeaker === cliquet) {
                if(currentSlot < slots.length){
                    destroy(cliquet)
                    addItem("assets/garage_cliquet.png", "'cliquet'")
                    cliquet_compteur = true
                    cliquet_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }
            if (near && dialogueStage === 1 && currentSpeaker === double_metre) {
                if(currentSlot < slots.length){
                    destroy(double_metre)
                    addItem("assets/garage_double_metre.png", "'double mètre'")
                    double_metre_compteur = true
                    double_metre_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }
            if (near && dialogueStage === 1 && currentSpeaker === cle) {
                if(currentSlot < slots.length){
                    destroy(cle)
                    addItem("assets/garage_cle.png", "'clé'")
                    cle_compteur = true
                    cle_present = false
                    return                    
                }
                else {
                    message("Votre inventaire est plein !")                
                }
            }

            // poser outils
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && cle_compteur) {
                removeItemBySprite("assets/garage_cle.png", "'clé'")
                compteur_garage++
                cle_compteur = false
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && tournevis_compteur) {
                removeItemBySprite("assets/garage_tournevis.png", "'tournevis'")
                compteur_garage++
                tournevis_compteur = false
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && marteau_compteur) {
                removeItemBySprite("assets/garage_marteau.png", "'marteau'")
                compteur_garage++
                marteau_compteur = false
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && double_metre_compteur) {
                removeItemBySprite("assets/garage_double_metre.png", "'double mètre'")
                compteur_garage++
                double_metre_compteur = false
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && cliquet_compteur) {
                removeItemBySprite("assets/garage_cliquet.png", "'cliquet'")
                compteur_garage++
                cliquet_compteur = false
                return
            }
            if (near && dialogueStage === 1 && currentSpeaker === boite_2 && crayon_compteur) {
                removeItemBySprite("assets/garage_crayon.png", "'crayon'")
                compteur_garage++
                crayon_compteur = false
                return
            }

            // monter sur le velo
            if (near && dialogueStage === 1 && currentSpeaker === velo && !savoir_velo) {
                message("Ce n'est pas votre vélo",1)
                return
            }

            if (near && dialogueStage === 1 && currentSpeaker === velo && savoir_velo) {
                destroy(velo)
                ELIE.play("velo")
                ELIE.velo_utilise = add([
                    sprite("velo"),
                    pos(ELIE.pos.x, ELIE.pos.y + 11),
                    body(),
                    anchor("bot"),
                    area({
                        shape: new Rect(vec2(0, 0), 20, 10)
                    }),
                    "velo"
                ]);
                velo_monte = true
                return
            }

            // dialogues papa
            if (near && dialogueStage === 1 && currentSpeaker === PAPA && velo_location != "garage") {
                let num = getRandomInt(3) 
                if (num === 0) {
                    ftc_text_near(ELIE, `Salut ${pseudo} !\nT'as quelque chose à me dire ?`, currentSpeaker, currentTag)
                }

                if (num === 1) {
                    ftc_text_near(ELIE, "Tu es libre jeudi ?\nJ'aurais besoin d'un coup de main...", currentSpeaker, currentTag)
                }

                if (num === 2) {
                    ftc_text_near(ELIE, "Tu pourrais rendre visite à ton\nfrère de temps en temps,\nça lui ferait plaisir.", currentSpeaker, currentTag)
                }
                return
            }
            
            if (near && dialogueStage === 1 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage < 6) {
                ftc_text_near(ELIE, `Salut ${pseudo} !\nOù t'as trouvé ce vélo ?`, currentSpeaker, currentTag)
                dialogueStage = 2
                return
            }

            if (near && dialogueStage === 2 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage < 6) {
                ftc_text_near(ELIE, `D'accord, je vois...\nil est gentil avec toi ?`, currentSpeaker, currentTag)
                dialogueStage = 3
                return
            }

            if (near && dialogueStage === 3 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage < 6) {
                ftc_text_near(ELIE, `Bon, tant mieux. Je vais regarder ça,\nmais j'ai besoin que tu m'aides\nà ranger l'atelier avant !`, currentSpeaker, currentTag)
                dialogueStage = 4
                return
            }

            if (near && dialogueStage === 4 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage < 6) {
                ftc_text_near(ELIE, `Mets tous les outils dans la\ngrosse caisse à outils.`, currentSpeaker, currentTag)
                dialogueStage = 5
                return
            }

            if (near && dialogueStage === 5 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage < 6) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", PAPA, "papa")
                dialogueStage = 1
            }

            if (near && dialogueStage === 1 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage > 5) {
                ftc_text_near(ELIE, `Merci ! J'ai regardé ton vélo en attendant.`, currentSpeaker, currentTag)
                quete_velo_repare = true
                dialogueStage = 2
                return
            }
            if (near && dialogueStage === 2 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage > 5) {
                ftc_text_near(ELIE, `C'était un détail tu sais, tu aurais\npu le réparer toi-même.`, currentSpeaker, currentTag)
                dialogueStage = 3
                return
            }
            if (near && dialogueStage === 3 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage > 5) {
                ftc_text_near(ELIE, `Aller file si tu veux rendre son vélo à Mélo.\nIl doit déjà être à l'école vu l'heure.`, currentSpeaker, currentTag)
                dialogueStage = 4
                return
            }
            if (near && dialogueStage === 4 && currentSpeaker === PAPA && velo_location === "garage" && compteur_garage > 5) {
                ftc_text_near(ELIE, "\\[E\\] intéragir", PAPA, "papa")
                dialogueStage = 1
            }
        }

        if(velo_monte){
            destroy(ELIE.velo_utilise)
            ELIE.play("idle_side")
            velo = add([
                pos(ELIE.pos.x,ELIE.pos.y),
                sprite('velo'),
                body({ isStatic: true}),
                anchor("bot"),
                area({
                    shape: new Rect(vec2(0, 0), 20, 3)
                }),
                'velo'
            ])
            position_velo_x = velo.pos.x
            position_velo_y = velo.pos.y
            velo.z = velo.pos.y
            velo_monte = false
        }
    })

// INITIALISATION DECORS
    // murs de la salle
    const mur_gauche = add([
        rect(1, 108),
        pos(-1,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_droite = add([
        rect(1, 108),
        pos(192,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas = add([
        rect(192, 1),
        pos(0,108),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_haut = add([
        rect(192, 1),
        pos(0,-1),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const voiture = add([
        rect(56, 83),
        pos(111,17),
        area(),
        body({isStatic: true}),
        opacity(0)        
    ])

    const porte = add([
        rect(23, 10),
        pos(40,98),
        area(),
        body({isStatic: true}),
        opacity(0)        
    ])

    // changement zone
    const zone = add([
        rect(23, 2),
        pos(17, 106),
        "zone",
        area(),
        opacity(0)
    ]);

    // objets
    const meuble_1 = add([
        sprite("garage_meuble_1"),
        pos(7,1),
        area(),
        body({ isStatic: true})
    ])

    const meuble_2 = add([
        sprite("garage_meuble_2"),
        pos(50,1),
        area(),
        body({ isStatic: true})
    ])

    const meuble_3 = add([
        sprite("garage_meuble_3"),
        pos(184,3),
        area(),
        body({ isStatic: true})
    ])

    const boite_1 = add([
        sprite("garage_boite_1"),
        pos(173,78),
        area(),
        body({ isStatic: true})
    ])

    const boite_2 = add([
        sprite("garage_boite_2"),
        pos(15,45),
        area(),
        body({ isStatic: true}),
        anchor("bot"),
        "boite_2"
    ])

    const balais = add([
        sprite("garage_balais"),
        pos(1,63),
        area(),
        body({ isStatic: true})
    ])

    let marteau
    if(marteau_present){
        marteau = add([
            sprite("garage_marteau"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    let tournevis
    if(tournevis_present){
        tournevis = add([
            sprite("garage_tournevis"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    let crayon
    if(crayon_present){
        crayon = add([
            sprite("garage_crayon"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    let double_metre
    if(double_metre_present){
        double_metre = add([
            sprite("garage_double_metre"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    let cle
    if(cle_present){
        cle = add([
            sprite("garage_cle"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    let cliquet
    if(cliquet_present){
        cliquet = add([
            sprite("garage_cliquet"),
            pos(getRandomInt(80)+20,getRandomInt(50)+30),
            area(),
            body(),
            anchor("bot"),
            "outil"
        ])          
    }

    // personnages
    const PAPA = add([
        sprite('papa'),
        pos(50,42),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 6, 3)
        }),
        body({ isStatic: true }),
        'papa'
    ]);
    PAPA.z = PAPA.pos.y
    PAPA.play("idle_front")
    PAPA.onUpdate(() => {
        if(PAPA.pos.x > ELIE.pos.x){
            PAPA.flipX = true
        } else {
            PAPA.flipX = false
        }
    })

    // velo
    if(!velo_monte && velo_location === "garage"){
        velo = add([
            pos(position_velo_x,position_velo_y),
            sprite('velo'),
            body({ isStatic: true}),
            anchor("bot"),
            area({
                shape: new Rect(vec2(0, 0), 20, 3)
            }),
            'velo'
        ])
        velo.z = velo.pos.y
        velo_location = "garage"
    }

// COLLISIONS
    // changement zone
    ELIE.onCollide("zone", (zone) => {
        pas.stop(),
        zone_arrivee = "garage",
        go("ville_1")
    })

    ELIE.onUpdate(() => {
        if(velo_monte){
            ELIE.velo_utilise.onCollide("zone", (zone) => {
                pas.stop(),
                zone_arrivee = "garage",
                go("ville_1")
            })
        }   
    })

    // interactions
    ELIE.onCollide("papa", (papa) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", papa, "papa")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("papa", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    // velo
    ELIE.onCollide("velo", (velo) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", velo, "velo")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("velo", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ELIE.onCollide("outil", (outil) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] prendre", outil, "outil")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("outil", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })

    ELIE.onCollide("boite_2", (boite_2) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] intéragir", boite_2, "boite_2")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("boite_2", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })
})

scene("hopital",()=>{

        add([
        sprite('hopital_couloir'),
    ]);

    // INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(10,59),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    ELIE.play("idle_side")
    ELIE.flipX = true

    if(zone_arrivee === "chambre"){
        ELIE.pos.x = 180
        ELIE.pos.y = 50
        ELIE.flipX = false
    }
// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown() && !navigator.getGamepads()[0]) {
            pas.stop()
            bool_pas = false
        }

        if(velo_monte) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTION
    onKeyPress("e", () => {
        if(typing){return}
        if(near){
            son_menu.play()
        }
        if (near && dialogueStage === 1 && currentSpeaker === zone_2) {
            destroyCurrentMessages()
            near = false
            dialogueStage = 0
            currentSpeaker = null
            currentTag = null
            go("hopital_chambre")
        }
    })

// INITIALISATION DECORS
    // murs de la salle
    const mur_droite = add([
        rect(1, 108),
        pos(192,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_1 = add([
        rect(192, 1),
        pos(0,69),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_haut = add([
        rect(192, 1),
        pos(0,44),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_porte = add([
        rect(1, 20),
        pos(188,30),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    // changement zone
    const zone_1 = add([
        rect(2, 24),
        pos(0, 45),
        "zone_1",
        area(),
        opacity(0)
    ]);

    const zone_2 = add([
        rect(6, 1),
        pos(181, 45),
        "zone_2",
        area(),
        opacity(0)
    ]);

    const hopital_layer = add([
        sprite("hopital_layer"),
        pos(10,51),
        area(),
        z(500)
    ])

    // objets
    const hopital_porte = add([
        sprite("hopital_porte"),
        pos(183,27),
        area(),
    ])
    hopital_porte.z = hopital_porte.pos.y + 23

// COLLISIONS
    // changement zone
    ELIE.onCollide("zone_1", (zone_1) => {
        pas.stop(),
        zone_arrivee = "hopital",
        go("ville_1")
    })

    ELIE.onCollide("zone_2", (zone_2) => {
        if (!near) {
            ftc_text_near(ELIE, "\\[E\\] entrer", zone_2, "zone_2")
            dialogueStage = 1
        }
    })

    ELIE.onCollideEnd("zone_2", () => {
        destroyCurrentMessages()
        near = false
        dialogueStage = 0
        currentSpeaker = null
        currentTag = null
    })
})

scene("hopital_chambre",()=>{

        add([
        sprite('hopital_chambre'),
    ]);

    // INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(92,104),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    ELIE.play("idle_behind")
 
// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown() && !navigator.getGamepads()[0]) {
            pas.stop()
            bool_pas = false
        }

        if(velo_monte) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTION
    onKeyPress("e", () => {

    })

// INITIALISATION DECORS
    // murs de la salle
    const mur_gauche = add([
        rect(1, 108),
        pos(44,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_droite = add([
        rect(1, 108),
        pos(142,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_1 = add([
        rect(82, 1),
        pos(0,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_2 = add([
        rect(82, 1),
        pos(102,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_3 = add([
        rect(1, 27),
        pos(101,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_4 = add([
        rect(1, 27),
        pos(82,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_haut = add([
        rect(192, 1),
        pos(0,27),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    // changement zone
    const zone = add([
        rect(18, 2),
        pos(83, 106),
        "zone",
        area(),
        opacity(0)
    ]);

    const meuble = add([
        sprite("hopital_meuble"),
        pos(47,60),
        area(),
        body({ isStatic: true})
    ])

    const lit = add([
        sprite("hopital_lit"),
        pos(46,36),
        area(),
        body({ isStatic: true})
    ])

    const chaise = add([
        sprite("hopital_chaise"),
        pos(123,28),
        area(),
        body({ isStatic: true})
    ])

    const hopital_accessoire = add([
        sprite("hopital_accessoire"),
        pos(69,60),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 10, 3)
        }),
        body(),
    ])
    hopital_accessoire.onUpdate(() => {
        hopital_accessoire.z = hopital_accessoire.pos.y
    })

    const fleur_bleue_1 = add([
        pos(50,68),
        sprite('fleur_bleue'),
        area(),
        anchor("bot")
    ])
    fleur_bleue_1.z = fleur_bleue_1.pos.y
    
    fleur_bleue_1.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

    const fleur_blanche_1 = add([
        pos(50,66),
        sprite('fleur_blanche'),
        area(),
        anchor("bot")
    ])
    fleur_blanche_1.z = fleur_blanche_1.pos.y
    
    fleur_blanche_1.play("idle",{
        speed: 0.5 + getRandomInt(4)/2
    })

// COLLISIONS
    // changement zone
    ELIE.onCollide("zone", (zone) => {
        pas.stop(),
        zone_arrivee = "chambre",
        go("hopital")
    })
})


scene("prison",()=>{

        add([
        sprite('prison'),
    ]);

    // INITIALISATION ET MOUVEMENTS ELIE
    const ELIE = add([
        sprite(apparence),
        pos(92,104),
        anchor("bot"),
        area({
            shape: new Rect(vec2(0, 0), 8, 2)
        }),
        body(),
        'elie'
    ]);

    ELIE.play("idle_behind")
 
// mouvements
    function bouger_droite() {
        if(!velo_monte){
            ELIE.move(25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_droite() {
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_bas() {
        if(!velo_monte){
            ELIE.move(0, 25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_front");
            }
        }

        if(velo_monte){
            ELIE.move(0, 40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_bas(){
        if(!velo_monte){
            ELIE.play("idle_front")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_haut(){
        if(!velo_monte){
            ELIE.move(0, -25);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = true;
                ELIE.play("walk_behind");
            }
        }

        if(velo_monte){
            ELIE.move(0, -40);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = true;
                ELIE.velo_utilise.flipX = false;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_haut(){
        if(!velo_monte){
            ELIE.play("idle_behind")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function bouger_gauche(){
        if(!velo_monte){
            ELIE.move(-25, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side"){
                ELIE.flipX = false;
                ELIE.play("walk_side");
            }
        }

        if(velo_monte){
            ELIE.move(-40, 0);
            if(ELIE.curAnim() != "walk_side" && ELIE.curAnim() != "walk_front" && ELIE.curAnim() != "walk_behind" && ELIE.curAnim() != "kick_behind" && ELIE.curAnim() != "kick_front" && ELIE.curAnim() != "kick_side" && ELIE.velo_utilise.curAnim() != "roule"){
                ELIE.flipX = false;
                ELIE.velo_utilise.flipX = true;
                ELIE.play("velo");
                ELIE.velo_utilise.play("roule");
            }
        }

        if(!bool_pas && !velo_monte){
            pas.play()
            bool_pas = true
        }
    }
    function bouger_stop_gauche(){
        if(!velo_monte){
            ELIE.play("idle_side")
        }

        if(velo_monte){
            ELIE.velo_utilise.stop()
        }
    }
    function coup_de_pied() {
        onKeyPress("space", () => {
            if(!near){
                if(ELIE.curAnim() === "walk_side"){
                    ELIE.play("kick_side")
                }
                if(ELIE.curAnim() === "walk_front"){
                    ELIE.play("kick_front")
                }
                if(ELIE.curAnim() === "walk_behind"){
                    ELIE.play("kick_behind")
                }
            }

            if(!nearball){
                return
            }

            const dir = ballon_foot.pos.sub(ELIE.pos).unit()

            const force = 100

            ballon_foot.vel = dir.scale(force)

            const son_ballon = play("son_ballon", {
                volume: 1
            })

            tuto_ballon = true   

            ballon_foot.play("bounce")

        })
    }     

    onKeyDown("right", () => {
        bouger_droite()
    });
    onKeyRelease("right", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("down", () => {
        bouger_bas()
    });
    onKeyRelease("down", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("up", () => {
        bouger_haut()
    });
    onKeyRelease("up", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("left", () => {
        bouger_gauche()
    });
    onKeyRelease("left", ()=>{
        bouger_stop_gauche()
    })
    onKeyDown("d", () => {
        bouger_droite()
    });
    onKeyRelease("d", ()=>{
        bouger_stop_droite()
    })
    onKeyDown("s", () => {
        bouger_bas()
    });
    onKeyRelease("s", ()=>{
        bouger_stop_bas()
    })
    onKeyDown("w", () => {
        bouger_haut()
    });
    onKeyRelease("w", ()=>{
        bouger_stop_haut()
    })
    onKeyDown("a", () => {
        bouger_gauche()
    });
    onKeyRelease("a", ()=>{
        bouger_stop_gauche()
    })
    onKeyPress("space", () => {
        coup_de_pied() 
    });

    // son de marche et position z
    ELIE.onUpdate(() => {
        ELIE.z = ELIE.pos.y

        if (!isAnyMovementKeyDown() && !navigator.getGamepads()[0]) {
            pas.stop()
            bool_pas = false
        }

        if(ELIE.velo_utilise) {
            ELIE.velo_utilise.pos.x = ELIE.pos.x
            ELIE.velo_utilise.pos.y = ELIE.pos.y + 11
            ELIE.velo_utilise.z = ELIE.pos.y + 11
            ELIE.z = ELIE.pos.y + 11
        }
    })

// INTERACTION
    onKeyPress("e", () => {

    })

// INITIALISATION DECORS
    // murs de la salle
    const mur_gauche = add([
        rect(1, 108),
        pos(44,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_droite = add([
        rect(1, 108),
        pos(142,0),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_1 = add([
        rect(82, 1),
        pos(0,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_2 = add([
        rect(82, 1),
        pos(102,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_3 = add([
        rect(1, 27),
        pos(101,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_bas_4 = add([
        rect(1, 27),
        pos(82,81),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    const mur_haut = add([
        rect(192, 1),
        pos(0,25),
        area(),
        body({isStatic: true}),
        opacity(0)
    ])

    // changement zone
    const zone = add([
        rect(18, 2),
        pos(83, 106),
        "zone",
        area(),
        opacity(0)
    ]);

    const meuble_1 = add([
        sprite("prison_meuble_1"),
        pos(55,42),
        area(),
        body({ isStatic: true})
    ])

    const meuble_2 = add([
        sprite("prison_meuble_2"),
        pos(115,41),
        area(),
        body({ isStatic: true})
    ])

// COLLISIONS
    // changement zone
    ELIE.onCollide("zone", (zone) => {
        pas.stop(),
        zone_arrivee = "prison",
        go("ville_1")
    })
})

scene("ecole",()=>{

    add([
        sprite('accueil'),
    ]);

    onKeyPress("space", () => {
        if(fin){
            zone_arrivee = "ecole"
            go("ville_1")
        } else {return}
    }) 

    musique_jeu.volume = 0.8
    musique_jeu.play()

    message("Vous avez terminé la démo", 1)
    wait(7, () => {
        message("Merci d'avoir joué !", 1)
        wait(7, () => {
            message("C'est très long de coder un jeu", 1)
            wait(7, () => {
                fadeOutMusic(musique_jeu, 7)
                message("Mais je fais la suite au plus vite", 1)
                wait(7, () => {
                    fin = true
                    const message1 = add([text("Appuyer sur 'ESPACE' pour explorer", {
                        font: "journal"
                        }),
                        pos(center()),
                        anchor("center"),
                        color(BLACK),
                        scale(0.15),
                    ])
                    const message2 = add([text("Appuyer sur 'ESPACE' pour explorer", {
                        font: "journal"
                        }),
                        pos(message1.pos.x + 0.5, message1.pos.y - 0.5),
                        anchor("center"),
                        color(WHITE),
                        scale(0.15),
                    ])
                })
            })
        })
    })
})

go("choix")
