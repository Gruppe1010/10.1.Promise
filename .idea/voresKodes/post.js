let out = str => {console.log(str)};

// denne url gør at browseren sender en post-request som fanges af en postmapping i 9.1.person PersonRESTController
const minurl = "http://localhost:8080/persons";




//JSON-obj:
// name, location og birthDate refererer til hvordan vi har skrevet kolonne/attributnavnene i Spring-projektet -
let person1 = {
  "name": "Jens-Lars Larsen",
  "location": "Roskilde",
  "birthDate": "2021-02-10"
}

out(person1);

// det er denne body vi skal sende til vores server
let body1 = JSON.stringify(person1); // vi laver obj om til en string

out(body1);

/* fetch skal have en url og et requestOption-obj
  -->  vi får et reponse --> det laver vi til JSON --> vi printer den

  output == hver gang vi trykker f5 i browseren BURDE der blive indsat et nyt obj i db'en
 */

/*
* I et request-obj findes der det som hedder headers
*Det burde være ligemeget på rækkefølgen af alle disse ting i
* */
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  //mode: 'no-cors' // Erik ved ikke hvad der sker for denne - hvis man skrive cors må man ikke bruge JSON
  // denne linje er magien
  body: body1
};


/*
* "success: ", data == Vi SKAL skrive komma fordi så bliver det beregnet som 2 objekter for sig
*   hvis vi skriver plus vil den kun outputte: success: [object Object]
*
* */
fetch(minurl, requestOptions)
  .then(reponse => reponse.json())
  .then(data => {
    console.log("success: ", data);
  })
  .catch(error => {console.log("error: ", error)});


