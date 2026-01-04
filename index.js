
// bouton qui affiche un pop up
/*
let button = document.querySelector("#msg").addEventListener("click",function(){
    alert("bienvenu");
});
*/

document.querySelector("#msg").addEventListener("click",popUp); //si popUp(), s execute que au démarage
function popUp(){
    alert("bienvenu");
}
//modifie le texte du h1 si cliqué
document.querySelector("#h1modif").addEventListener("click",modifH1);
function modifH1(){
    let titre = document.querySelector("h1");
    titre.textContent="changé";
}

document.querySelector("#changerH1").addEventListener("click",userModif);

function userModif(){
    let texteRecup = document.querySelector("#nouveauTitre").value;
    let h1 = document.querySelector("h1");
    h1.textContent = texteRecup;

}

document.querySelector("#chiffre1").addEventListener("click",calcul);

function calcul(){
    let texteRecup1 = Number(document.querySelector("#oui1").value);
    let texteRecup2 = Number(document.querySelector("#oui2").value);
    let texteRecup3 = document.querySelector("#oui3").value;
    let result = document.querySelector("#resultat");

    if(texteRecup3=== "+"){
        let semiResult= texteRecup1 + texteRecup2;
        result.textContent= semiResult;
    };
    if(texteRecup3=== "-"){
        let semiResult= texteRecup1 - texteRecup2;
        result.textContent= semiResult;
    };
    if(texteRecup3=== "*"){
        let semiResult= texteRecup1 * texteRecup2;
        result.textContent= semiResult;
    };


}