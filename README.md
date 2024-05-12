1)clonar repositorio
2)instalar dependecias con "npm install" en las dos carpetas "client" y "server"
3)configurar conexion con la base de datos 
4)levantar servidor ejecutando en la terminal "node app.js" en la carpeta server
5)Ejecutar el cliente con el comando "npm run dev" en la carpeta client

Opcional: 
El envio de mails esta configurado para que llegue un aviso a la hora de agregar un nuevo trabajo para configurar el envio de mails nos 
dirigimos al archivo server/controllers/Jobscontroller.js y remplazamos el mail donde quieres que te lleguen los avisos

```
// Envío de correo electrónico
    await transporter.sendMail({
        from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico del panel Feroso
        to: 'supraguille@gmail.com', // reemplazar mail donde quieras que te lleguen el aviso por mail
      subject: 'Nuevo trabajo creado',
      text: `Se ha creado un nuevo trabajo: ${title}`
    });
```
