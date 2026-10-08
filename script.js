const formulario = document.getElementById("formPedido");
const mensaje = document.getElementById("mensaje");

function validarFormulario() {
  const nombre = formulario.nombre.value.trim();
  const direccion = formulario.direccion.value.trim();
  const celular = formulario.celular.value.trim();

  if (nombre === "") {
    return { valido: false, error: "Ingresa tu nombre." };
  }
  if (direccion === "") {
    return { valido: false, error: "Ingresa tu dirección." };
  }

  if (!/^[0-9]{9}$/.test(celular)) {
    return {
      valido: false,
      error: "El celular debe tener exactamente 9 dígitos numéricos.",
    };
  }

  return { valido: true, nombre: nombre };
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const resultado = validarFormulario();

  if (!resultado.valido) {
    mensaje.className = "error";
    mensaje.textContent = resultado.error;
    return;
  }

  boton.disabled = true;
  boton.textContent = "Enviando...";
  mensaje.className = "";
  mensaje.textContent = "";

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const resultado = validarFormulario();

    if (!resultado.valido) {
      mensaje.className = "error";
      mensaje.textContent = resultado.error;
      return;
    }

    mensaje.className = "exito";
    mensaje.textContent = "Pedido recibido, " + resultado.nombre;
    formulario.reset();
  });
});
