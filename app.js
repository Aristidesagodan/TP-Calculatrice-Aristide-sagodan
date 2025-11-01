//Selection des éléments

//calcul complet
let calculatrice = document.querySelector('.calculation');
//le résultat des opérations
let resultat = document.querySelector('.result');
//les boutons de la calculatrice
let boutons = document.querySelectorAll('button');

//Variables

let contenu = ''; //contenu des opérations
let result = '';  //dernier résultat calculé
let egal = false; //alert sur le bouton egal

//fonction qui met à jour l'écran

function updateDisplay() {
  calculatrice.textContent = contenu;
  resultat.textContent = result || '0';
}


// Boucle qui ajoute un écouteur de clic sur chaque bouton

boutons.forEach(function (button) {
button.addEventListener('click', function () {
//ce dont contient le bouton
  let action = button.getAttribute('data-action'); 


/*fonction fléchée.
boutons.forEach(button => {
button.addEventListener('click', () => {
const action = button.getAttribute('data-action');*/

//1. Gestion chiffres & point
//si la valeur des boutons n'est pas un nombre ou un point
//le résultat ne fonctionnera pas.
    
if (!isNaN(action) || action === '.') {
    if (egal) {
    // reset : effacer tout pour recommencer un nouveau calcul
    contenu = '';
    result = '';
    egal = false;
    }
    // éviter deux points dans le même nombre
    let lastNumber = contenu.split(/[\+\-\*\/]/).pop();
    // si il y a déjà un point on ne fait rien
    if (action === '.' && lastNumber.includes('.')) return;
    //on ajoute le chiffre ou le point au calcul
    contenu += action;
    //l'affichage se fait au fur et à mesure
    result = contenu;
    updateDisplay();
  }

  // 2. Gestion opérateurs
    
  else if (['+', '-', '*', '/'].includes(action)) {
    if (egal) {
    egal = false;
    }
  //on ne peut pas commencer un calcul par un opérateur  
    if (contenu === '') return; 
  // Empêcher d’ajouter un opérateur si le 
  // calcul se termine déjà par un opérateur ou un "."
    if (contenu.endsWith('+') ||
        contenu.endsWith('-') ||
        contenu.endsWith('*') ||
        contenu.endsWith('/') ||
        contenu.endsWith('.')) {
        return;
    }
// On ajoute l’opérateur
contenu += action;
result = '';
updateDisplay();
}

// 3. Gestion du Égal (=)
  
else if (action === '=') {
  if (contenu === '') {
  return; // si rien n’est tapé, on ne fait rien
  }
// action pour empecher lecalcule si ça 
// se termine par un opérateur ou un "."
  if (contenu.endsWith('+') ||
      contenu.endsWith('-') ||
      contenu.endsWith('*') ||
      contenu.endsWith('/') ||
      contenu.endsWith('.')) {
  return;
  }  
  
try {
  //pour le calcul
  result = eval(contenu).toString(); 
  calculatrice.textContent = contenu + ' =';
  resultat.textContent = result;
  //code pour enchainer les calculs
  contenu = result; 
  egal = true;
  } catch {
  resultat.textContent = 'Erreur';
  }
}

// 4. reset complet (C)
else if (action === 'c') {
contenu = '';
result = '';
egal = false;
updateDisplay();
}

// 5. Effacer le dernier caractère (CE) 

else if (action === 'ce') {
  
  //pas de CE après un résultat
  if (egal) return; 
  
  //ce code me permet d'enlever le dernier caractère
  contenu = contenu.slice(0, -1);
  
  // si tout est vide cela m'affiche 0
  result = contenu || '0';
  updateDisplay();
  }
  });
});




/*1. eval

Ce que ça fait : eval() prend une chaîne de 
texte (string) et la fait exécuter comme du code JavaScript.

Exemple :

eval("2+3*4"); // retourne 14
eval("10/2");  // retourne 5


Dans ta calculatrice :
Quand l’utilisateur tape 12+7*2, c’est une chaîne 
de caractères (du texte).
→ eval(currentInput) permet de transformer "12+7*2" 
en un vrai calcul JavaScript et d’obtenir 26.

⚠️ Attention : eval() est pratique pour un petit 
projet, mais il peut être dangereux si quelqu’un 
tape du code malveillant à exécuter. Ici ce n’est 
pas grave, car tu contrôles l’interface 
(on ne peut taper que des chiffres et opérateurs).

2. try

Ce que ça fait : Le bloc try est un endroit 
où tu testes du code qui peut provoquer une erreur.

Si tout va bien → le code s’exécute normalement.

Si une erreur arrive → JavaScript saute 
directement dans le catch.

3. catch

Ce que ça fait : Le bloc catch s’exécute seulement si 
une erreur survient dans le try.

Il permet de gérer l’erreur proprement au lieu que ton 
programme plante.

Exemple simple (hors calculatrice)
try {
  var resultat = eval("2++3"); // code invalide, erreur !
  console.log(resultat);
} catch (e) {
  console.log("Il y a eu une erreur : " + e.message);
}


👉 Ici, comme "2++3" n’est pas un calcul valide, eval() 
lance une erreur.
Le catch récupère l’erreur et affiche un message au lieu 
de bloquer le programme.

Dans ta calculatrice

Dans ton code, tu as ceci :

try {
  result = eval(currentInput).toString(); // on tente de calculer
  calculationDisplay.textContent = currentInput + ' =';
  resultDisplay.textContent = result;
  currentInput = result;
  justCalculated = true;
} catch (e) {
  resultDisplay.textContent = 'Erreur'; // si le calcul est impossible
}


👉 Explication :

try : on tente de calculer avec eval(currentInput).

Si currentInput est valide (ex : "12/3+5") → pas de souci, 
on affiche le résultat.

Si currentInput est invalide (ex : "12++3" ou "5/") → 
une erreur apparaît.

Sans try/catch → ton programme crasherait.

Avec try/catch → l’erreur est attrapée et on affiche
 "Erreur" dans la calculatrice.

✅ En résumé pour ton projet :

eval → transforme le texte tapé par l’utilisateur 
en vrai calcul JavaScript.

try → tente d’exécuter le calcul.

catch → gère le cas où il y a une erreur de calcul 
(affiche "Erreur" au lieu de planter).*/