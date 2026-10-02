// Detección automática del huso horario y hora local del usuario
function obtenerHoraLocal() {
  const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  
  document.getElementById('hora-actual').textContent = `${hora}:${minutos}`;
  return hora;
}

// Función para construir cajas dinámicas en el DOM
function crearCajaInformacion(titulo, contenido, esEasterEgg = false) {
  const panel = document.getElementById("panel-informacion");
  panel.innerHTML = ""; // Limpia el contenido previo

  const caja = document.createElement("div");
  caja.className = esEasterEgg ? "caja-estilo-easteregg" : "caja-estilo-normal";

  caja.innerHTML = `
    <h3 style="margin-top:0;">${titulo}</h3>
    <p>${contenido}</p>
  `;

  panel.appendChild(caja);
}

// Inicialización de la app
document.addEventListener("DOMContentLoaded", () => {
  const horaActual = obtenerHoraLocal();

  // Ejemplo de construcción de caja dinámica inicial
  crearCajaInformacion(
    "Estado Circadiano Detectado", 
    `Sincronizado a las ${horaActual}:00 hrs. El sistema evaluará las variables neuroquímicas correspondientes.`,
    false
  );
});