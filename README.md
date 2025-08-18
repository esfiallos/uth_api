
Tener ya instalado npm con
npm install

Tener inicializado el package.json con init
npm init

Instalamos postgress
npm install pg

Instalamos la dependencia de las variables de entorno
npm install dotenv

## Se debe configurar el archivo .env, el archivo debe estar en la raiz del proyecto
DB_USER=usuario_aqui
DB_PASSWORD=contraseña_aqui
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mi_base
PORT=3000

**Estos archivos es preferible escribir tal cual esta en el ejemplo, no usar "" ni ''

## Sobre node run start y nodemon
Si la estructura de las carpetas cambia, los scrpts del package.json deben actualizarse
Se navega entre carpetas con "/"


## Rutas

Direccion elegida:
'/api/uth/v1/'

La navegacion quedara construida de esta manera, si se expande se reversionara en nuevas rutas, nuevas versions

** '/api/uth/v1/careers' -> Accede al metodo de uso