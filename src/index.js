const pokemonListUL = document.querySelector("#card_list")


function makeAllCards(pokemonDataList) {

    pokemonListUL.innerHTML = ""


    for(const pokemon of pokemonDataList) {
        console.log(pokemon.name)
        createCard(pokemon)
    }
}

function createCard(pokemonDataObject) {
    const newCard = document.createElement('li')
    newCard.classList.add("card", 'no-list-style');

    const cardHeading = document.createElement('h2')
    cardHeading.classList.add('card--text')

    cardHeading.textContent = pokemonDataObject.name.charAt(0).toUpperCase() + pokemonDataObject.name.slice(1)

    const cardImage = document.createElement('img')
    cardImage.classList.add('card--img')
    cardImage.setAttribute('src', pokemonDataObject.sprites.other["official-artwork"].front_default)


    const cardStatList = document.createElement('ul')
    for(const stat of pokemonDataObject.stats) {
        const statListItem = document.createElement('li')
        statListItem.classList.add('card--text', 'no-list-style')
        statListItem.textContent =  stat.stat.name.toUpperCase() + ": " + stat.base_stat
        cardStatList.appendChild(statListItem)
    }
    newCard.appendChild(cardHeading)
    newCard.appendChild(cardImage)
    newCard.appendChild(cardStatList)

    pokemonListUL.appendChild(newCard)
}


function main() {
    makeAllCards(data)
}

main()