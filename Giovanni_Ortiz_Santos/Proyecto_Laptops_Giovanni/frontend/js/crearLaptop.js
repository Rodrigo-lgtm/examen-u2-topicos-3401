const formulario = document.getElementById("formulario");
const inputMarca = document.getElementById("marca");
const inputModelo = document.getElementById("modelo");
const inputPrecio = document.getElementById("precio");

async function crearLaptop(evt) {
    evt.preventDefault(); 
    
    const marca = inputMarca.value;
    const modelo = inputModelo.value;
    const precio = Number(inputPrecio.value);

    try {
        
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ marca: marca, modelo: modelo, precio: precio })
        });

        if(respuesta.status === 200){
            inputModelo.value = ""
            inputMarca.value = ""
            inputPrecio.value = ""
            
            obtenerLaptop();
                Swal.fire({
                position: "bottom-end",
                icon: "success",
                text: "Laptop registrada correctamente",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }catch (error) {
            console.error(error);
            Swal.fire({ icon: "error", text: "Hubo un problema al guardar" });
    }
}

formulario.addEventListener("submit", crearLaptop);



