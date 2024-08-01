- Vamos a dividir en dos repositorios el Back y el Front.
- Aún no sé cómo vamos a hacer la base de datos.

-----// Todo el sistema de Login
-  El sistema nos mostrara el nombre y la edad de los alumnos, a parte de la clase en la que están matriculados.
- Cuando pulsamos en la mini ficha del alumno nos lleva a una con más detalles. En ella vemos más información de él.
- Tendrá un botón para contactar con él( por ejemplo su correo electronico) y otro para volver atrás.
- Mostrará el logo y el botón de login cambiará a log out.
- Mostrará una pantalla donde podremos poner nuestro usuario y contraseña. T

(BE) Endpoint GET propiedades
(FE) Componente Listado de propiedades

(FE) Componente Propiedad en detalle 
(FE) Header con logo y botón login
(BE) añadir filtros en la peticion GET propierties
(FE) Crear componente Filtro precio
(FE) componente Login
(BE) Endpoint POST para Login
(BE) Endpoint GET user


- Cuidado con el CORS

Datos  del Alumno:

{
    id:
    nombre:
    apellidos:
    instrumento:
    foto:
    email:
    telefono:
}

Profesor
{
    id:
    nombre:
    apellidos:
    instrumento:
    foto:
    email:
    telefono:
}


-----// ¿Qué vamos a instalar?
-   i
-   express //  node para crear APIs de forma más rápida
-   dotenv //   acceder a variables de entorno .env
-   body-parser    //   extraer la información
-   bcrypt  //  encriptar caracteres
-   jsonwebtoken    //  generar jwt
-   pg  // libreroa para conectarse a la base de datos
-   react-router-dom  // instala las rutas para poder navegar en nuestra web



vamos por el minuto 1h

Cuando entramos con nuestro usuario se nos ve un mensaje. "Estás a un paso de convertirte en Legenda"

1:23: CORS


mi estructura de carpetas:

FINALBOSS
/rocklegendsSchoolBack
    /controllers
        alumnoControllers.js
        userControllers.js
    /node_modules
    /routes
        alumnoRoutes.js
        userRoutes.js
    .env
    db.js
    db.sql
    index.js
    package-lock.json
    package.json
/rocklegendsSchoolFront
    /node_modules   
    /public
    /src
        /assets
        /components
            AlumnosBajo.jsx
            AlumnosBatería.jsx
            AlumnosGuitarra.jsx
            AlumnosVoz.jsx
            Bajo.jsx
            Bateria.jsx
            Combo.jsx
            Guitarra.jsx
            Header.jsx
            Portada.jsx
            Voz.jsx
        /context
            AlumnosContext.jsx
        App.css
        App.jsx
        index.css
        main.jsx
    .eslintrc.cjs
    .gitignore
    index.html
    notes.md
    package-lock.json
    package.json
    wite.config.js

// nuestra API

GET alumnos => /api/alumnos
[
    {
        id,
        nombre,
        apellidos,
        instrumento,
        foto,
        email,
        telefono
    }
]

POST/api/login

body:
{
    username,
    password
}

Responde:

{
    Token
    userid
}

GET user => /api/users/[id]/

Response:
{
    id,
    email,
    name
}