# HERA Cosmetica

HERA Cosmetica es un ecommerce que ofrece a la venta productos de belleza y cuidado femenino.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Capturas de Pantalla](#capturas-de-pantalla)
3. [Características](#características)
4. [Demo](#demo)
5. [Requisitos](#requisitos)
6. [Instalación](#instalación)
7. [Uso](#uso)
8. [Licencia](#licencia)

## Descripción

Este ecommerce ofrece a la venta productos de cuidado facial, corporal y capilar femenino. Posee una página principal con todos los productos, y la opción de filtrar por categorias en la barra de navegación.  

## Capturas de Pantalla

![Captura de Pantalla 1](public/img/captura-1.png)
![Captura de Pantalla 2](public/img/captura-2.png)
![Captura de Pantalla 3](public/img/captura-3.png)
![Captura de Pantalla 4](public/img/captura-4.png)
![Captura de Pantalla 5](public/img/captura-5.png)
![Captura de Pantalla 6](public/img/captura-6.png)

## Características

- Catálogo de productos capilares, corporales y faciales.
- Filtrado de productos por categorias
- Carrito de compras y proceso de pago.
- Registro de usuarios y autenticación.
- Generación de ordenes y manejo de los productos en firebase.

## Demo

Haz click en el enlace para ver la demo.

[Ver la Demo](public/video/demo.webm)

## Requisitos

Antes de comenzar a trabajar con este proyecto, asegúrate de cumplir con los siguientes requisitos:

- **Node.js y npm:** Debes tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

- **Git:** Se recomienda tener Git instalado para gestionar el control de versiones de tu proyecto. Puedes descargarlo desde [git-scm.com](https://git-scm.com/).


## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona este repositorio en tu máquina local utilizando Git: git clone https://github.com/Florencia-Harmath/hera-react.git.
2. Navega al directorio del proyecto: cd hera-project.
3. Instala las dependencias del proyecto utilizando npm: npm install.
4. Inicia la aplicación: npm run dev.
La aplicación debería estar disponible en el localhost, en tu navegador web.

## Uso

La sección principal de la página posee un listado de todos los productos que el emprendimiento ofrece, traidos desde la base de datos de firebase, firestore. Los datos para su utilización se encuentran en el archivo .env, que se encuentra en gitignore para cuidar los datos sensibles, las fotos se encuentran guardadas en el proyecto, en la carpeta public/img. La pagina posee una barra de navegación, donde tiene las opciones de filtrado de productos por categoria,  "Faciales" "Capilares" y "Corporales", la barra de navegación también posee un brand con el nombre del emprendimiento, que al clickearlo lleva a la pagina principal, todos los link creados con react-router-dom. Cada productCart posee la imagen, el precio, el boton de agregar al carrito con un contador que te permite agregar más de un producto sin exceder el limite del stock, y el nombre de cada producto, el cual es un link que al clickearlo lleva a la descripcion de cada uno en particular, donde aparece el detalle del producto, y la opción de agregarlo al carrito como en el productCart. Para agregar los productos, se clickea el boton "Agregar al carrito", se utilizó toastify para la notificación del producto agregado. Al agregar productos al carrito, aparece en el navbar el widget del carrito con la cantidad de productos agregados, su descripción, su precio y el total, también posee la opción de eliminar el producto, o eliminar de a un producto en caso de haber más, con el tacho de basura (react-icons). EL carrito posee tres botones, "vaciar carrito" "ver mas productos" y "realizar compra" Una vez seleccionados los productos deseados, se clickea en "realizar  comppra" donde hay un formulario con datos obligatorios que debe llenar el cliente y seleccionar el metodo de pago, una vez hecho, se muestra un cartel que dice que la compra fue exitosa, se muestra el detalle de la compra y un codigo de seguimiento que es el ID de la orden que al finalizar se genera en Firebase. 


## Licencia

Este es un proyecto con fines didácticos, por lo que no posee funcionalidad comercial, ni tampoco ofrece datos sensibles. Todos los productos son ficticios, no se puede utilizar con fines comerciales.

