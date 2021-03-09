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

  /*
  * Vi laver nogle specifikationer til vores request
  * */
  const requestOptions = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json', // betyder == vi sender et json i string-format
   },
   body: body
  };

  /* fetch == js-biblio som vi bruger til at sende en request
  fetch(url, requestOptions) == vi bruger nu fetch til at sende en request til url'en
    - og denne her url har vi lavet et endpoint på i vores 9.1.person-projekt
    - endpointet reagerer på en postRequest
  .then(reponse => reponse.json())
    - then gør at vi venter til vi har fået respons fra endpointet
    - response.json == NÅR vi har fået respons --> SÅ lav responset til json
  .then(data => {console.log("success: ", data);}
    - den venter på at det er lavet om til json, og så printer den

  vi bruger .then fordi fetch bliver udført asynkront
    - vi KAN optimere programmets performance ved at ting bliver gjort asynkront,
      fordi det åbner muligheden for at gøre andre ting mens vi venter på et resultat
   */

  fetch(url, requestOptions)
    .then(reponse => reponse.json())
    .then(data => console.log("succes: ", data))
    .catch(error => console.log("error: ", error));

  /*
  * i stedet for de forrige 2 linjer kunne vi også skrive:
  * .then(console.log)
  * .catch(console.log);
  * */

    console.log("Vibe spiser mad");
}

/*
* kan skrives på enten function-måden eller på lambda-måden
* her har vi skrevet det på lambda-måden
*
* */
const metode = (noget) => noget.json;



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
  // vi laver et object (JSON-obj er standard obj i js)
  let person = {
    "name": name,
    "location": location,
    "birthDate": birthDate
  };


  /* Vi laver JSON om til en String
     Fordi at body i requestOptions'en skal angives som string
   */

  return JSON.stringify(person);

}


















