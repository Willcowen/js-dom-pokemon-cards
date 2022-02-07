function createCard(pokemonName) {
    const ul = document.querySelector('.cards')

    //card as a list item
    const li = document.createElement('li')
    li.setAttribute('class', 'card')

    //pokemon name
    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'card--title')
    h2.innerText = pokemonName
    h2.innerText = h2.innerText.charAt(0).toUpperCase() + h2.innerText.substring(1)


    //pokemon image
    const img = document.createElement('img');
    img.setAttribute('class', 'card--img')


    //card text
    const cardText = document.createElement('ul')
    cardText.setAttribute('class', 'card--text')

    //li elements of card text
    const cardTextHP = document.createElement('li')
    cardTextHP.innerText = 'HP: '

    const cardTextAttack = document.createElement('li')
    cardTextAttack.innerText = 'ATTACK: '

    const cardTextDefense = document.createElement('li')
    cardTextDefense.innerText = 'DEFENSE: '

    const cardTextSpecialAttack = document.createElement('li')
    cardTextSpecialAttack.innerText = 'SPECIAL-ATTACK: '

    const cardTextSpecialDefense = document.createElement('li')
    cardTextSpecialDefense.innerText = 'SPECIAL-DEFENSE: '

    const cardTextSpeed = document.createElement('li')
    cardTextSpeed.innerText = 'SPEED: '

    for (let i = 0; i < data.length; i++) {
        const pokemon = data[i];
        if (pokemon.name === pokemonName) {
            img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default) 
        }
        const stats = pokemon.stats
        for (let j = 0; j < stats.length; j++) {
            if (pokemon.name === pokemonName) {
                if (stats[j].stat.name === "hp") {
            cardTextHP.innerText += stats[j]["base_stat"]
            }
            if (stats[j].stat.name === "attack") {
                cardTextAttack.innerText += stats[j]["base_stat"]
            }
            if (stats[j].stat.name === "defense") {
                cardTextDefense.innerText += stats[j]["base_stat"]
            }
            if (stats[j].stat.name === "special-attack") {
                cardTextSpecialAttack.innerText += stats[j]["base_stat"]
            }
            if (stats[j].stat.name === "special-defense") {
                cardTextSpecialDefense.innerText += stats[j]["base_stat"]
            }
            if (stats[j].stat.name === "speed") {
                cardTextSpeed.innerText += stats[j]["base_stat"]
            }
        }
    }
    }

    //appending
    ul.append(li)
    li.append(h2)
    li.append(img)
    li.append(cardText)
    cardText.append(cardTextHP)
    cardText.append(cardTextAttack)
    cardText.append(cardTextDefense)
    cardText.append(cardTextSpecialAttack)
    cardText.append(cardTextSpecialDefense)
    cardText.append(cardTextSpeed)
}

createCard('bulbasaur');
createCard('ivysaur');
createCard('venusaur');
createCard('charmander');
createCard('charmeleon');
createCard('charizard');
createCard('squirtle');
createCard('wartortle');
createCard('blastoise');
createCard('caterpie');
createCard('metapod');
createCard('butterfree');
createCard('weedle');
createCard('kakuna');
createCard('beedrill');
createCard('pidgey');
createCard('pidgeotto');
createCard('pidgeot');
createCard('rattata');
createCard('raticate');




