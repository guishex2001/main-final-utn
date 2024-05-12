

### Project setup
```
npm install
```

#### Run server
```
node app.js
```


El envio de mails esta configurado para que llegue un aviso a la hora de agregar un nuevo trabajo
para configurar el envio de mails nos dirigimos al archivos Jobscontroller.js y remplazamos el mail don quieres que te lleguen los avisos

```
// Envío de correo electrónico
    await transporter.sendMail({
        from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico del panel Feroso
        to: 'supraguille@gmail.com', // reemplazar mail donde quieras que te lleguen el aviso por mail
      subject: 'Nuevo trabajo creado',
      text: `Se ha creado un nuevo trabajo: ${title}`
    });
```
