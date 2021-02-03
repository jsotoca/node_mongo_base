# NODE_MONGO_BASE

_Proyecto base REST API hecho con Node JS, Typescript, Express y Mongoose._

## Descripción 🚀

_Esta aplicación incluye el código y modulos necesarios para el despliegue de un proyecto Rest API incluyendo servicios de alojamiento de archivos de AWS S3 y envio de emails con Nodemailer._

Mira **Deployment** para conocer como desplegar el proyecto.


### Instalación 📋

_Despues de haber descargado o clonado el repositorio lo primero que tienes que hacer es instalar las dependencias necesarias_

```
npm init
```

_Antes de iniciar la aplicación necesitas crear un archivo .env en el root con la siguiente información_

```
APP_NAME            = el nombre de tu app
APP_URL             = la url de tu app 
APP_PORT            = el puerto de tu app para express
MONGO_URI           = la uri de tu mongodb
TOKEN_SECRET        = el secret para generar los tokens

MAIL                = el email desde donde se envia los emails
SMTP_HOST           = el host de tu servicio smtp
SMTP_PORT           = el puerto de tu servicio smtp
SMTP_SECURE         = false
SMTP_USER           = el usuario de tu servicio smtp
SMTP_PASSWORD       = La contraseña de tu usuario smtp

AWS_BUCKET          = el bucket de aws donde almacenaras tus archivos
AWS_LOCATION        = la localización del bucket
AWS_ACCESS_KEY_ID   = el access key id de tu aws
AWS_SECRET_KEY      = el secret key id de tu aws

COMPANY_NAME        = el nombre de tu empresa
COMPANY_ADDRESS     = la direccion de tu empresa
COMPANY_EMAIL       = el email de tu empresa
```

_Corriendo el proyecto en modo de desarrollo_

```
npm run dev
```

_Corriendo el proyecto en modo de produción_

```
npm run start
```

## Dependencias 🛠️

_Dependencias_

```
"aws-sdk": "^2.834.0",
"bcrypt": "^5.0.0",
"body-parser": "^1.19.0",
"compression": "^1.7.4",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"express-validator": "^6.9.2",
"helmet": "^4.4.1",
"jsonwebtoken": "^8.5.1",
"mongoose": "5.11.14",
"multer": "^1.4.2",
"nodemailer": "^6.4.17",
"uuid": "^8.3.2"
```

_Dependencias de desarollo_

```
"@types/bcrypt": "^3.0.0",
"@types/compression": "^1.7.0",
"@types/cors": "^2.8.9",
"@types/express": "^4.17.11",
"@types/jsonwebtoken": "^8.5.0",
"@types/multer": "^1.4.5",
"@types/nodemailer": "^6.4.0",
"@types/uuid": "^8.3.0",
"ts-node-dev": "^1.1.1",
"typescript": "^4.1.3"
```
## Autores ✒️

* **Juan Antonio Soto Cabrera** - *Desarrollador* - [jsotoca](https://github.com/jsotoca)


## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.