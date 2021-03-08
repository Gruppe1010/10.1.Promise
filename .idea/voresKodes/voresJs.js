/* OPGAVE TIL OS:
* Vi skal have inputfelter
* metode til trykknap som læser felterne og laver det til obj og så skal vi sende det afsted til db?
*
* HVORFOR laver vi ikke bare en form-med en submit-button? FORDI NÆNÆNÆNÆNÆ det må vi ikkeeeeee
* */


// vi gemmer vores inputfelter i const-vars
const inputName = document.getElementById("name");
const inputLocation = document.getElementById("location");
const inputBirthDate = document.getElementById("birthDate");
// vi gemmer vores pb i en var
const pbCreatePerson = document.getElementById("pbCreatePerson");

// vi opretter variabler, hvori vi gemmer det indtastede input fra input-felterne
let name;
let location;
let birthDate;

// vi henter værdier fra inputfelter ud
pbCreatePerson.addEventListener('click', retrieveInput);






// vi opretter et JSON-obj ud fra inputfelters værdier






