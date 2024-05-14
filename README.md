# Proyecto Final UTN

Este proyecto es una aplicación web desarrollada como parte de un proyecto final para la Universidad Tecnológica Nacional. Utiliza Node.js en el backend, React en el frontend, y Handlebars como motor de plantillas para generar vistas dinámicas en el servidor.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [Node.js official website](https://nodejs.org/).

## Configuración del Proyecto

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clonar el Repositorio

Primero, clona el repositorio a tu máquina local usando el siguiente comando:
```
git clone https://github.com/guishex2001/main-final-utn.git
```

### 2. Instalar Dependencias

Navega a las carpetas `client` y `server` en la terminal y ejecuta `npm install` en cada una para instalar las dependencias necesarias.
```
cd server npm install
```

```
cd ../client npm install
```
### 3. Configurar la Base de Datos

Configura la conexión con la base de datos editando el archivo `/server/config/db.js` con tus credenciales de la base de datos.

### 4. Motor de Plantillas Handlebars

Este proyecto utiliza Handlebars como motor de plantillas para generar el HTML del lado del servidor. Handlebars permite crear plantillas HTML de manera sencilla y eficiente. Para configurar Handlebars, se ha añadido la siguiente configuración en el archivo `server/app.js`:

```javascript
// Configurar Handlebars
app.engine('handlebars', exphbs.engine);
```

### 5. Levantar el Servidor

Para iniciar el servidor, ejecuta el siguiente comando en la carpeta `server`:

```
node app.js
```

### 6. Ejecutar el Cliente

Para iniciar la aplicación cliente, navega a la carpeta `client` y ejecuta el siguiente comando:


```
npm run dev
```
### (Opcional). Envio de Mails
 Configuración del Envío de Emails
El envío de emails está configurado para notificar cuando se agrega un nuevo trabajo. Para configurar el envío de emails, edita el archivo `server/controllers/Jobscontroller.js` y reemplaza el correo electrónico en el campo to con el correo donde deseas recibir las notificaciones:
```
await transporter.sendMail({
    from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico
    to: 'supraguille@gmail.com', // Reemplazar con el correo donde quieras recibir las notificaciones
    subject: 'Nuevo trabajo creado',
    text: `Se ha creado un nuevo trabajo: ${title}`
});

```
Autor
Guille García - Desarrollador Fullstack apasionado por la tecnología.

Esperamos que disfrutes utilizando este proyecto tanto como nosotros disfrutamos desarrollándolo.


Este `README.md` mejorado proporciona una guía paso a paso más clara para configurar y ejecutar el proyecto, incluyendo detalles sobre el motor de plantillas Handlebars, lo cual es útil para nuevos usuarios o colaboradores del proyecto.
