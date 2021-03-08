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
let location1;
let birthDate;
const url = "http://localhost:8080/persons";

// vi henter værdier fra inputfelter ud
pbCreatePerson.addEventListener('click', insertPersonIntoDb);

// alt dette sker når vi trykker på knappen
function insertPersonIntoDb(){
  // vi henter værdier fra inputfelterne og sætter vores variabler
  retrieveInput();

  // vi opretter et JSON-obj ud fra inputfelters værdier
  body = createJSONPerson(name, location1, birthDate);
  console.log(body);

  const requestOptions = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: body
  };

  fetch(url, requestOptions)
    .then(reponse => reponse.json())
    .then(data => {
      console.log("success: ", data);
    })
    .catch(error => {console.log("error: ", error)});
}
/**
 * henter input fra input-felter og gemmer i de rette variabler
 * */
function retrieveInput(){
  name = inputName.value;
  location1 = inputLocation.value;
  birthDate = inputBirthDate.value;
}

/**
 * Opretter JSON-string ud fra name, location, birthDate
 *    p.s. birthDate SKAL angives i American = yyyy-mm-dd
 * */
function createJSONPerson(name, location, birthDate){
  // vi laver en javascrip object literal
  let person = {
    "name": name,
    "location": location,
    "birthDate": birthDate
  };

  // vi laver Javascript obj literal om til JSON
  return JSON.stringify(person);
}


















