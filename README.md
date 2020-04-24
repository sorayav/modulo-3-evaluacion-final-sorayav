# Evaluación final del módulo 3 - Aplicación personajes de *Rick and Morty* en React

El ejercicio consiste en desarrollar una página web con un listado de personajes de *Rick and Morty*, que podemos filtrar por el nombre del personaje y de cuyo personaje obtendremos una página dedicada con su información. Usamos React para realizarlo.

## Listado de personajes

Para hacer el listado de personajes, usamos el servicio de [API de Rick and Morty](https://rickandmortyapi.com), en concreto el `/character` endpoint: https://rickandmortyapi.com/documentation/#get-all-characters. Este nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, mostramos la imagen, el nombre y la especie en la home de la web.

## Filtrado de personajes
La segunda parte del ejercicio consiste en poder buscarlos por nombre. Para ello, disponemos de un campo de búsqueda en la cabecera de forma que al ir escribiendo un nombre, la interfaz muestra solo los personajes cuyo nombre contiene las letras escritas en orden (independientemente de si están escritas en mayúsculas o minúsculas).
El botón `Clear` borra lo introducido en el campo de búsqueda.

## Detalle de personajes
Al hacer clic sobre la tarjeta de un personaje, su información aparece a pantalla completa. Para hacer esto hemos implementado `React router`. La pantalla de detalle muestra, además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
El botón `Go back` retornará a la pantalla anterior: si se ha accedido al detalle del personaje después de buscar un nombre en el campo de búsqueda, se volverá a la página de resultados del nombre.

## Detalles de la aplicación
- Si estando en el campo de filtrado pulsamos intro, el navegador no navega ni cambia la ruta.
- Si se busca un texto y no hay ningún personaje que coincida con dicho texto, se muestra una nueva página con el error.
- Las URLs son compartibles, es decir, si visitamos esa URL directamente en el navegador, se muestra el detalle del personaje. De igual forma, si dicha página no existe, se carga una página 404 de no encontrado.