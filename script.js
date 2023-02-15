/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
console.log("veikia")

const carsData = './cars.json'

let data;


function getCarsData() {
    fetch(carsData)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

function createCard() {

}

getCarsData()

createCard()






