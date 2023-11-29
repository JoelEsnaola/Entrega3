
const button = document.getElementById("button")
button.addEventListener(`click`, () => {
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Completo la nivelacion",
    showConfirmButton: false,
    timer: 1500
  });

})

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.level-up button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const questionContainer = button.closest('div');
          const buttonsInQuestion = questionContainer.querySelectorAll('button');

          buttonsInQuestion.forEach(btn => btn.classList.remove('clicked'));

          button.classList.add('clicked');
      });
  });
});

const enviarRespuestasButton = document.getElementById("button");
enviarRespuestasButton.addEventListener('click', () => {
  setTimeout(() => {
    analizarRespuestas2();
  }, 1550);

  setTimeout(() => {
    mostrarCursos()
  }, 1650);
});


function analizarRespuestas2() {
  const contenedores = document.querySelectorAll('form > div');
  let respuestasCorrectas = 0;

  contenedores.forEach(contenedor => {
    const respuestaSeleccionada = contenedor.querySelector('button.clicked');
    const esRespuestaCorrecta = respuestaSeleccionada && respuestaSeleccionada.id === 'trueRespuesta';

    if (esRespuestaCorrecta) {
      respuestasCorrectas++;
    }
  });

  localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));
};



function mostrarCursos() {
  const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas')) || 0;

  const contenedorCursos = document.getElementById('contenedor-cursos');

  contenedorCursos.innerHTML = '';

  const tituloElement = document.getElementById('titulo');
  tituloElement.classList.add('on');

  TweenMax.from(tituloElement, 1, { opacity: 0, y: -50, ease: Power2.easeOut });

  let cursos = [];
  
  if (respuestasCorrectas >= 0 && respuestasCorrectas <= 2) {
    cursos = [
      { 
        nombre: 'Desarrollo Web', 
        descripcion: 'Descubre el fascinante mundo del desarrollo web en este curso introductorio. Aprende a construir sitios web impresionantes desde cero, explorando los fundamentos de HTML, CSS y JavaScript. Este curso te guiará a través de proyectos prácticos para que adquieras habilidades prácticas y creativas.' 
      },
      { 
        nombre: 'Introducción a la Lógica de la Programación', 
        descripcion: 'Sumérgete en el núcleo de la programación con este curso básico. Aquí, no solo aprenderás a escribir código, sino que también entenderás cómo piensan los programadores. Desarrolla tu capacidad para resolver problemas y crea una base sólida para tu carrera en programación.' 
      },
      { 
        nombre: 'Introducción al Back End', 
        descripcion: 'Adéntrate en el corazón de la programación con este curso introductorio al desarrollo back end. Aprenderás a construir la parte funcional de las aplicaciones, trabajando con servidores, bases de datos y lógica empresarial. Obtén las habilidades necesarias para ser un desarrollador full-stack.' 
      }
    ];
  } else if (respuestasCorrectas >= 3 && respuestasCorrectas <= 4) {
    cursos = [
      { 
        nombre: 'Desarrollo Avanzado con Tecnologías Emergentes', 
        descripcion: 'Explora las últimas tecnologías en desarrollo web con este curso avanzado. Sumérgete en React, Vue y otras tecnologías emergentes que están transformando la forma en que construimos aplicaciones web. Desarrolla proyectos prácticos y mantente a la vanguardia de la tecnología.' 
      },
      { 
        nombre: 'Estrategias Avanzadas de Programación', 
        descripcion: 'Perfecciona tus habilidades de programación con estrategias avanzadas. Aprenderás técnicas y mejores prácticas que te convertirán en un programador altamente eficiente. Desde patrones de diseño hasta metodologías de desarrollo ágil, este curso te preparará para enfrentar desafíos complejos en el mundo de la programación.' 
      },
      { 
        nombre: 'Back End Profesional con Node.js', 
        descripcion: 'Conviértete en un profesional del desarrollo back end con Node.js. Este curso te llevará más allá de lo básico, enseñándote a construir aplicaciones robustas y escalables. Trabaja con bases de datos, APIs y autenticación para crear aplicaciones back end de alto rendimiento.' 
      }
    ];
  } else if (respuestasCorrectas === 5) {
    cursos = [
      { 
        nombre: 'Curso de Inteligencia Artificial', 
        descripcion: 'Sumérgete en el fascinante mundo de la inteligencia artificial con este curso completo. Descubre cómo las máquinas pueden aprender y tomar decisiones, y cómo puedes aplicar estos conocimientos en proyectos reales. Desde algoritmos de aprendizaje automático hasta aplicaciones prácticas, este curso te preparará para el futuro de la tecnología.' 
      },
      { 
        nombre: 'Desarrollo de Aplicaciones de Realidad Virtual', 
        descripcion: 'Crea experiencias inmersivas con realidad virtual. Este curso te llevará a través del proceso de desarrollo de aplicaciones de RV, desde la conceptualización hasta la implementación. Aprende a trabajar con entornos 3D, controladores de movimiento y tecnologías de vanguardia para llevar tus habilidades de desarrollo al siguiente nivel.' 
      },
      { 
        nombre: 'Seguridad Informática Avanzada', 
        descripcion: 'Protege sistemas y datos con técnicas avanzadas de seguridad. Conviértete en un experto en ciberseguridad y aprende a salvaguardar la información en un mundo digital. Desde pruebas de penetración hasta respuesta a incidentes, este curso te equipará con las habilidades necesarias para enfrentar los desafíos de la seguridad informática.' 
      }
    ];
  }
    const tl = gsap.timeline({ defaults: { duration: 0.5, opacity: 0, x: "-100%" } });
  
    cursos.forEach((curso, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<h2>${curso.nombre}</h2><p>${curso.descripcion}</p><button>Comprar</button>`;
      contenedorCursos.appendChild(card);
  
      tl.from(card, { delay: index * 0.2 });
    });
    
    tl.play();
   
}


let comments = document.getElementById('comments');
comments.innerHTML = '<h2>COMENTARIOS DE NUESTROS ALUMNOS</h2>';
comments.classList.add('centrado');

document.addEventListener('DOMContentLoaded', () => {
  cargarCards();

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  const form = document.getElementById('commentForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    agregarComentario();
  });
});

function cargarCards() {
  const contenedorCards = document.getElementById('contenedor-cardsjs');
  const cardsPreestablecidas = obtenerCardsPreestablecidas();
  const cardsDesdeLocalStorage = obtenerCardsDesdeLocalStorage();

  cardsPreestablecidas.concat(cardsDesdeLocalStorage).forEach(cardInfo => {
    const card = crearCard(cardInfo);
    contenedorCards.appendChild(card);
  });
}

function obtenerCardsPreestablecidas() {
  return [
    {
      nombre: "Jose",
      apellido: "Sosa",
      titulo: "Quede encantado con el curso de React",
      comentario: "Fue un curso muy basto de información, lo cual me ayudó mucho a progresar mis habilidades como programador. Excelente servicio por parte de Focus Security",
      fecha: "14/02/2023"
    },
    {
      nombre: "Joel",
      apellido: "Esnaola",
      titulo: "Introducción al Back End",
      comentario: "Muy bueno el curso. Hace tiempo que quería aprender back para poder ser Full stack y con esto mis comienzos en el back son geniales. Gracias Focus Security",
      fecha: "03/09/2023"
    },
    {
      nombre: "Maria",
      apellido: "Sosa",
      titulo: "Estoy comenzando en el mundo de la programación",
      comentario: "Soy iniciada en este mundo, salí de la secundaria sin saber qué estudiar y vi Focus Security y todos sus cursos de programación. Decidí arrancar y ahora estoy súper entusiasmada con mi progreso. 10 / 10 Focus Security",
      fecha: "23/11/2023"
    }
  ];
}

function obtenerCardsDesdeLocalStorage() {
  const cardsEnLocalStorage = JSON.parse(localStorage.getItem('cards')) || [];
  return cardsEnLocalStorage;
}

function crearCard(cardInfo) {
  const card = document.createElement('div');
  card.className = 'swiper-slide cardjs';
  card.innerHTML = `
      <div class="card1">
          <div class="usuario">
              <img src="./imgs/225-2255668_icono-iconos-de-personas-solas.png" alt="perfil">
              <p>${cardInfo.nombre} ${cardInfo.apellido}</p>
              <p>${cardInfo.fecha}</p>
          </div>
          <div class="comentario">
              <h2>"${cardInfo.titulo}"</h2>
              <p>${cardInfo.comentario}</p>
          </div>
      </div>
  `;
  return card;
}

function agregarComentario() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const titulo = document.getElementById('tituloComment').value;
  const comentario = document.getElementById('comentario').value;

  const nuevaCard = {
    nombre,
    apellido,
    titulo,
    comentario,
    fecha: obtenerFechaActual()
  };

  const cardsEnLocalStorage = obtenerCardsDesdeLocalStorage();
  cardsEnLocalStorage.push(nuevaCard);
  localStorage.setItem('cards', JSON.stringify(cardsEnLocalStorage));

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Gracias por tu comentario",
    showConfirmButton: false,
    timer: 1500
  });

  const contenedorCards = document.getElementById('contenedor-cardsjs');
  contenedorCards.innerHTML = '';
  cargarCards();

  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('tituloComment').value = '';
  document.getElementById('comentario').value = '';
}

function obtenerFechaActual() {
  const fecha = new Date();
  return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
}
