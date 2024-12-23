/*
const productos = [
  {
    id: 1,
    nombre: "LaberintoAzul",
    descripcion: "Album de estudio Laberinto Azul",
    imagen: "imagen-1.png",
    precio: 15000,
    stock: 1,
  },
  {
    id: 2,
    nombre: "AlmaAusente",
    descripcion: "Album de estudio Alma Ausente",
    imagen: "imagen-2.png",
    precio: 15000,
    stock: 120,
  },
  {
    id: 3,
    nombre: "Alpina",
    descripcion: "Disco en vivo Alpina Skate",
    imagen: "imagen-3.png",
    precio: 9000,
    stock: 180,
  },
  {
    id: 4,
    nombre: "BarUniversitario",
    descripcion: "Disco en vivo Bar Universitario",
    imagen: "imagen-4.png",
    precio: 9000,
    stock: 10,
  },
  {
    id: 5,
    nombre: "DVDAlpina",
    descripcion: "DVD en vivo Alpina Skate",
    imagen: "imagen-5.png",
    precio: 20000,
    stock: 10,
  },
  {
    id: 6,
    nombre: "Remera",
    descripcion: "Remeras",
    imagen: "imagen-6.png",
    precio: 17000,
    stock: 10,
  },
];
*/

let productos;
const cargarProductos = async () => {
  try {
    const response = await fetch("../productos.json");
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
