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

const mainCardDiv = document.getElementById

let data;

async function getData() {
    fetch(carsData)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            data = createCard(result)

        })
        .catch((error) => console.error(error));

}


function createCard(data) {
    // console.log(data)

    let cardsContainer = document.getElementById('output');
    const cardBody = document.createElement('div');
    cardBody.classList.add("cards-container")

    data.forEach((key) => {
        // console.log(key)
        const carDiv = document.createElement('div')
        carDiv.classList.add("cars-card")

        const carBrand = document.createElement('h3')
        carBrand.textContent = key.brand

        const carModelsDiv = document.createElement('div')

        const carModels = document.createElement('p');
        carModels.classList.add("models-text")
        carModels.textContent = key.models

        carModelsDiv.append(carModels)
        carDiv.append(carBrand, carModelsDiv)
        cardBody.append(carDiv)

    });

    cardsContainer.append(cardBody)
    return cardsContainer
}

getData()

createCard()






