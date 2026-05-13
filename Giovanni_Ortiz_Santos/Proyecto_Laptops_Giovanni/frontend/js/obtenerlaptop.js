
const API_URL = "http://localhost:3000/laptops";

async function obtenerLaptop() {
    try {
        const respuesta = await fetch(API_URL);
        if (respuesta.status === 200) {
            const laptops = await respuesta.json();
            const tabla = document.getElementById("tabla");
            tabla.innerHTML = "";
            
            laptops.forEach(laptop => {
                tabla.innerHTML += `
                <li>
                    <div class="col-nombre">
                        <span>${laptop.marca}</span>
                    </div>
                    <div class="col-nombre">
                        <span>${laptop.modelo}</span>
                    </div>
                    <div class="col-precio">
                        <span>$${laptop.precio}</span>
                    </div>
                </li>
                `;
            });
        }
    } catch (error) {
        console.error(error);
    }
}

obtenerLaptop();