let allCursos = document.getElementById('allCursos')
let frontCursos = document.getElementById('cursosFront')
let backCursos = document.getElementById('cursosBack')
let curso = document.getElementById('Cursos')

function llamar_allCursos () {
    fetch("./cursosAll.json")
    .then(response => response.json())
    .then(data => { 
        curso.innerHTML = '';

        data.forEach(cursoInfo => {
            const cursoActual = document.createElement('div');
            cursoActual.innerHTML = `
                <h2>${cursoInfo.Nombre}</h2>
                <p>${cursoInfo.Precio}</p>
            `;
            cursoActual.classList.add('card7')
            curso.appendChild(cursoActual);
        });
    }) 
}

document.addEventListener('DOMContentLoaded', () => {
    const curso = document.getElementById('Cursos');

    fetch("./cursosAll.json")
        .then(response => response.json())
        .then(data => { 
            curso.innerHTML = '';

            data.forEach(cursoInfo => {
                const cursoActual = document.createElement('div');
                cursoActual.innerHTML = `
                    <img src="${cursoInfo.imagen}" alt="x"> 
                    <h2>${cursoInfo.Nombre}</h2>
                    <p>${cursoInfo.Precio}</p>
                    <button>Buy</button>
                `;
                cursoActual.classList.add('card7')
                curso.appendChild(cursoActual);

                animarTarjeta(cursoActual);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

const animarTarjeta = (tarjeta) => {
    gsap.from(tarjeta, { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
};

allCursos.addEventListener('click', () => {
    const curso = document.getElementById('Cursos');

    fetch("./cursosAll.json")
        .then(response => response.json())
        .then(data => {
            curso.innerHTML = '';

            data.forEach(cursoInfo => {
                const cursoActual = document.createElement('div');
                
                cursoActual.innerHTML = `
                <img src="${cursoInfo.imagen}" alt="x"> 
                <h2>${cursoInfo.Nombre}</h2>
                <p>${cursoInfo.Precio}</p>
                <button>Buy</button>
                `;
                cursoActual.classList.add('card7')
                curso.appendChild(cursoActual);
                
                animarTarjeta(cursoActual);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

});

frontCursos.addEventListener('click', () => {
    const curso = document.getElementById('Cursos');

    fetch("./cursosFront.json")
        .then(response => response.json())
        .then(data => {
            curso.innerHTML = '';

            data.forEach(cursoInfo => {
                const cursoActual = document.createElement('div');
                
                cursoActual.innerHTML = `
                    <h2>${cursoInfo.Nombre}</h2>
                    <p>${cursoInfo.Precio}</p>
                    <button>Buy</button>
                `;
                cursoActual.classList.add('card7')
                curso.appendChild(cursoActual);
                animarTarjeta(cursoActual);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

backCursos.addEventListener('click', () => {
    const curso = document.getElementById('Cursos');

    fetch("./cursosBack.json")
        .then(response => response.json())
        .then(data => {
            curso.innerHTML = '';

            data.forEach(cursoInfo => {
                const cursoActual = document.createElement('div');
                
                cursoActual.innerHTML = `
                    <img src="${cursoInfo.imagen}" alt="x"> 
                    <h2>${cursoInfo.Nombre}</h2>
                    <p>${cursoInfo.Precio}</p>
                    <button>Buy</button>
                `;
                cursoActual.classList.add('card7')
                curso.appendChild(cursoActual);
                animarTarjeta(cursoActual);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const curso = document.getElementById('Cursos');

    const cargarYAnimarCursos = (consulta) => {
        fetch("./cursosAll.json")
            .then(response => response.json())
            .then(data => {
                curso.innerHTML = '';

                const resultados = data.filter(cursoInfo =>
                    cursoInfo.Nombre.toLowerCase().includes(consulta.toLowerCase())
                );

                resultados.forEach(cursoInfo => {
                    const cursoActual = document.createElement('div');

                    cursoActual.innerHTML = `
                        <img src="${cursoInfo.imagen}" alt="x"> 
                        <h2>${cursoInfo.Nombre}</h2>
                        <p>${cursoInfo.Precio}</p>
                        <button>Buy</button>
                    `;
                    cursoActual.classList.add('card7')
                    curso.appendChild(cursoActual);

                });
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    };

   

    const inputBusqueda = document.getElementById('busqueda');
    inputBusqueda.addEventListener('input', () => {
        const consulta = inputBusqueda.value.trim();
        cargarYAnimarCursos(consulta);
    });
});


    
