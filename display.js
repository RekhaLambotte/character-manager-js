// Afficher les cards dans la page
async function fet(){
    const tpl = document.querySelector("#template-character");
    const target = document.querySelector("#target");
    const response= await fetch("https://character-database.becode.xyz/characters")
    const allCharacter= await response.json()
    // console.log(allCharacter)

    allCharacter.forEach(({name, shortDescription, description,image}) => {
        const elt = tpl.cloneNode(true).content;

        elt.querySelector(".card-title").innerText = name;
        elt.querySelector(".short-description").innerText = shortDescription;
        elt.querySelector(".description").innerText = description;
        elt.querySelector("img").src = "data:image/gif;base64,"+image ;
        target.appendChild(elt);
    });
}

fet() // appel de la fonction d'affichage
