// Ajouter une card dans l'API REST
// il reste l'image à importer correctement.
// comment transformer une image : https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript

const inputs = Array.from(document.querySelectorAll("input"));
document.querySelector("#formAdd").addEventListener("click", async () => {
    const values = inputs.map(({value}) => value.trim());

    if (values.some((value) => value === "")) {
        console.error("There's an empty input!");
        return;
    }

    const [image, name, shortDescription, description] = values;

    const response = await fetch(`https://character-database.becode.xyz/characters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            image,
            name,
            shortDescription,
            description,
        }),
    });
    console.log(values)
    console.log(response)
});