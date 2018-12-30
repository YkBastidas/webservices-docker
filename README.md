# webservices-docker

## Correr docker

En caso de no tenerlo instalado. 
En la consola ejecutar: "sudo apt-get install docker-compose"
### iniciar los contenedores
Colocar una terminal de comandos en la carpeta contenedora 
Luego en la terminar ejecutar "docker-compose up"
Esperar a que termine de crear e iniciar los contenedores
Para detenerlos ejecutar "docker-compose down"

## Registro Cliente [POST]
Url: [/users/register]\
JSON:
```json
[
  {
    "firstName": "Jhon",
    "lastName": "Doe",
    "email": "jdoe87@dockerize.com",
    "password": "secretpass"
  }
]
```
## Iniciar Sesión [POST]
Url: [/users/authenticate]\
JSON:
```json
[
  {
    "email": "jdoe87@dockerize.com",
    "password": "secretpass"
  }
]
```

## Ver todos los usuarios [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/]

## Ver todos los usuarios [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/current]

## Ver usuario por id [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]

## Actualizar usuario [PUT]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]\
JSON:
```json
[
  {
    "firstName": "Carlos",
    "lastName": "Barroeta",
    "email": "cbarroeta@dockerize.com",
    "password": "software"
  }
]
```

## Eliminar usuario [DELETE]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]

## Crear Transacción de Compra [POST]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/orders/transaction]\
JSON:
```json
[
  {
    "client": "Jhon Doe",
    "price": "125.26",
    "date": "2018-06-12"
  }
]
```

## Ver Transacciones de Compra [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/orders/]

## Ver Transacción de Compra por ID [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/orders/:id]

## Eliminar Transacción de Compra [DELETE]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/orders/:id]