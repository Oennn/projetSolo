//==================================================================
//==================================================================



//exo 1 CHRONO
console.log("test");
let sec =0;
let min=0;
let intervalleValide=null;
let cpt= document.querySelector("#cpt");
let h2= document.querySelector("#titleChrono");

function demarrerChronometre(){
    if(intervalleValide !== null){
        return;
    }
    intervalleValide = 
    setInterval( minute, 10); // function (){...} ou ()=> {...}
}
function arreterChronometre(){
    clearInterval(intervalleValide);
    intervalleValide=null;
    if(h2.textContent.length===0){
         h2.textContent="exo 1: chronometre";
        }
    
}
function resetChronometre(){
    //arreterChronometre();
    sec =0;
    min=0;
    cpt.textContent="cpt : " +min +":"+ sec;

}

function minute (){
    sec++;
    if(sec===60){
        sec= 0;
        min++;
        

    }
    if(min==1){ //pour les test mettre à 1
        resetChronometre();
        if(h2.textContent.length>0){
         h2.textContent=h2.textContent.slice(0,-1);
        }
        else{
            resetChronometre();
            arreterChronometre();
        }

    }
    
    cpt.textContent="cpt : " +min +":"+ sec;
    
    
}
function resetJeu(){
    h2.textContent="exo 1: chronometre";
    resetChronometre();
    arreterChronometre();
}



document.querySelector("#demarrer").addEventListener("click",demarrerChronometre);
document.querySelector("#arreter").addEventListener("click",arreterChronometre);
document.querySelector("#reset").addEventListener("click",resetChronometre);
document.querySelector("#resetJ").addEventListener("click",resetJeu);


//==================================================================
//==================================================================
//exo 2 NOMBRES ALEATOIRES


let pAlea=document.querySelector("#pAlea");

function nbAlea(){

    let inputMin= document.querySelector("#AleaMin").value;
    let InputMax= document.querySelector("#AleaMax").value;

    if (inputMin === "" || InputMax === "") {
        pAlea.textContent = "Veuillez remplir les deux champs";
        return;
    }


    let AleaMin = Number(inputMin);
    let AleaMax = Number(InputMax);

    if (AleaMax < AleaMin) {
        pAlea.textContent = "Le nombre mini doit être inférieur au nombre max";
        return;
    }

    let result=Math.floor(Math.random()*(AleaMax - AleaMin +1)) + AleaMin;
    pAlea.textContent= "nombre aléatoire : " + result;
    
}

document.querySelector("#resultatAlea").addEventListener("click",nbAlea);


//==================================================================
//==================================================================
//exo 3 Vérificateur de mot de passe


let ex3=document.querySelector("#ex3");
let p=document.createElement("p");

p.style.color="blue";

ex3.appendChild(p);
function motDePasse(){
    let mdp=document.querySelector("#verifMdp").value;

    let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{5,9}$/; // améliorable



    if(!(regex.test(mdp) )){
        
        p.textContent="Le mot de passe ne remplit pas les conditions ci-dessus";

    }
    else{
        p.textContent="";
    }
}
document.querySelector("#resultatMdp").addEventListener("click",motDePasse);


//==================================================================
//==================================================================
//exo 4 Compteur de caractères dans un champ texte
let pp=document.createElement("p");
ex4=document.querySelector("#ex4");
ex4.appendChild(pp); //celui de l'exo 3, pour eviter d en creer en boucle

function countNbCaracteres(){
    let input=document.querySelector("#nbCaractere").value;
    pp.textContent="nombres de caractères :"+ input.length;
    
}
document.querySelector("#resultatnbCaractere").addEventListener("click",countNbCaracteres);

