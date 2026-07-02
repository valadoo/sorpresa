/* ============================================================
   CONFIGURACIÓN  —  edita SOLO esta parte
   ============================================================
   · Las fechas usan el formato:  new Date(año, MES-1, día, hora, min)
     ¡OJO! el mes va de 0 a 11  ->  julio = 6
   · Las cajas se desbloquean SOLAS al llegar su fecha.
   ============================================================ */
const CONFIG = {

  // 🎯 Fecha del viaje (cuenta atrás principal): 24 de julio 2026, 14:00
  fechaViaje: new Date(2026, 6, 24, 14, 0, 0),

  // 🖼️ Imágenes del carrusel y de los popups.
  //    Mete tus fotos en la carpeta /imagenes y pon aquí sus nombres.
  imagenes: [
    "imagenes/img1.JPG",
    "imagenes/img2.JPG",
    "imagenes/img3.JPG",
    "imagenes/img4.JPG",
    "imagenes/img5.JPG",
    "imagenes/img6.JPG",
    "imagenes/img7.JPG",
    "imagenes/img8.JPG",
    "imagenes/img9.JPG",
    "imagenes/img10.JPG",
    "imagenes/img11.JPG"
  ],

  // 🔓 Las 4 pistas. Se muestran en este orden (Braga = la última).
  //    icono: "huella" | "regalo" | "pin" | "cabana"  (dibujos SVG en tonos de la web)
  revelaciones: [
    {
      desbloqueo:      new Date(2026, 6, 3, 0, 20, 0),   // 3 de julio a las 00:20 (madrugada de hoy)
      colorBloqueado:  "#B08968",   // fondo mientras está bloqueada
      colorCuenta:     "#FDF8F3",   // color de la cuenta atrás (contraste)
      icono:           "huella",
      etiqueta:        "¡Ábreme!",
      titulo:          "¡No vamos solos!",
      cuerpo:          "Hace tiempo que me dijiste que querías que nos fuéramos con ellas a algún sitio, pues vete preparando sus maletas que se vienen con nosotros."
    },
    {
      desbloqueo:      new Date(2026, 6, 5, 14, 0, 0),   // en 3 días
      colorBloqueado:  "#9C6644",
      colorCuenta:     "#FDF8F3",
      icono:           "regalo",
      etiqueta:        "¡Ábreme!",
      titulo:          "Pista nº 2",
      cuerpo:          "(Aquí pondrás el texto que quieras revelar en esta pista.)"
    },
    {
      desbloqueo:      new Date(2026, 6, 8, 14, 0, 0),   // en 6 días
      colorBloqueado:  "#7F5539",
      colorCuenta:     "#FDF8F3",
      icono:           "pin",
      etiqueta:        "¡Ábreme!",
      titulo:          "Pista nº 3",
      cuerpo:          "(Aquí va otra pista sorpresa. Cámbiala cuando quieras.)"
    },
    {
      desbloqueo:      new Date(2026, 6, 14, 14, 0, 0),  // en 12 días
      colorBloqueado:  "#603808",
      colorCuenta:     "#FDF8F3",
      icono:           "cabana",
      etiqueta:        "¡Ábreme!",
      titulo:          "¿A dónde vamos?",
      cuerpo:          "¡Nos vamos a una cabaña en Braga! (edita este texto a tu gusto)."
    }
  ]
};

/* 🎨 Iconos SVG dibujados con los tonos de la web (nada de emojis) */
const ICONOS = {
  candado: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10h-1V8A5 5 0 0 0 7 8v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM9 8a3 3 0 0 1 6 0v2H9Zm3 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>`,
  huella:  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="15.6" rx="5.1" ry="4.2"/><circle cx="5.7" cy="10.4" r="2.1"/><circle cx="9.6" cy="7.3" r="2.2"/><circle cx="14.4" cy="7.3" r="2.2"/><circle cx="18.3" cy="10.4" r="2.1"/></svg>`,
  regalo:  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.25 2c-1.4 0-2.5.86-3.25 1.96C11.25 2.86 10.15 2 8.75 2A3.25 3.25 0 0 0 5.5 5.25c0 .64.19 1.24.51 1.75H4A1.5 1.5 0 0 0 2.5 8.5V11h8.25V7h2.5v4h8.25V8.5A1.5 1.5 0 0 0 20 7h-2.01c.32-.51.51-1.11.51-1.75A3.25 3.25 0 0 0 15.25 2Zm-6.5 2c.9 0 1.7.9 2.25 2H8.75a1 1 0 1 1 0-2Zm6.5 0a1 1 0 1 1 0 2H13c.55-1.1 1.35-2 2.25-2ZM2.5 12.5V20a2 2 0 0 0 2 2h6.25v-9.5H2.5Zm10.75 0V22h6.25a2 2 0 0 0 2-2v-7.5h-8.25Z"/></svg>`,
  pin:     `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>`,
  cabana:  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 9.3V5h-2.5v2.2L12 3 2.75 10.75h2.5V20a1 1 0 0 0 1 1H10v-6h4v6h3.75a1 1 0 0 0 1-1v-9.25h2.5L19 9.3Z"/></svg>`,
  arbol:   `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 6.5 9.5h2.75L4.5 16h5v4.5h5V16h5l-4.75-6.5h2.75L12 2Z"/></svg>`,
  corazon: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/></svg>`
};

/* ============================================================
   A partir de aquí no hace falta tocar nada
   ============================================================ */

/* 🧪 MODO PRUEBA: abre la web con  ?demo  al final de la URL
   (ej. index.html?demo) y verás todas las cajas ya desbloqueadas.
   Solo para que TÚ lo pruebes — no le pases ese enlace a ella 😉 */
const DEMO = new URLSearchParams(window.location.search).has("demo");

const pad = n => String(n).padStart(2, "0");

/* ---------- Cuenta atrás principal ---------- */
const el = {
  d: document.getElementById("cd-d"),
  h: document.getElementById("cd-h"),
  m: document.getElementById("cd-m"),
  s: document.getElementById("cd-s"),
  note: document.getElementById("hero-note")
};

function tickHero(){
  const diff = CONFIG.fechaViaje.getTime() - Date.now();
  if (diff <= 0){
    el.d.textContent = el.h.textContent = el.m.textContent = el.s.textContent = "00";
    el.note.innerHTML = `¡Ya estamos de viaje! ${ICONOS.arbol}${ICONOS.corazon}`;
    return;
  }
  const s = Math.floor(diff / 1000);
  el.d.textContent = pad(Math.floor(s / 86400));
  el.h.textContent = pad(Math.floor((s % 86400) / 3600));
  el.m.textContent = pad(Math.floor((s % 3600) / 60));
  el.s.textContent = pad(s % 60);
}

/* ---------- Tarjetas / pistas ---------- */
const grid = document.getElementById("reveals");

const cards = CONFIG.revelaciones.map(rev => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card locked";
  card.style.setProperty("--lock", rev.colorBloqueado);
  card.style.setProperty("--count", rev.colorCuenta);
  card.innerHTML = `
    <div class="card-lock">
      <span class="card-lockicon">${ICONOS.candado}</span>
      <span class="card-cd"></span>
    </div>
    <div class="card-open">
      <span class="card-icon">${ICONOS[rev.icono]}</span>
      <span class="open-label">${rev.etiqueta}</span>
    </div>`;
  card.addEventListener("click", () => {
    if (card.classList.contains("unlocked")) openPopup(rev);
  });
  grid.appendChild(card);
  return { rev, card, cd: card.querySelector(".card-cd") };
});

function cuentaCorta(diff){
  const s = Math.floor(diff / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (d > 0) return `${d}<small>días</small>`;
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(sec)}<small>para abrir</small>`;
  return `${pad(m)}:${pad(sec)}<small>para abrir</small>`;
}

function tickReveals(){
  const now = Date.now();
  cards.forEach(({ rev, card, cd }) => {
    const diff = DEMO ? -1 : rev.desbloqueo.getTime() - now;
    if (diff > 0){
      cd.innerHTML = cuentaCorta(diff);
    } else if (!card.classList.contains("unlocked")){
      card.classList.remove("locked");
      card.classList.add("unlocked", "just-unlocked");
      setTimeout(() => card.classList.remove("just-unlocked"), 1500);
    }
  });
}

/* ---------- Popup ---------- */
const modal      = document.getElementById("modal");
const modalImg   = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalBody  = document.getElementById("modal-body");

function imagenAleatoria(){
  const lista = CONFIG.imagenes;
  return lista[Math.floor(Math.random() * lista.length)];
}

function openPopup(rev){
  modalImg.src = imagenAleatoria();
  modalTitle.textContent = rev.titulo;
  modalBody.textContent  = rev.cuerpo;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closePopup(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("modal-close").addEventListener("click", closePopup);
modal.addEventListener("click", e => { if (e.target === modal) closePopup(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

/* ---------- Carrusel continuo ---------- */
const track = document.getElementById("carousel-track");

// Dos copias idénticas de las fotos: el track se desplaza exactamente el
// ancho de una copia (-50%) y el bucle queda sin saltos.
// Carga "eager": con lazy el navegador no carga las fotos que empiezan
// fuera de pantalla dentro de un track animado y salen huecos vacíos.
function crearGrupoCarrusel(){
  const group = document.createElement("div");
  group.className = "carousel-group";
  CONFIG.imagenes.forEach(src => {
    const img = document.createElement("img");
    img.className = "slide";
    img.src = src;
    img.alt = "";
    img.decoding = "async";
    img.addEventListener("error", () => img.remove());
    group.appendChild(img);
  });
  return group;
}
track.appendChild(crearGrupoCarrusel());
track.appendChild(crearGrupoCarrusel());

/* ---------- Bucle ---------- */
function tick(){ tickHero(); tickReveals(); }
tick();
setInterval(tick, 1000);
