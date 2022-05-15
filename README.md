# Next.js Teslo Shop

Para correr locamente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

* URL MongoDB Local:
```
mongodb://localhost:27017/teslodb
```


# Configurar las variables de entorno
Renombrar el archivo __.env.template__  a  __.env__


## Llenar la base de datos con informacion de pruebas

Llamar  a:
```
http://localhost:3000/api/seed
```