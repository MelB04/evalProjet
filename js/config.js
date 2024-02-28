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