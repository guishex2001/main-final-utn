# Proyecto Final UTN

Este proyecto es una aplicación web desarrollada como parte de un proyecto final para la Universidad Tecnológica Nacional (UTN). La aplicación permite a los usuarios visualizar información sobre el desarrollador, sus proyectos y tecnologías utilizadas.

## Características

- Visualización de perfil del desarrollador.
- Listado de proyectos y tecnologías utilizadas.
- Interfaz de usuario amigable y responsiva.

## Tecnologías Utilizadas

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Base de Datos:** MySQL
- **Envío de Emails:** Nodemailer

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clonar el Repositorio**

```bash
git clone https://github.com/guishex2001/main-final-utn.git
Instalar Dependencias
Navega a las carpetas client y server y ejecuta npm install en cada una para instalar las dependencias necesarias.

cd client
npm install
cd ../server
npm install
Configurar la Base de Datos
Configura la conexión a tu base de datos en el archivo /server/config/db.js.

Levantar el Servidor
En la carpeta server, ejecuta el siguiente comando para iniciar el servidor:

node app.js
Ejecutar el Cliente
En la carpeta client, inicia la aplicación React con:

npm run dev
Configuración Opcional
Envío de Emails: Para configurar el envío de emails, dirígete al archivo server/controllers/Jobscontroller.js y reemplaza el correo electrónico de destino en la función de envío de emails.
await transporter.sendMail({
    from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico
    to: 'tucorreo@example.com', // Correo electrónico donde quieres recibir los avisos
    subject: 'Nuevo trabajo creado',
    text: `Se ha creado un nuevo trabajo: ${title}`
});
Estructura del Proyecto
Cliente (client): Contiene el código fuente de la interfaz de usuario desarrollada con React y TailwindCSS.
Servidor (server): Incluye el backend desarrollado con Node.js y Express, junto con la configuración para el envío de emails y la conexión a la base de datos.
Contribuir
Si deseas contribuir a este proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un Pull Request para su revisión.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
