let productos;
const cargarProductos = async () => {
  try {
    const response = await fetch("productos.json");
    productos = await response.json();
    mostrarProductos();
  } catch (error) {
    console.error(error);
  }
};

//cargarProductos();

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos");

listadoProductos.innerHTML = "<h2>Productos</h2>";

const mostrarProductos = () => {
  productos.forEach((producto) => {
    const html = `
        <br>
        <img src=${producto.imagen} width="100" height="100" alt="articulo en venta">
        <article data-id="${producto.id}">
          <h3 id="codigoprod">${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar</button>
        </article>
    `;

    listadoProductos.innerHTML += html;
  });
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar")) {
    const id = event.target.closest("article").dataset.id;

    const elemento = productos.find((producto) => producto.id == id);
    console.log(elemento);

    const { nombre, precio } = elemento;

    const producto = {
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    };

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});
