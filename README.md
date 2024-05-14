Personal Portfolio Project
Este proyecto es un portafolio personal desarrollado utilizando tecnologías de desarrollo web tanto en el lado del cliente (frontend) como en el servidor (backend).

Tecnologías Utilizadas
Frontend
React: Utilizado para construir una interfaz de usuario interactiva, organizada en componentes como:
Dashboard: Panel principal del portafolio.
ProfileCard: Muestra información personal.
TechStackCard: Lista las tecnologías utilizadas.
JobsPage: Gestiona ofertas de trabajo.
Backend
Express.js: Maneja las solicitudes HTTP, interactúa con la base de datos para operaciones CRUD (crear, leer, actualizar, eliminar) sobre trabajos, y envía correos electrónicos al agregar nuevos trabajos.
Handlebars: Motor de plantillas utilizado en el servidor Express.js para generar HTML dinámico.
Configuración del Proyecto
Clonar el Repositorio
bash
Copiar código
git clone https://github.com/guishex2001/main-final-utn.git
Instalar Dependencias
Ejecutar el siguiente comando en las carpetas "client" y "server":

bash
Copiar código
npm install
Configurar Conexión con la Base de Datos
Editar el archivo /server/config/db.js con los detalles de la conexión a la base de datos.

Levantar el Servidor
Ejecutar el siguiente comando en la carpeta "server":

bash
Copiar código
node app.js
Ejecutar el Cliente
Ejecutar el siguiente comando en la carpeta "client":

bash
Copiar código
npm run dev
Configuración Opcional: Envío de Correos Electrónicos
El envío de correos electrónicos está configurado para notificar cuando se agrega un nuevo trabajo. Para configurar el envío de correos, edite el archivo server/controllers/Jobscontroller.js y reemplace la dirección de correo electrónico en el siguiente bloque de código:

javascript
Copiar código
// Envío de correo electrónico
await transporter.sendMail({
    from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico
    to: 'supraguille@gmail.com', // Reemplazar con la dirección de correo deseada
    subject: 'Nuevo trabajo creado',
    text: `Se ha creado un nuevo trabajo: ${title}`
});
Resumen
Este portafolio personal es una aplicación web completa que demuestra habilidades en desarrollo full stack, utilizando React para el frontend, Express.js y Handlebars para el backend, y otras tecnologías como CSS para estilos y Axios para solicitudes HTTP. Este proyecto incluye instrucciones detalladas para su configuración y ejecución, proporcionando una base sólida para la presentación de proyectos y habilidades personales.
