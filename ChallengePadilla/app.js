// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 

    * Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

    * Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    * Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    * Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

// Arreglo global que almacena los nombres de los amigos.
let nombres = [];

/**
 * Función que agrega un nombre a la lista de amigos.
 * Realiza varias validaciones: 
 * - Verifica que el campo no esté vacío.
 * - Verifica que el nombre solo contenga letras y espacios.
 * - Verifica que el nombre no se haya ingresado antes.
 */
function agregarNombreAmigo() {
// Obtener el valor del input donde el usuario ingresa el nombre
        let inputElement = document.getElementById('amigoNombre');
            let nombre = inputElement.value.trim();  

    // Validación: Verificar si el nombre está vacío
    if (!nombre) {
            alert('Por favor, ingresa un nombre');
                return;  
    }

    // Valida que el nombre contenga solo letras (mayúsculas, minúsculas) y espacios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!regex.test(nombre)) {
            alert('El nombre solo debe contener letras y espacios');
                return;  
    }

    // Validación: Verificar si el nombre ya está en la lista de amigos
    if (nombres.includes(nombre)) {
            alert('Ingresa otro nombre diferente, por favor');
                return;  
    }

    // Agregar el nombre a la lista de amigos.
        nombres.push(nombre);
    // Mostrar la lista actualizada en la consola para depuración.
        console.log(nombres);  

    // Llamar a la función para actualizar la lista de amigos en la interfaz.
        actualizarAmigos();

    // Limpiar el campo de texto para permitir agregar otro nombre si es necesario.
        limpiarCampo();
}

/*Función que limpia el campo de entrada de texto después de agregar un nombre.*/
function limpiarCampo() {
    // Obtener el campo de entrada de texto (input) en el DOM.
    let campo = document.querySelector('input');
        if (campo) {
    // Limpiar el valor del campo de entrada.
            campo.value = '';  
    }
}

/**
 * Función que actualiza la lista de amigos en la interfaz de usuario.
 * Se recorre el arreglo de 'nombres' y se agregan como elementos <li> en la lista HTML.
 */
function actualizarAmigos() {
    // Obtener el contenedor de la lista de amigos en el DOM.
    let lista = document.getElementById('listaAmigos');
        if (lista) {
        // Limpiar el contenido previo de la lista.
            lista.innerHTML = '';

        // Recorrer el arreglo de nombres y agregar cada uno como un <li> en la lista HTML.
        for (let i = 0; i < nombres.length; i++) {
             const li = document.createElement('li');
                li.textContent = nombres[i];  // Asignar el nombre al texto del <li>.
                    lista.appendChild(li);  // Agregar el <li> al contenedor de la lista en la interfaz.
        }
    }
}

/**
 * Función que realiza el sorteo del amigo secreto.
 * Elige aleatoriamente un nombre de la lista y lo muestra en la interfaz.
 */
function sortearAmigo() {
    // Validación: Verificar si hay al menos un nombre en la lista antes de hacer el sorteo.
    if (nombres.length === 0) {
            alert('Por favor, ingrese al menos un nombre antes de sortear');
                return;     
    }

    // Seleccionar un índice aleatorio dentro del rango de la lista de nombres.
    const index = Math.floor(Math.random() * nombres.length);
        const amigoSecreto = nombres[index];  // Obtener el nombre del amigo secreto seleccionado.

    // Obtener el contenedor donde se mostrará el resultado del sorteo en la interfaz.
    const ul = document.getElementById('resultado');
    if (ul) {
    // Limpiar cualquier resultado previo antes de mostrar el nuevo sorteo.
        ul.innerHTML = '';

    // Crear un nuevo elemento <li> para mostrar el nombre del amigo secreto sorteado.
             const li = document.createElement('li');
                    li.textContent = `Tu amigo secreto sorteado es: ${amigoSecreto}`;
                        ul.appendChild(li);  // Agregar el <li> al contenedor del resultado en la interfaz.

    // Añadir la clase 'salto' para aplicar una animación CSS al elemento <li>.
                            li.classList.add('salto');
    }

    // Si existe la función dispararConfete (definida en otro lugar), ejecutarla para efectos visuales (confetti).
        if (typeof dispararConfete === 'function') {
            dispararConfete();
    }

    // Limpiar el arreglo de nombres después de hacer el sorteo.
       nombres = [];
    // Actualizar la lista de amigos en la interfaz para reflejar que la lista ha sido vaciada.
        actualizarAmigos();
}