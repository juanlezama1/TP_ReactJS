# TRABAJO PRÁCTICO FINAL - REACT JS
# Juan Pablo Lezama

La página web consiste en un e-commerce de un local de videojuegos. 
Se comercializan tanto juegos como periféricos/accesorios.

Originalmente se había diseñado sólo utilizando una API que encontré llamada "RAWG". Al parecer es la base de datos más grande de videojuegos que hay.

La misma es una API paga, y hay que registrarse para usarla. Sin embargo brinda un token que tiene un límite gratuito de 20.000 consultas mensuales, que es el que se utiliza en el proyecto.

Luego, se incorporó la parte de los accesorios/periféricos ya que en el curso se pidió utilizar FireStore/FireBase como base de datos. Ahí cargué unos 15/20 productos.

## Uso de la página

## Sección videojuegos
- La página inicial te trae 12 videojuegos random, en caso de hacer click abajo en "Ver más juegos", te trae 12 más.

- En el navbar hay un buscador donde se pueden buscar juegos mediante alguna clave "fifa", "gta", "batman", etc. Dentro de esa misma búsqueda, se puede seguir utilizando el botón de "Ver más juegos"

- Los videojuegos también se pueden filtrar por plataforma/consola o por género/estilo. Esto se hace entrando en la sección CATEGORÍAS -> JUEGOS POR CONSOLA -> JUEGOS POR GÉNERO ó JUEGOS POR PLATAFORMA.
De esa manera todos los juegos que te traiga la página pertenecerán a esa plataforma ó a ese estilo.

- Dentro de cada videojuego te lista la información del mismo (fotos, descripción, puntaje del videojuego, en qué plataformas existe, etc.)

- En la sección de compra podés agregar los juegos al carrito (se listan SÓLO las consolas que ese juego admita y los precios que figuran son random).
No deja agregar cantidades iguales a 0.

- También podés comprarlos directamente (borrar cualquier carrito e ir directamente al checkout)

## Sección periféricos

Es bastante más sencilla que la sección de videojuegos. 

- Incluye todos los periféricos que generé en la base de datos de FireStore, y existe la posibilidad de unir los elementos al carrito. 

- La cantidad que podés comprar varía entre 1 y el stock máximo que tenga ese producto. En el caso de querer 'engañar' a la página y agregar más elementos al carrito, la página lo detecta. (Ej: 3 unidades en stock y primero agrego 2 unidades al carrito y luego agrego 2 unidades más)

## Sección carrito

- El carrito va mostrando la cantidad TOTAL de productos/juegos con un numerito arriba.
- No hay problema en mezclar videojuegos + periféricos en el mismo carrito
- Se agregaron unos impuestos, fotos de métodos de pago y checkbox de publicidades sólo a modo de ejemplo.
- Se realizan las validaciones de que los 3 campos del formulario estén completos y que el campo de 'email' tenga el formato correcto.
- El carrito tiene un template en caso que se ingrese y aún no haya elementos cargados.
- Se pueden borrar los elementos desde el tachito de basura.
- Una vez que se procesa la orden, se devuelve el ID generado tanto por pantalla como en un QR. La orden se carga en la base de FireStore

## Detalles y aclaraciones menores

- La sección de LOG-IN sólo está a modo de ejemplo
- Los links a RRSS funcionan, el chat de Whatsapp también (es mi celular particular)
- Se se intenta acceder a una sección inexistente ('/jasklfdjf') saltará una página de error.
- Si se intenta acceder a ('order_confirmation') también saltará una página de error.
Ésto último se debe a que esa página renderiza el componente que carga la orden en FireBase y primero debe validar que efectivamente exista una orden para evitar errores con la API
- Por último, si se intenta acceder al carrito y este está vacío también saltará una pantalla de aviso.
- Hay un mínimo bug que no pude descubrir pero que no afectaba tanto al funcionamiento que es el siguiente:
Desde la sección videojuegos, cuando se selecciona una cantidad (ej: 2 licencias para Mario Kart versión GameBoy) y se agrega a carrito/se compra directamente no hay problema.
Sin embargo, si selecciono 2 licencias, las agrego al carrito, y luego quiero agregar 2 más me da error. Es como que obligatoriamente tengo que cambiar el número para que no lo tome como cero.
Es decir, tendría que poner 2 (agregar al carrito) -> 3 -> 2 (agregar al carrito)
Si presiono 2 veces el mismo número el segundo me da como si estuviera poniendo un cero. No llegué a depurar ese caso puntual.

- Por una cuestión de tiempo no llegué a comentar/emprolijar todos los componentes.
Planeo hacerlo ya que la página me puede servir como portfolio a futuro.
## Espero que les guste, saludos!