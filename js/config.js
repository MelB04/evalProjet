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
btEcran3.addEventListener('click', calculerPrix);
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
    container[0].children[numeroEcranCourant].style.display="block";
}

function ecranPrecedent(){
    for (let numero = 0; numero < nbEcran; numero++) {
        container[0].children[numero].style.display="none";
    }
    numeroEcranCourant -=1;
    container[0].children[numeroEcranCourant].style.display="block";
}


//element selectionnee ecran1
let prixForfait = null;

let prixOption = 0;
let prixparAnnonce = 0;
let nbMois = 0;
let forfaitSelectionnee = null;
const cardsEcran1 = ecran1.getElementsByClassName('card');
//console.log(cards);
const recapPrix = document.getElementById('recapPrix');
const recapDuree = document.getElementById('recapDuree');
const recapDuree2 = document.getElementById('recapDuree2');
const recapDuree3 = document.getElementById('recapDuree3');
const recapOption1 = document.getElementById('recapOption1');
const recapOption2 = document.getElementById('recapOption2');
const recapOption3 = document.getElementById('recapOption3');
recapOption1.style.display="none";
recapOption2.style.display="none";
recapOption3.style.display="none"; 

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
            console.log(forfaitSelectionnee); 

            prixForfait = card.getElementsByTagName('td');
            Duree = card.getElementsByTagName('h3');
            console.log(prixForfait[0].children[0]);
            console.log(Duree[0].textContent);

            recapPrix.textContent = prixForfait[0].children[0].innerText;
            if (recapPrix.textContent == "1,90€"){
                prixparAnnonce = 1.90;
                nbMois = 1;
            }
            if (recapPrix.textContent == "1,80€"){
                prixparAnnonce = 1.80;
                nbMois = 3;
            }
            if (recapPrix.textContent == "1,70€"){
                prixparAnnonce = 1.70;
                nbMois = 6;
            }
            if (recapPrix.textContent == "1,60€"){
                prixparAnnonce = 1.60;
                nbMois = 9;
            }
            if (recapPrix.textContent == "1,50€"){
                prixparAnnonce = 1.50;
                nbMois = 12;
            }

            recapDuree.textContent = Duree[0].textContent;
            recapDuree2.textContent = Duree[0].textContent;
            recapDuree3.textContent = Duree[0].textContent;
        }
    });    
}


//number ecran2
const nbAnnonce = document.getElementById('inputNb');
const recapQuantite = document.getElementById('recapQuantite');
const finalQuantite = document.getElementById('finalQuantite');
let nbPost = 0;

if (nbAnnonce.valueAsNumber > 0){
    btEcran2.disabled = false;
    recapQuantite.textContent = nbAnnonce.value;
    finalQuantite.textContent = nbAnnonce.value;
    nbPost = nbAnnonce.valueAsNumber;
}else{
    btEcran2.disabled = true;
}

nbAnnonce.addEventListener('change', () => {
    //console.log(nbAnnonce);

    if (nbAnnonce.valueAsNumber > 0){
        btEcran2.disabled = false;
        recapQuantite.textContent = nbAnnonce.value;
        finalQuantite.textContent = nbAnnonce.value;
        nbPost = nbAnnonce.valueAsNumber;
    }else{
        btEcran2.disabled = true;
    }
});


//ecran3
let optionSelectionnee = [];
const cardsEcran3 = ecran3.getElementsByClassName('card');
//console.log(cards);

const optionrecap = document.getElementById('optionrecap');

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
        
        
        //console.log(optionSelectionnee[0]);
        if (optionSelectionnee[0] == 0){
            prixOption=9.9;
            optionrecap.textContent = "Duplique";
            recapOption1.style.display="block";
            recapOption2.style.display="none";
            recapOption3.style.display="none";   
        }

        if (optionSelectionnee[0] == 1){
            prixOption=9.9;
            optionrecap.textContent = "Auto 96H";
            recapOption1.style.display="none";
            recapOption2.style.display="block";
            recapOption3.style.display="none";   
        }

        if (optionSelectionnee[0] == 2){
            prixOption=15.90;
            optionrecap.textContent = "Pack Option Duo Duplique + Auto 96H";
            recapOption1.style.display="none";
            recapOption2.style.display="none";  
            recapOption3.style.display="block";
        }

        if (optionSelectionnee.length == 0){
            prixOption=0;
            optionrecap.textContent = "Aucun";
            recapOption1.style.display="none";
            recapOption2.style.display="none";  
            recapOption3.style.display="none";
        }
    });    
}

const dateDebut = document.getElementById('dateDebut');
const dateFin = document.getElementById('dateFin');

function calculerPrix(){

    var dateDuJour = new Date();
    var dateDeFin = new Date();

    var m=dateDeFin.getMonth()+nbMois;
    dateDeFin.setMonth(m);

    dateDebut.textContent = dateDuJour.toLocaleDateString();
    dateFin.textContent = dateDeFin.toLocaleDateString();

    const prixTotal = document.getElementById('prixTotal');
    let calculPrixTotal = Math.round((nbPost * prixparAnnonce + nbMois * prixOption) * 100) / 100
    prixTotal.textContent = calculPrixTotal;
}