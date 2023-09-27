Primero descargar el repositorio

Una vez descargado, abra una terminal en la ubicacion del trabajo y ejecute los siguientes comandos en orden:

```
docker swarm init
```
```
docker build -t nodejsswarm .
```
```
docker stack deploy -c nodejs-service.yml node-service
```

- el primer comando activa swarm en el dispositivo.
- el segundo toma el servidor pequeño y lo hace una imagen llamada nodejsswarm para luego ser utilizada por el tercer comando.
- el termer comando crea el servicio donde "nodejs-service.yml" es el nombre del archivo que contiene la configuracion y "node-service" es el nombre que le doy al mismo.

Una vez finalizado los comandos, puede aumentar o disminuir la cantidad de servicios con el siguiente comando:
```
docker service scale node-service_node=5
```
en el codigo anterior crea 5 servicios, puede poner la cantidad que quiera cambiando el valor del mismo.
