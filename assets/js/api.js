let contenedorPersonajes = document.getElementById("personajes");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const randomMeal = data.meals[0]; // Accede al primer elemento del array "meals"
        const contenedorCreado = document.createElement('div');

        contenedorCreado.innerHTML = `
            <h1>${randomMeal.strMeal}</h1>
            <h4>${randomMeal.strCategory}</h4>
            <h4>${randomMeal.strArea}</h4>
            <img src="${randomMeal.strMealThumb}">
            <h6>${randomMeal.strInstructions}</h6>
            
        `;

        contenedorPersonajes.appendChild(contenedorCreado);
    })
    .catch((error) => {
        console.error('Error al obtener datos:', error);
    });