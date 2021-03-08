let out = str => {console.log(str)};


function test(){
  /*
  * giveLøfte == vi har et promise -
  * når du er færdig med at udføre din funktion, får vi en value i hånden  så skriver vi "1st .." og returnerer "hello"
  * value kommer til at indeholde = resolve("START new Promise");
  * når man har et Promise-obj i hånden kan man kalde .then() på det
  *   når du er færdig med at udføre det der står i den første then's krop, så returner "Hello" som det næste then
  *   det obj som dannes i return "Hello" lægges ind i den næste value-var
  *   den næste then() bliver først udført når den første er blevet udført
  * */
  return givLøfte().then((value) => {
    console.log("1st then, inside test(): " + value);

    return "Hello";
  }).then((value => {
    out("2nd then, indide test(): " + value);
    return "world";
  })) //her returnerer vi et promise-obj
}


/* denne funktion returnerer promise-obj. - det er denne funktion som er den mystiske!
Denne funktion bliver kaldt FØRST
Promise-constructor tager en funktion som param
  denne funktion tager 2 param - 2 funktioner MERE
  når promise bliver lavet, så kalder den automatisk resolve-funktionen (erik er i tvivl)
  vi SKAL åbenbart skrive den der resolve for at vi får et Promise-obj

*/
function givLøfte(){
  /* Vi laver et nyt promise hvor vi har to funktioner i sig
  resolve == funktion hvis det går godt
    reject == funktion hvis det går dårligt
   */
  return new Promise(function(resolve, reject){
    resolve("START new Promise");
  });
}



// når vi har en funktion som returnerer et promise-obj, så kan man skrive:
out("Start");
test().then((value) => {
  console.log("3rd then, after calling test: " + value);
})

out("SLUT");

/*
FLOW af de 3 funktioner ovenover:
  FØRST nederst kalder vi then()-funktionen
  --> then()-metoden kalder givLøfte()-funktionen
Output for alt dette i consollen er:
  Start
  SLUT
  1st then, inside test(): START new Promise
  2nd then, indide test(): Hello
  3rd then, after calling test: world
*/
