// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos personas para el sorteo.");
        return;
    }

    let mezclados = [...amigos];
    let resultado = [];
    
    do {
        mezclados = amigos.slice().sort(() => Math.random() - 0.5);
    } while (amigos.some((amigo, i) => amigo === mezclados[i]));

    for (let i = 0; i < amigos.length; i++) {
        resultado.push(`${amigos[i]} → ${mezclados[i]}`);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach((asignacion) => {
        const li = document.createElement("li");
        li.textContent = asignacion;
        listaResultado.appendChild(li);
    });
}
