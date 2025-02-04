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

    const officialArtwork = pokemonDataObject.sprites.other["official-artwork"].front_default
    const dreamWorld = pokemonDataObject.sprites.other.dream_world.front_default

    cardImage.setAttribute('src', officialArtwork)

    cardImage.addEventListener('click', () => {
        if (cardImage.getAttribute('src') === officialArtwork) {
            cardImage.setAttribute('src', dreamWorld);
        } else {
            cardImage.setAttribute('src', officialArtwork)
        }
    })

    const cardStatList = document.createElement('ul')
    for(const stat of pokemonDataObject.stats) {
        const statListItem = document.createElement('li')
        statListItem.classList.add('card--text', 'no-list-style')
        statListItem.textContent =  stat.stat.name.toUpperCase() + ": " + stat.base_stat
        cardStatList.appendChild(statListItem)
    }

    const separator = document.createElement('hr');
    separator.classList.add('card-separator');

    const gameTitle = document.createElement('h3')
    gameTitle.textContent = 'Games:'
    gameTitle.style.cursor = 'pointer'

    const cardGameList = document.createElement('ul')
    cardGameList.style.display = 'none'

    for (const game of pokemonDataObject.game_indices) {
        const gameListItem = document.createElement('li')
        gameListItem.classList.add('card--text', 'no-list-style')
        gameListItem.textContent = game.version.name.toUpperCase()
        cardGameList.appendChild(gameListItem)
    }

    gameTitle.addEventListener('click', () => {
        cardGameList.style.display = cardGameList.style.display === 'none' ? 'block' : 'none'
    })

    newCard.appendChild(cardHeading)
    newCard.appendChild(cardImage)
    newCard.appendChild(cardStatList)
    newCard.appendChild(separator)
    newCard.appendChild(gameTitle)
    newCard.appendChild(cardGameList)

    pokemonListUL.appendChild(newCard)
}


function main() {
    makeAllCards(data)
}

main()