# Henequet brewery

_Henequet es el nombre que se le daba en el Antiguo Egipto al tipo de cerveza más sencilla que se consumía a diario, y se puede hablar de ella como de una de las principales precursoras de la cerveza actual._
Henequet Brewery es el nombre de una hipotética cervecería con la que he creado este frontend.

## Comenzando
Puedes clonar el proyecto con GIT, o descargarte el código comprimido y descomprimirlo en tu equipo local.

### Pre-requisitos
Para poder compilar el proyecto, necesitarás tener instalada una copia reciente de Node.js. 

### Instalación
Tras haber descargado o clonado el proyecto, ejecuta:
```
npm install
```

### Ejecución
```
npm run serve
```

### Compilar para pasar a producción
```
npm run build
```

## Características
Henequet Brewery tiene las siguientes características:
- Para obtener los datos, se ha usado la api pública:
```
https://punkapi.com/documentation/v2
```
- Toda la aplicación se encuentra en inglés, ya que la api solo devuelve los datos en inglés.
- Se ha incluido un menú con varias opciones de las que solo está activa la primera (Beers), con idea de poder expandir en un futuro la página con otros tipos de bebida.
- Permite filtrar las cervezas por nombre, rango de fechas de elaboración, y con/sin alcohol.
- Al hacer clic en cualquiera de las cervezas, aparecerá una pantalla con una descripción pormenorizada de sus características.
- Se ha incluido un botón "Choose for me" que elegirá una cerveza al azar y mostrará sus características.

## Posibles mejoras
Hay varios aspectos susceptibles de ser mejorados en la aplicación:
- Hacer el entorno responsive para que se adapte automáticamente a distintos dispositivos.
- Expandir los filtros para añadir nuevos campos por los que filtrar.
- Mejorar la paginación, para lo cual sería necesario que la api devolviera el total de resultados (ahora mismo no lo hace).
- Localizar a varios idiomas los textos de la aplicación.

<!-- ### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
