//  CALLBACK
function cargarCallback() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(JsonCallback);
    //alert("cargarCallback");    
}
function JsonCallback(json){
        //  BOTON 
        let spanModificar = document.getElementById("txtModificar");
        spanModificar.innerText = "CALLBACK";
        //  NOMBRE DEL POST
        let spanNombrePost = document.getElementById("txtNombrePost");
        spanNombrePost.innerText = json.title;
        //  ESTADO DEL POST
        let spanEstadoPost = document.getElementById("txtEstadoPost");
        if(json.completed){
            spanEstadoPost.innerText = "Completo";
        } else {
            spanEstadoPost.innerText = "Incompleto";
        }
        callbackError(Error);
} 

//  PROMISES
function cargarPromises() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(json =>{
            //  PROMISES
            let spanModificar = document.getElementById("txtModificar");
            spanModificar.innerText = "PROMISES";
            //  NOMBRE DEL POST
            let spanNombrePost = document.getElementById("txtNombrePost");
            spanNombrePost.innerText = json.title;
            //  ESTADO DEL POST
            let spanEstadoPost = document.getElementById("txtEstadoPost");
            if(json.completed) {
                spanEstadoPost.innerText = "Está completo";
            } else {
                spanEstadoPost.innerText = "Está incompleto";
            }
        })
        .catch(error => {
            reject(error);
        });
    })
    //alert("cargarPromises"); 
}

//  ASYNC-AWAIT
async function cargarAsyncAwait() {
    try {
        let cargar = await fetch('https://jsonplaceholder.typicode.com/todos/2');

        let cargado = await cargar.json();
        //  ASYNC - AWAIT
            let spanModificar = document.getElementById("txtModificar");
            spanModificar.innerText = "ASYNC - AWAIT";
            //  NOMBRE DEL POST
            let spanNombrePost = document.getElementById("txtNombrePost");
            spanNombrePost.innerText = cargado.title;
            //  ESTADO DEL POST
            let spanEstadoPost = document.getElementById("txtEstadoPost");
            if(cargado.completed) {
                spanEstadoPost.innerText = "completo";
            } else {
                spanEstadoPost.innerText = "incompleto";
            }
    } catch(error) {
        alert("ERROR");
    }
}

window.onload = function() {
    document.getElementById("Callbacks").addEventListener("click", cargarCallback);
    // document.getElementById("Callbacks").onclick = cargarCallback;
    document.getElementById("Promises").addEventListener("click", cargarPromises);
    document.getElementById("AsyncAwait").addEventListener("click", cargarAsyncAwait);
}
