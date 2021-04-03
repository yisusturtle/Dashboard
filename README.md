# Dashboard version 1.0
<h4>Descripcion</h4>
<p>Para el proyecto de final de grado de Administrador de sistemas, quisismo hacer una Plataforma de alta disponibilidad con Kubernetes y automatización con Python + Web app “Dashboard”.</p>

<h4>Requisitos</h4>
<p>Lo primero antes de nada es tener instalado y configurado Kubernetes, luego mediante un comando de generacion de proxy "kubectl proxy --port 8081 --address=<K8s_IP_Address> --accept-hosts=^* &" deberíamos tener acceso a la api.</p><br>
  <span>Para mas informacion sobre esto: 'https://www.dropbox.com/s/7paynogq736ts6z/README.md?dl=0'</span>
<h4>Funcionamiento:</h4>
<p>Basicamente este proyecto utiliza una api generada por un proxy inverso en el servidor donde esta Kubernetes.<br>
 
 Luego con PHP se hace una petición GET al https de la api en nuestro caso "http://172.27.0.10:8081/api/v1/services", para que con un archivo js podamos tratar los datos en JSON</p>
