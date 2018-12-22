# webservices-docker

## Registro Cliente [POST]
Url: [/users/register]\
JSON:\
[\
&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "Jhon"\
&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "Doe"\
&nbsp;&nbsp;&nbsp;&nbsp;"email": "jdoe87@dockerize.com"\
&nbsp;&nbsp;&nbsp;&nbsp;"password": "secretpass"\
&nbsp;&nbsp;}\
]

## Iniciar Sesión [POST]
Url: [/users/authenticate]\
JSON:\
[\
&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;"email": "jdoe87@dockerize.com"\
&nbsp;&nbsp;&nbsp;&nbsp;"password": "secretpass"\
&nbsp;&nbsp;}\
]

## Ver todos los usuarios [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users]

## Ver todos los usuarios [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/current]

## Ver usuario por id [GET]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]

## Actualizar usuario [PUT]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]\
JSON:\
[\
&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "Carlos"\
&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "Barroeta"\
&nbsp;&nbsp;&nbsp;&nbsp;"email": "cbarroeta@dockerize.com"\
&nbsp;&nbsp;&nbsp;&nbsp;"password": "software"\
&nbsp;&nbsp;}\
]

## Eliminar usuario [DELETE]
### Authorization: Bearer Token -> "El token obtenido al iniciar sesión"
Url: [/users/:id]\

## Transacción Compra [POST]
Url: [Undefined]\
JSON:\
[\
&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;"client": "Jhon Doe"\
&nbsp;&nbsp;&nbsp;&nbsp;"price": "215.36"\
&nbsp;&nbsp;&nbsp;&nbsp;date: 2018-12-20\
&nbsp;&nbsp;}\
]
