const url = 'https://rickandmortyapi.com/api';

window.onload = function() {
    const personajeID = document.getElementById("ingresarID");
    const cargarCallback = document.getElementById("cargarCallback").addEventListener("click", fetchJsonCallback);
    const cargarPromises = document.getElementById("cargarPromises").addEventListener("click", fetchJsonPromises);
    const cargarAsyncAwait = document.getElementById("cargarAsyncAwait").addEventListener("click", getCharacterWithAsyncAwait);
    const limpiar = this.document.getElementById("limpiar").addEventListener("click", limpiarDatos);
    const cargandoDatos = document.getElementById("cargandoDatos");
    // const identificador = this.document.getElementById("ingresarID").value;
}

//  CALLBACKS
function fetchJsonCallback() {
    fetch(url + '/character')
    .then(response => response.json())
        .then(JsonCallback)
        .catch(error => {
            // errorcallback(error);
            cargandoDatos.style.backgroundColor = "lightgray";
            cargandoDatos.style.borderColor = "gray"; 
            cargandoDatos.innerText = "ERROR | CALLBACK | "; 
        });
}
function JsonCallback(json) {
    const identificador = document.getElementById("ingresarID").value - 1;
    const personajeNombre = document.getElementById("Nombre");
    const especiePersonaje = document.getElementById("especie");
    const estadoPersonaje = document.getElementById("estado");
    const imagenPersonaje = document.getElementById("imagen");
    const origenPersonaje = document.getElementById("origen");
    const numeroEpisodiosPersonaje = document.getElementById("numeroEpisodios");
    const primerEpisodioPersonaje = document.getElementById("primerEpisodio");
    //alert(identificador);
    personajeNombre.innerText = json.results[identificador].name;
    especiePersonaje.innerText = "Especie: " + json.results[identificador].species;
    estadoPersonaje.innerText = "Estado: " + json.results[identificador].status;
    imagenPersonaje.src = json.results[identificador].image;
    origenPersonaje.innerText = "Origen: " + json.results[identificador].origin.name;
    numeroEpisodiosPersonaje.innerText = "Número de episodios: " + json.results[identificador].episode.length;
    primerEpisodioPersonaje.innerText = "Primer episodio: Episodio " + json.results[identificador].episode[0];
    const cargandoDatos = document.getElementById("cargandoDatos");
    cargandoDatos.style.backgroundColor = "lightgreen";
    cargandoDatos.style.borderColor = "green"; 
    cargandoDatos.innerText = "OK | CALLBACK | ";
}

//  PROMISES
function fetchJsonPromises() {
    const identificador = document.getElementById("ingresarID").value - 1;
    const cargandoDatos = document.getElementById("cargandoDatos");
    fetch(url + '/character')
    .then(response => response.json())
    .then(json =>{
        //const identificador = document.getElementById("ingresarID").value - 1;
        cargandoDatos.innerText = "CARGANDO | PROMISES";
        getCharacterWithPromises(identificador, json);
    })
    .catch(error => {
        cargandoDatos.innerText = "ERROR | PROMISES";
    });
}

function getCharacterWithPromises(identificador, json) {   
    const cargandoDatos = document.getElementById("cargandoDatos");

    const personajeNombre = document.getElementById("Nombre");
    const especiePersonaje = document.getElementById("especie");
    const estadoPersonaje = document.getElementById("estado");
    const imagenPersonaje = document.getElementById("imagen");
    const origenPersonaje = document.getElementById("origen");
    const numeroEpisodiosPersonaje = document.getElementById("numeroEpisodios");
    const primerEpisodioPersonaje = document.getElementById("primerEpisodio");
    cargandoDatos.innerText = "OK | PROMISES"
    cargandoDatos.style.backgroundColor = "lightgreen";
    cargandoDatos.style.borderColor = "green";    
    personajeNombre.innerText = json.results[identificador].name;
    especiePersonaje.innerText = "Especie: " + json.results[identificador].species;
    estadoPersonaje.innerText = "Estado: " + json.results[identificador].status;
    imagenPersonaje.src = json.results[identificador].image;
    origenPersonaje.innerText = "Origen: " + json.results[identificador].origin.name;
    numeroEpisodiosPersonaje.innerText = "Número de episodios: " + json.results[identificador].episode.length;
    primerEpisodioPersonaje.innerText = "Primer episodio: Episodio " + json.results[identificador].episode[0];
}
        
//  ASYNC - AWAIT
async function getCharacterWithAsyncAwait() {
    const cargandoDatos = document.getElementById("cargandoDatos");
    const identificador = document.getElementById("ingresarID").value - 1;
    const personajeURL = url + '/character';
    try {
        const cargarPersonajes = await fetch(personajeURL);
        const cargado = await cargarPersonajes.json();
        cargandoDatos.innerText = "OK | PROMISES"
        cargandoDatos.style.backgroundColor = "lightgreen";
        cargandoDatos.style.borderColor = "green";
        const personajeNombre = document.getElementById("Nombre");
        const especiePersonaje = document.getElementById("especie");
        const estadoPersonaje = document.getElementById("estado");
        const imagenPersonaje = document.getElementById("imagen");
        const origenPersonaje = document.getElementById("origen");
        const numeroEpisodiosPersonaje = document.getElementById("numeroEpisodios");
        const primerEpisodioPersonaje = document.getElementById("primerEpisodio");    
        personajeNombre.innerText = cargado.results[identificador].name;
        especiePersonaje.innerText = "Especie: " + cargado.results[identificador].species;
        estadoPersonaje.innerText = "Estado: " + cargado.results[identificador].status;
        imagenPersonaje.src = cargado.results[identificador].image;
        origenPersonaje.innerText = "Origen: " + cargado.results[identificador].origin.name;
        numeroEpisodiosPersonaje.innerText = "Número de episodios: " + cargado.results[identificador].episode.length;
        const episodio = cargado.results[identificador].episode[0];
        const cargarEpisode = await fetch(episodio);
        const  firstEpisode = await cargarEpisode.json();
        primerEpisodioPersonaje.innerText = "Primer episodio: Episodio " + firstEpisode.name;
        //primerEpisodioPersonaje.innerText = "Primer episodio: Episodio " + cargado.results[identificador].episode[0];
        
    } catch (error) {
        cargandoDatos.innerText = "ERROR | ASYNC/AWAIT | ";
        cargandoDatos.style.backgroundColor = "lightgray";
        cargandoDatos.style.borderColor = "gray"; 
    }
}

//  LIMPIAR
function limpiarDatos() {
    const identificador = 0;
    cargandoDatos.style.backgroundColor = "lightgray";
    cargandoDatos.style.borderColor = "gray"; 
    document.getElementById("cargandoDatos").innerText = "  | SIN DATOS  |  ";
    document.getElementById("Nombre").innerText = "";
    document.getElementById("imagen").src = "";
    document.getElementById("especie").innerText = "Especie";
    document.getElementById("estado").innerText = "Estado";
    document.getElementById("origen").innerText = "";
    document.getElementById("numeroEpisodios").innerText = "";
    document.getElementById("primerEpisodio").innerText = "";
    //document.getElementById("cargandoDatos").innerText = "";
}