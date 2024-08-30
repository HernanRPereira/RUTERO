/* document.addEventListener("DOMContentLoaded", function () {
  botomBorrar();
});
 */
// Abrir modal
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "block";
});

// Cerrar modal
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none";
});

// Cerrar modal si se hace clic fuera de él
window.addEventListener("click", function (event) {
  var modal = document.getElementById("loginModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// !Abrir modal organizar
document.getElementById("openOrganizar").addEventListener("click", function () {
  document.getElementById("organizarModal").style.display = "block";
});
// Cerrar modal
document
  .getElementById("closeModalOrganizar")
  .addEventListener("click", function () {
    document.getElementById("organizarModal").style.display = "none";
  });
// Cerrar modal si se hace clic fuera de él
window.addEventListener("click", function (event) {
  var modal = document.getElementById("organizarModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// todo Agregar input add al dar click en el botom +:

const botonMas = document.getElementById("mas");

/* botonMas.addEventListener("click", (e) => {
  console.log(" ok");

  const divAgregar = document.querySelector(".add");
  const element = document.createElement("div");
  //*Incertar elemento en el html
  element.innerHTML += `
        <div class="divInsertado">
        <textarea cols="50" rows="20" class="detalles" required></textarea>
        <button class="delete" name="deleteDetalle">X</button>
        </div>
        `;
  divAgregar.appendChild(element);

  //!Borrar elemento:
  botomBorrar();
}); */

/* function botomBorrar() {
  const btnBB = document.querySelectorAll(".delete");
  btnBB.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("el wey funciona");
      btn.parentElement.remove();
    });
  });
} */

//!organizarBtn
const organizarBtn = document.querySelector("#organizarBtn");

organizarBtn.addEventListener("click", () => {
  //Todo Crear SITIO SECTION
  const divSitio = document.querySelector(".addSitio");
  const elementSitio = document.createElement("div");
  let idSitio = document.querySelector("#organizarLugar").value;
  if (idSitio != "") {
    let idSitioAInsertar = idSitio.replace(/\s/g, "");
    let addDetalles = idSitioAInsertar + "Detalle";
    let fecha = document.getElementById("organizarFecha").value;
    console.log(fecha);
    let wpp = document.getElementById("organizarWhatsapp").value;
    //*Incertar elemento en el html
    elementSitio.innerHTML += `
    <div  id="informacion${idSitioAInsertar}" class="sitio">
    <h2 id="${idSitioAInsertar}">lugar</h2>
    <h3 class="fecha">Día: <span>${fecha}</span></h3>
    <div class="carruselImg">
      <section class="reel">
        <a href="#"><img src="/media/antioquia001.jpg" alt="image"></a>
        <a href="#"><img src="/media/antioquia004.jpg" alt="image"></a>
        <a href="#"><img src="/media/antioquia003.jpg" alt="image"></a>
        </section>
    </div>
    <div class="fotoPerfil"></div>
    <div class="detalles">
    <h3>DETALLES: </h3>
        <div class="listaDetalles">
            <ul id="${addDetalles}">
                
            </ul>
        </div>
    </div>
    <div class="wpp">
    <h3><span>Participa: </h3>
    <h4></span><a href="${wpp}">${wpp}</a></h4>
    </div>
    `;
    divSitio.appendChild(elementSitio);

    //mostrar section sitios:
    document.getElementById("sitios").style.display = "block";


    addDatos(idSitioAInsertar, addDetalles, fecha); //***Funcion para incluir los datos del sitio */
  } else {
    alert("Agregar Lugar!");
  }
});

function addDatos(idSitioAInsertar, addDetalles, fecha) {
  let organizarLugar = document.querySelector("#organizarLugar").value; //*Valor del Lugar
  console.log(idSitioAInsertar);
  document.getElementById(idSitioAInsertar).innerHTML = organizarLugar;

  let organizarDetalles = document.querySelector(".detalles").value; //*Valor de Detalles

  const divDetalle = document.getElementById(addDetalles); //!insertar detalles
  const elementDetalle = document.createElement("div");
  elementDetalle.innerHTML += `
    <li class="detalleAgregado">${organizarDetalles}</li>
    `; //Cambiar li -> P
  divDetalle.appendChild(elementDetalle);

  const divCarta = document.querySelector(".rutas");
  const elementCarta = document.createElement("div");
  elementCarta.innerHTML += `
    <div class="cartas">
      <h3 class="lugarCarta">${idSitioAInsertar}</h3>
      <h3 class="fecha">Día: <span>${fecha}</span></h3>
      <h4>Detalles:</h4>
      <p class="cartaDetalle">${organizarDetalles}</p>
      <button href="#${idSitioAInsertar}" id="btnInformacion">+ Info</button>
    </div>
  `;

  divCarta.appendChild(elementCarta);

  document.getElementById("organizarModal").style.display = "none";

  //!Boton +INFO
  const btnInformacion = document.getElementById("btnInformacion");
  btnInformacion.addEventListener("click", (e) => {
    let idInformacion = "informacion" + organizarLugar;

    console.log(idInformacion);
    infoLugar = document.getElementById(idInformacion);
    console.log(infoLugar);
   
    infoLugar.style.display = "block"; 
  });
}

// !Abrir modal organizar
document.getElementById('openparticipar').addEventListener('click', function(){//
})



// Definición del objeto Evento
const Evento = {
  lugar: "",
  fecha: "",
  descripcion: "",
  // Método para imprimir la información del evento
  imprimirInformacion: function() {
    console.log(`Lugar: ${this.lugar}`);
    console.log(`Fecha: ${this.fecha}`);
    console.log(`Descripción: ${this.descripcion}`);
  }
};

// Ejemplo de uso
const evento1 = Object.create(Evento);
evento1.lugar = "Parque Central";
evento1.fecha = "2024-02-10";
evento1.descripcion = "Picnic comunitario en el Parque Central.";

const evento2 = Object.create(Evento);
evento2.lugar = "Teatro Municipal";
evento2.fecha = "2024-03-15";
evento2.descripcion = "Representación de la obra clásica 'Romeo y Julieta'.";

evento1.imprimirInformacion();
evento2.imprimirInformacion();