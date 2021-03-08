let out = str => {console.log(str)};


/*
  Hvis vi skriver /perx == 404 http
  Hvis vi ændrer portnr. til noget forkert == har vi catchet den nede i fetch()-metoden
    den kommer altså til at skrive "fejl" i pop-uppen
 */
const minurl = "http://localhost:8080/pers";

const requestOptions = {
  'content-type': 'application/json',
  method: 'GET',
  redirect: 'follow'
  //mode: 'no-cors' // Erik ved ikke hvad der sker for denne - hvis man skrive cors må man ikke bruge JSON
};


/*
* For at køre dette skal vi først køre vores 9.1.person-projekt!!!!
*   Fordi det er det som minurl referer til
*
*
* fetch = den går ud i skyen og læser url og kommer med et response-obj
*   den går ud og læser vores webservice, og resultatet er et obj
*
* response.status == vi får en http kode ud - fx 200 = all is well
* response.statusText == BURDE give os en statusText, men han kunne ikke få den til at virke
*
*
* * flow af denne funktion ==
*   lav din fetch --> når du kommer tilbage, så return Hej --> derefter skriv "data" ud
*
* */
fetch(minurl, requestOptions)
  .then(response => {

    return response.status;
  }).catch(err => {console.log("err= " + err); return "fejl"; }) // vi catcher en fejl
  .then(alert); // først havde vi bare skrevet det ud i consollen (data => console.log(data));



