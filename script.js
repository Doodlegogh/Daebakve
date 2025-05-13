const productos = [
  { nombre: "Producto A", precio: 10 },
  { nombre: "Producto B", precio: 15 },
  { nombre: "Producto C", precio: 20 }
];

const carrito = [];
let total = 0;

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  productos.forEach((producto, i) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button onclick="agregarAlCarrito(${i})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(indice) {
  const producto = productos[indice];
  carrito.push(producto);
  total += producto.precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");
  lista.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  totalSpan.textContent = total;
}

function enviarPedido() {
  let mensaje = "Hola, quiero hacer un pedido:%0A";
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} - $${item.precio}%0A`;
  });
  mensaje += `Total: $${total}%0A`;
  mensaje += "Nombre: [tu nombre]%0ADirección: [tu dirección]%0AForma de pago: [transferencia/Bizum/etc]%0A";
  mensaje += "Adjunto comprobante de pago.";
  const telefono = "34123456789"; // Cambia esto por tu número
  window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
}

mostrarProductos();
