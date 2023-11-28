let boton = document.getElementById('allCursos')
let contenedor = document.getElementById('Cursos')



























// class Curso{
//     constructor(curso, precio) {
//        this.curso = curso;
//        this.precio = precio;
//      }
//    }

//    const Curso1 = new Curso('Fundamentos del Desarrollo Web Front End', 'Precio: $200');
//    const Curso2 = new Curso('Desarrollo Avanzado con Tecnologías Emergentes', 'Precio: $200');
//    const Curso3 = new Curso('Desarrollo Interactivo con JavaScript y jQuery', 'Precio: $200');
//    const Curso4 = new Curso('Desarrollo Avanzado de Aplicaciones SPA con Vue.js', 'Precio: $200');
//    const Curso5 = new Curso('Arquitecturas Front End Escalables con GraphQL y Apollo ', 'Precio: $200');
//    const Curso6 = new Curso('Programación Reactiva con React.js para Principiantes', 'Precio: $200');

//    const cursosfrontArray = [Curso1, Curso2, Curso3, Curso4, Curso5, Curso6];

//    const Curso1Back = new Curso('Introducción al Back End','Precio: $200');
//    const Curso2Back = new Curso('Back End Profesional con Node.js','Precio: $200');
//    const Curso3Back = new Curso('Introducción al Desarrollo Serverless','Precio: $200');
//    const Curso4Back = new Curso('Fundamentos de Bases de Datos Relacionales para Desarrolladores','Precio: $200');
//    const Curso5Back = new Curso('Desarrollo de APIs RESTful con Express.js','Precio: $200');
//    const Curso6Back = new Curso('Arquitecturas Escalables para Aplicaciones Empresariales','Precio: $200');

//    const cursosbackArray = [Curso1Back, Curso2Back, Curso3Back, Curso4Back, Curso5Back, Curso6Back]

//    const cursoFront = document.getElementById('cursosFront');
//    const cursoBack = document.getElementById('cursoBack')
//    const allCursos = document.getElementById ('allCursos')

// const contenedor = document.getElementById('Cursos');

//    const cursos = [
//      Curso1, Curso2, Curso3, Curso4, Curso5, Curso6,
//      Curso1Back, Curso2Back, Curso3Back, Curso4Back, Curso5Back, Curso6Back
//    ];

//    cursos.forEach(curso => {

//      const tarjeta = document.createElement('div');
//     tarjeta.classList.add('card7');

//     tarjeta.innerHTML = `
//        <h2>${curso.curso}</h2>
//        <h3>${curso.precio}</h3>
//        <button>Buy</button>
//      `;
//      contenedor.appendChild(tarjeta);
//    });

//    allCursos.addEventListener("click", () => {

//      contenedor.innerHTML = ''
//      cursos.forEach(curso => {

//        const tarjeta = document.createElement('div');
//        tarjeta.classList.add('card7');

//        tarjeta.innerHTML = `
//          <h2>${curso.curso}</h2>
//          <h3>${curso.precio}</h3>
//          <button>Buy</button>
//        `;
//        contenedor.appendChild(tarjeta);
//      });
//    })


//    cursoFront.addEventListener("click", () => {

//      contenedor.innerHTML = ''

//      cursosfrontArray.forEach((x) => {
//        const card = document.createElement('div');
//        card.classList.add('card7');

//       const cursoElement = document.createElement('h2');
//        cursoElement.textContent = x.curso;
//        cursoElement.classList.add('nombre');
//        card.appendChild(cursoElement);

//        const precioElement = document.createElement('h3');
//        precioElement.textContent = x.precio;
//        precioElement.classList.add('precio');
//        card.appendChild(precioElement);

//        const botonElement = document.createElement("button");
//        botonElement.textContent = `BUY`;
//        botonElement.id = 'buy';
//        card.appendChild(botonElement);

//        contenedor.appendChild(card);
//      });
//      localStorage.setItem('cursoComprado', JSON.stringify(cursos));
//    });

//    cursoBack.addEventListener("click", () => {

//      contenedor.innerHTML = ''

//      cursosbackArray.forEach((x) => {
//        const card = document.createElement('div');
//        card.classList.add('card7');

//        const cursoElement = document.createElement('h2');
//        cursoElement.textContent = x.curso;
//        cursoElement.classList.add('nombre');
//        card.appendChild(cursoElement);

//        const precioElement = document.createElement('h3');
//        precioElement.textContent = x.precio;
//        precioElement.classList.add('precio');
//        card.appendChild(precioElement);

//        const botonElement = document.createElement("button");
//       botonElement.textContent = `BUY`;
//        botonElement.id = 'buy';
//        card.appendChild(botonElement);

//        contenedor.appendChild(card);
//      });
//      localStorage.setItem('cursoComprado', JSON.stringify(cursos));
//    });