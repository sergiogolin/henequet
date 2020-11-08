# Henequet brewery

Henequet Brewery es el nombre de una hipotética cervecería para la que he creado este frontend.\\
_Henequet es el nombre que se le daba en el Antiguo Egipto a un tipo de cerveza muy sencilla que se consumía a diario, y se puede hablar de ella como de una de las principales precursoras de la cerveza actual._

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
- Los datos mostrados se obtienen de la api pública:
```
https://punkapi.com/documentation/v2
```
- Por coherencia toda la aplicación se encuentra en idioma inglés, ya que la api solo devuelve los datos en inglés.
- Se ha incluido un menú con varias opciones de las que solo está activa la primera (Beers), con idea de poder expandir en un futuro la aplicación con otros tipos de bebida.
- Permite filtrar las cervezas por nombre y rango de fechas de elaboración.
- Permite filtrar por cervezas con/sin alcohol. Se consideran cervezas sin alcohol aquellas con un nivel de alcohol por debajo del 1% _(configurable desde la store)_.
- Al hacer clic en cualquiera de las cervezas, aparecerá una pantalla con una descripción pormenorizada de sus características.
- Se ha incluido un botón "Choose for me" que elegirá una cerveza al azar y mostrará sus características.

## Posibles mejoras
Hay varios aspectos susceptibles de ser mejorados en la aplicación:
- Hacer el entorno responsive para que se adapte automáticamente a distintos dispositivos.
- Validar el rango de fechas en el filtro.
- Incluir _spinners_ de carga mientras se cargan los datos de la api.
- Expandir los filtros para añadir nuevos campos por los que filtrar.
- Mejorar la paginación, para lo cual sería necesario que la api devolviera el total de resultados (ahora mismo no lo hace).
- Añadir notificaciones de éxito/error.
- Crear baterías de tests.
- Localizar a varios idiomas los textos de la aplicación.
