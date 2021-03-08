let out = str => {console.log(str)};


/*
* Man kan ikke umiddelbart bare skrive denne kode i js:
*
  * console.log("start");
  * sleep(2000);
  * console.log("slut");
*
* Derfor skriver vi noget kode som får det til at virke via Promise
*
* */

/*
* Vi bruger Promise til at sige:
* setTimeout = den stopper i antal ms
* Erik siger han ikke forstår hvad der står i denne
* */
const sov = (ms) => {
  const prom = new Promise(dummyFunction => setTimeout(dummyFunction, ms));
  return prom;
}

console.log("start");

/*
* det er et asynkront kald sov + then - fordi først er det sov() og derefter then()
*
* */
sov(2000).then( () => {
  console.log("vi har sovet");
  console.log("vi er klar til at forsætte");
});

console.log("slut")



