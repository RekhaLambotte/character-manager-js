// Ajouter une card dans l'API REST
// il reste l'image à importer correctement

const inputs = Array.from(document.querySelectorAll("input"));
document.querySelector("#formAdd").addEventListener("click", async () => {
    const values = inputs.map(({value}) => value.trim());

    // if (values.some((value) => value === "")) {
    //     console.error("There's an empty input!");
    //     return;
    // }

    const [image, name, shortDescript, description] = values;

    const response = await fetch(`https://character-database.becode.xyz/characters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            image,
            name,
            shortDescript,
            description,
        }),
    });
    console.log(values)
    console.log(response)
    // const freshHero = await response.json();

    // console.log(freshHero);
});