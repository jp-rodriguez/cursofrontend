carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
  const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.precio}</td>
            <td><a href="http://127.0.0.1:5500/producto.html#codigoprod">Detalle</a></td>
            <td><button id="sumar">+</button></td>
            <td><button id="restar">-</button></td>
        </tr>
    `;

  items.innerHTML += html;
});

const boton = document.getElementById("comprarb");
boton.addEventListener("click", () => {
  if (confirm("¿Estás seguro de continuar?")) {
    alert("¡Has confirmado!");
  } else {
    alert("Has cancelado.");
  }
});

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let mensaje = document.getElementById("mensaje").value;

  let estado = true;

  if (nombre === "") {
    alert("Por favor, ingrese su nombre.");
    estado = false;
  } else {
    if (apellido === "") {
      alert("Por favor, ingrese su e-mail.");
      estado = false;
    } else {
      if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        estado = false;
      }
    }
  }

  return estado;
}

const botonv = document.getElementById("vaciarc");
botonv.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que desea vaciar el carrito?")) {
    alert("¡El carrito se ha vaciado!");
    localStorage.clear();
    location.reload();
  } else {
    alert("Has cancelado.");
  }
});

const botonsumar = document.getElementById("sumar");
botonsumar.addEventListener("click", () => {
  alert("Vas a sumar una unidad");
});

const botonrestar = document.getElementById("restar");
botonrestar.addEventListener("click", () => {
  alert("Vas a restar una unidad");
});
