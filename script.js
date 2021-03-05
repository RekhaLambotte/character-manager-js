// objectfit pour l'image de la card

/*
const tpl = document.querySelector("#template-character");
const target = document.querySelector("#target");

document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("https://character-database.becode.xyz/characters");
        const character = await response.json();

        character.forEach(({name, alterEgo, abilities}) => {
            const elt = tpl.cloneNode(true).content;

            elt.querySelector(".card-title").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.appendChild(elt);
        });
});*/

// modal 


