//console.log("correcto");

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://172.27.0.10:8081/api/v1/pods' ,true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos.items[2].status);

            let datos_meta= datos.items;
            console.log(datos_meta.length);

            let res= document.querySelector('#res');
            res.innerHTML='';

            for (i=0;i<datos_meta.length;i++){
                res.innerHTML += `
                <tr>
                    <td>${datos.items[i].status.podIP}</td>
                    <td>${datos.items[i].metadata.name}</td>
                    <td>${datos.items[i].metadata.namespace}</td>
                    <td>${datos.items[i].metadata.uid}</td>
                    <td>${datos.items[i].status.phase}</td>
                </tr>
                `
            }
            
        }
    }
}



