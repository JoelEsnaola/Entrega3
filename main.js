class Curso{
  constructor(curso, precio) {
    this.curso = curso;
    this.precio = precio;
  }
}

const Curso1 = new Curso('Fundamentos del Desarrollo Web Front End', 'Precio: $200');
const Curso2 = new Curso('Desarrollo Avanzado con Tecnologías Emergentes', 'Precio: $200');
const Curso3 = new Curso('Desarrollo Interactivo con JavaScript y jQuery', 'Precio: $200');
const Curso4 = new Curso('Desarrollo Avanzado de Aplicaciones SPA con Vue.js', 'Precio: $200');
const Curso5 = new Curso('Arquitecturas Front End Escalables con GraphQL y Apollo ', 'Precio: $200');
const Curso6 = new Curso('Programación Reactiva con React.js para Principiantes', 'Precio: $200');

const cursosfrontArray = [Curso1, Curso2, Curso3, Curso4, Curso5, Curso6];

const Curso1Back = new Curso('Introducción al Back End','Precio: $200');
const Curso2Back = new Curso('Back End Profesional con Node.js','Precio: $200');
const Curso3Back = new Curso('Introducción al Desarrollo Serverless','Precio: $200');
const Curso4Back = new Curso('Fundamentos de Bases de Datos Relacionales para Desarrolladores','Precio: $200');
const Curso5Back = new Curso('Desarrollo de APIs RESTful con Express.js','Precio: $200');
const Curso6Back = new Curso('Arquitecturas Escalables para Aplicaciones Empresariales','Precio: $200');

const cursosbackArray = [Curso1Back, Curso2Back, Curso3Back, Curso4Back, Curso5Back, Curso6Back]

const cursoFront = document.getElementById('cursosFront');
const cursoBack = document.getElementById('cursoBack')
const allCursos = document.getElementById ('allCursos')
const contenedor = document.getElementById('Cursos');

const cursos = [
  Curso1, Curso2, Curso3, Curso4, Curso5, Curso6,
  Curso1Back, Curso2Back, Curso3Back, Curso4Back, Curso5Back, Curso6Back
];

cursos.forEach(curso => {
  
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('card7'); 
  
  tarjeta.innerHTML = `
    <h2>${curso.curso}</h2>
    <h3>${curso.precio}</h3>
    <button>Buy</button>
  `;
  contenedor.appendChild(tarjeta);
});

allCursos.addEventListener("click", () => {

  contenedor.innerHTML = ''
  cursos.forEach(curso => {
  
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card7'); 
    
    tarjeta.innerHTML = `
      <h2>${curso.curso}</h2>
      <h3>${curso.precio}</h3>
      <button>Buy</button>
    `;
    contenedor.appendChild(tarjeta);
  });
})


cursoFront.addEventListener("click", () => {
  
  contenedor.innerHTML = ''
  
  cursosfrontArray.forEach((x) => {
    const card = document.createElement('div');
    card.classList.add('card7');

    const cursoElement = document.createElement('h2');
    cursoElement.textContent = x.curso;
    cursoElement.classList.add('nombre');
    card.appendChild(cursoElement);

    const precioElement = document.createElement('h3');
    precioElement.textContent = x.precio;
    precioElement.classList.add('precio');
    card.appendChild(precioElement);

    const botonElement = document.createElement("button");
    botonElement.textContent = `BUY`;
    botonElement.id = 'buy';
    card.appendChild(botonElement);

    contenedor.appendChild(card);
  });
  localStorage.setItem('cursoComprado', JSON.stringify(cursosArray));
});

cursoBack.addEventListener("click", () => {
  
  contenedor.innerHTML = ''
  
  cursosbackArray.forEach((x) => {
    const card = document.createElement('div');
    card.classList.add('card7');

    const cursoElement = document.createElement('h2');
    cursoElement.textContent = x.curso;
    cursoElement.classList.add('nombre');
    card.appendChild(cursoElement);

    const precioElement = document.createElement('h3');
    precioElement.textContent = x.precio;
    precioElement.classList.add('precio');
    card.appendChild(precioElement);

    const botonElement = document.createElement("button");
    botonElement.textContent = `BUY`;
    botonElement.id = 'buy';
    card.appendChild(botonElement);

    contenedor.appendChild(card);
  });
  localStorage.setItem('cursoComprado', JSON.stringify(cursosArray));
});

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