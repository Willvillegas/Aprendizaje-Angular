# Aprendizaje Angular.

## Introducción
Este es un repositorio que formaré para crear un historial de mi aprendizaje con respecto a este framework de Angular.
Además en este README agregaré los enlaces hacia tutoriales útiles (tanto de youtube como de páginas webs) para ir aprendiendo de manera precisa de este "componente"

## Estructura del repositorio.
La estructura inicial de este repositorio es que cada carpeta sea un proyecto ya sea básico o avanzado de Angular. Luego existirá una carpeta llamada `Utils` que su objetivo es de almacenar archivos de word o pdf con cheatsheets con respecto Angular. Tambien en la misma carpeta existirá un posible readme con respecto a los enlaces los cheatsheets o de algo relevante con respecto a este "componente".


## ¿Cómo empiezo?

### Paso 1: Instalar Angular
Para iniciar el proyecto con Angular debe de tener instalado NodeJS, y usando npm instalamos lo siguiente:

`npm -g @angular/cli`

> (Recordar que se instala de forma global en la computadora) 

### Paso 2: Verificar instalación.
Para verificar si está instalado, usamos el siguiente comando:

`ng version`

Aparecerá la información de la version que tiene instalada en angular. Para este repo es la 18.

### Paso 3: Crear el proyecto.
Para crear el proyecto se coloca el siguiente comando en la terminal:

`ng new <Nombre del proyecto>`

Le realizará una serie de preguntas y luego creará los archivos iniciales del proyecto.....

### Cómo creo compoenetes?

Para generar un componente nuevo sería usar el siguiente comando:

`ng generate component <nombre del componente>`

O si no sabes que comando usar para crear el componente personalizado, coloca el siguiente comando:

`ng generate component --help`
## Tutoriales de Interés (Youtube)

### Midudev:

- [Tutorial Básico Angular](https://youtu.be/f7unUpshmpA?si=INCZedrtPI17jcMU)

### SergieCode:

- [Angular desde cero](https://www.youtube.com/watch?v=soInCF7nbDw)


## ¿Qué son los módulos?
Mecanismo de organización y de encapsulación de:
- Componentes
- Directivas
- Pipes
- Servicios
Todo esto, con el objetivo de dividir la aplicaciones en partes agrupadas facilitando la mantenibilidad y escalabilidad.

### ¿Cómo crear los módulos?
```sh
ng generate module <nombre-modulo>

o

ng g m <nombre-modulo>
```

## ¿Qué son los componentes?
Bloque fundamental de la aplicación para UI, responsables de definir cómo se ve y cómo se comporta ese elemento en la pantalla del usuario. Cada componente representa un elemento visual o funcional de la página, por ejemplo: Un pie de página, un formulario, una lista de elementos,etc...

### ¿Cómo crear los componentes?
```sh
ng generate component <nombre-componente>

o

ng g c <nombre-compoenente>
```

## Enlaces de datos (binding)
capacidad de conectar y sincronizar los datos entre el modelo(typescript) y la vista(html)
(ver diapositiva llamada: Angular Enviar información entre componentes.pptx)

## ¿Qué son los Servicios?
Clase de typescript que se utiliza para organizar y compartir lógica con los demás componentes 
(muy parecido a useContext de react)
### ¿Cómo generar un Servicio?
```sh
ng generate service <nombre-servicio>

O

ng g s <nombre-servicio>
```

## ¿Qué son dependencias?
Recursos externos y modulos de código que una aplicación necesita para funcionar correctamente (incluyen:
bibliotecas externas, módulos de Angular)se gestionan por medio de inyección de dependencias
### ¿cómo aplicarlo?
(se aplica por medio del constructor del componente se le agrega como parámetro(del servicio))