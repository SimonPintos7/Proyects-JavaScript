/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
const sobreMi = document.querySelector('#sobre-mi');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
window.addEventListener("keypress", visualizarTexto);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt("Introduzca su nombre: ");
  let edad = parseInt(prompt("Ingresa año en el que naciste: "));
  edad = 2023 - edad;
  const ciudad = prompt("Introduzca su ciudad actual: ");
  const interesPorJs = confirm("Le interesa JavaScript? ");
  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  if(interesPorJs) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  }
  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('.card-header #nombre').innerText = datosPersona.nombre;
  document.querySelector('.card-header #edad').innerText = datosPersona.edad;
  document.querySelector('.card-header #ciudad').innerText = datosPersona.ciudad;
  document.querySelector('.card-header #javascript').innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector('#fila');
  if(!fila.hasChildNodes()){
    for (let i = 0; i < listado.length; i++) {
      const div = document.createElement('div');
      div.classList.add('caja');
      const img = document.createElement('img');
      const paragraphLanguage = document.createElement('p');
      const paragraphBimest = document.createElement('p');
      img.setAttribute("src", `${listado[i].imgUrl}`);
      img.setAttribute("alt", `${listado[i].lenguajes}`);
      paragraphLanguage.innerText = `${listado[i].lenguajes}`;
      paragraphLanguage.classList.add('lenguajes');
      paragraphBimest.innerText = `${listado[i].bimestre}`;
      paragraphBimest.classList.add('bimestre');
      div.appendChild(img);
      div.appendChild(paragraphLanguage);
      div.appendChild(paragraphBimest);
      fila.appendChild(div);
    }
  }
};

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


function visualizarTexto(e){
  console.log(e)
  if(e.key == "f"){
    sobreMi.classList.remove('oculto');
  }
}
