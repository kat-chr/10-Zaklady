console.log("JavaScript funguje!");
console.log(  Math.floor(Math.random()*100)  );

/*
let mojeBarvaVlasu = prompt( "Zadejte svoji barvu vlasu" );
*/

function pozdrav() {
    console.log("Ahoj");
}

let rok = prompt("zadej svuj rok narozeni");
let dnesniDatum = new Date();
pozdrav();
let stari = dnesniDatum.getFullYear() - rok; 
console.log("Uzivatel ma " + stari + " let");



