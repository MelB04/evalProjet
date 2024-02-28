let numeroEcranCourant = 0;


const container = document.getElementsByClassName('container');
let nbEcran = parseInt(container[0].children.length);

const ecran1 = document.getElementById('ecran1');
const ecran2 = document.getElementById('ecran2');
const ecran3 = document.getElementById('ecran3');
const ecran4 = document.getElementById('ecran4');


const btEcran1 = document.getElementById('btEcran1');
const btEcran2 = document.getElementById('btEcran2');
const btEcran3 = document.getElementById('btEcran3');
btEcran1.addEventListener('click', ecranSuivant);
btEcran2.addEventListener('click', ecranSuivant);
btEcran3.addEventListener('click', ecranSuivant);
btEcran1.disabled = true;

const btRetour2 = document.getElementById('btRetour2');
const btRetour3 = document.getElementById('btRetour3');
const btRetour4 = document.getElementById('btRetour4');
btRetour2.addEventListener('click', ecranPrecedent);
btRetour3.addEventListener('click', ecranPrecedent);
btRetour4.addEventListener('click', ecranPrecedent);

ecran3.style.display="none";
ecran2.style.display="none";
ecran4.style.display="none";


function ecranSuivant(){
    for (let numero = 0; numero < nbEcran; numero++) {
        container[0].children[numero].style.display="none";
    }
    numeroEcranCourant +=1;
    container[0].children[numeroEcranCourant].style.display="block"
}

function ecranPrecedent(){
    for (let numero = 0; numero < nbEcran; numero++) {
        container[0].children[numero].style.display="none";
    }
    numeroEcranCourant -=1;
    container[0].children[numeroEcranCourant].style.display="block"
}


//element selectionnee ecran1

let forfaitSelectionnee = null;
const cardsEcran1 = ecran1.getElementsByClassName('card');
//console.log(cards);

for (let card of cardsEcran1){
    card.addEventListener('click', () => { 

        if (forfaitSelectionnee == card){
            btEcran1.disabled = true;

            card.style.backgroundColor = "";  
            forfaitSelectionnee = null;
        }else{
            btEcran1.disabled = false;

            for (let cardInit of cardsEcran1) {
                cardInit.style.backgroundColor = "";  
            }
            card.style.backgroundColor = "red";  
            forfaitSelectionnee = card; 
            //console.log(forfaitSelectionnee); 
        }
    });    
}


//number ecran2
const nbAnnonce = document.getElementById('inputNb');
if (nbAnnonce.valueAsNumber > 0){
    btEcran2.disabled = false;
}else{
    btEcran2.disabled = true;
}

nbAnnonce.addEventListener('change', () => {
    //console.log(nbAnnonce);

    if (nbAnnonce.valueAsNumber > 0){
        btEcran2.disabled = false;
    }else{
        btEcran2.disabled = true;
    }
});


//ecran3
let optionSelectionnee = [];
const cardsEcran3 = ecran3.getElementsByClassName('card');
//console.log(cards);

for (let option = 0; option < cardsEcran3.length; option++) {
    
    cardsEcran3[option].addEventListener('click', () => { 
        
        if (optionSelectionnee.length == 0){
            optionSelectionnee.push(option);
            cardsEcran3[option].style.backgroundColor = "red";  
        }else{

            if (optionSelectionnee.includes(option)){
                let indexASupprimer = optionSelectionnee.indexOf(option);
                optionSelectionnee.splice(indexASupprimer, 1);
                cardsEcran3[option].style.backgroundColor = "";
            }else{

                if (optionSelectionnee.includes(2)){
                    optionSelectionnee = [];
    
                    for (let cardInit of cardsEcran3) {
                        cardInit.style.backgroundColor = "";  
                    } 
                }

                if (option == 2){
                    optionSelectionnee = [];
    
                    for (let cardInit of cardsEcran3) {
                        cardInit.style.backgroundColor = "";  
                    } 
                }
                optionSelectionnee.push(option);
                cardsEcran3[option].style.backgroundColor = "red";  

                
                if (optionSelectionnee.length >= 2){
                    if ((optionSelectionnee[0] == 0 && optionSelectionnee[1] == 1) || (optionSelectionnee[0] == 1 && optionSelectionnee[1] == 0)) {
                        for (let cardInit of cardsEcran3) {
                            cardInit.style.backgroundColor = "";  
                        }
                        optionSelectionnee = [];
        
                        cardsEcran3[2].style.backgroundColor = "red";  
                        optionSelectionnee.push(2);
                    }
                }

            }
        }
        console.log(optionSelectionnee); 
    });    
}