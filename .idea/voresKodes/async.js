let out = str => {console.log(str)};


/*
* Jeg vil gerne gøre noget synkront - derfor skal vi bruge asynch-keyword
 */


const sov = (ms) => {
  const prom = new Promise(dummyFunction => setTimeout(dummyFunction, ms));
  return prom;
}

/* når vi har brugt asynch keyword kan vi bruge await
Vi laver noget js-kode som står stille, så går den noget, og så går den videre
*/
const doSomethingAsync = async () => {
  console.log("111 før sjov");
  await sov(2000);
  console.log("111 færdig sov");

}


console.log("start");
// vi kalder nu den sov-funktion vi har lavet
doSomethingAsync();
console.log("slut");

/* Dette resulturer i outputtet:
start
slut
vi har sover
vi er klar til at fortsætte

 */


