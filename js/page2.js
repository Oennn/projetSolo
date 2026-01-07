//==================================================================
//==================================================================
//exo 1 
let pResult=document.querySelector("#result");
let pTries=document.querySelector("#tries");
let tries=1;
let rdm= Math.floor(Math.random() * 11)+1;

function mystere(){
    
    let RawInput=document.querySelector("#guess").value;
    let input=Number(RawInput);
    if(RawInput==="" || isNaN(input)){
         pResult.textContent="Oh lala ! ce n'est pas un nombre ça !";
         return;

    }

    
    else if(input<rdm){
        pResult.textContent="Trop petit !";
        
        pTries.textContent="nombre d'essais : "+ tries;
    }
    else if(input>rdm){
        pResult.textContent="Trop grand !";

        pTries.textContent="nombre d'essais : "+ tries;
    }
    else if(input===rdm){
        

        pResult.textContent="Bravo ! Tu as réussi en "+ tries+" essais !";
        pTries.textContent="nombre d'essais : "+ tries;

        document.querySelector("#btn").disabled = true;

    }
    tries+=1;


}

function retry(){
    tries=1;
    pResult.textContent="";
    pTries.textContent="";
    document.querySelector("#btn").disabled = false;
    rdm= Math.floor(Math.random() * 11)+1;
    
}

document.querySelector("#btn").addEventListener("click",mystere);
document.querySelector("#btnR").addEventListener("click",retry);

//==================================================================
//==================================================================
//exo 2
/*
let theme = document.querySelector(".theme");


//localStorage.setItem(cle, valeur);


function changementTheme(){
    if(theme.classList.contains("dark")){
        theme.classList.remove("dark");

        theme.classList.add("light");
        localStorage.setItem("theme", "light"); //sauvegarde la variable theme avec la chaine de caractère light

    }
    else{

        theme.classList.remove("light");

        theme.classList.add("dark");

        localStorage.setItem("theme", "dark");

    }




}
if(localStorage.getItem("theme") === "dark"){
    theme.classList.add("dark");
}
else{
    theme.classList.add("light");
}

document.querySelector("#themeBtn").addEventListener("click",changementTheme);
*/

let theme = document.querySelector(".light");



//localStorage.setItem(cle, valeur);


function changementTheme(){
    if(theme.classList.contains("dark")){
        theme.classList.remove("dark");

        theme.classList.add("light");
        localStorage.setItem("theme", "light"); //sauvegarde la variable theme avec la chaine de caractère light

    }
    else{

        theme.classList.remove("light");

        theme.classList.add("dark");

        localStorage.setItem("theme", "dark");

    }




}
theme.classList.remove("dark", "light") // pour éviter de galerer...
if(localStorage.getItem("theme") === "dark"){
    theme.classList.add("dark");
}
else{
    theme.classList.add("light");
}

document.querySelector("#themeBtn").addEventListener("click",changementTheme);

//==================================================================
//==================================================================
//exo 3 (fait avec chatgpt entièrement car je ne connaissais presque rien, ayant tjr pas accès a mon serveur web de la fac...)

const mots = ["Pomme", "Banane", "Orange", "Fraise", "Ananas", "Mangue"];
const input = document.querySelector("#ex3Input");
const dataListe = document.querySelector("#list");

function afficherListe(tab) {
    dataListe.textContent = "";
    tab.forEach(mot => {
        const option = document.createElement("option");
        option.value = mot;
        dataListe.appendChild(option);

    });
}

afficherListe(mots); //demarrage uniquement !

//user tape une lettre, la fonction se déclenche
input.addEventListener("input", suprLi);

function suprLi(){
    const recherche = input.value.toLowerCase();
    //liste de mots ayant recherche (passe la casse).
    const resultat = mots.filter(mot =>
        mot.toLowerCase().includes(recherche)
    );

    afficherListe(resultat);
}


function verifEntrer(event){
    if(event.key==="Enter"){
        let save=input.value;
        input.value="";
        let liASupprimer = document.getElementById(save);
        if (liASupprimer) {
            liASupprimer.remove();    
        }
    }
}
input.addEventListener("keydown",verifEntrer);


//==================================================================
//==================================================================
//exo 4 supprimer une ligne



const table = document.getElementById("tableau");

let inputT=document.getElementById("ex4Input");


function verifEntrer(event){
    if(event.key==="Enter"){
        let saveInput= inputT.value;
        inputT.value="";
        const lignes = table.querySelectorAll("tr");
        for (let i = 1; i < lignes.length; i++) {
            let celluleNom = lignes[i].querySelectorAll("td")[0]; // ligne i, colonne 0
            if (celluleNom.textContent.toLowerCase() === saveInput.toLowerCase()){
                lignes[i].remove();
                return;
            }
        }
        alert("pas trouvé");
    }
    
}
inputT.addEventListener("keydown",verifEntrer);
