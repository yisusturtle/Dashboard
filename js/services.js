document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../src/servicesjson.php' ,true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let datos_items= datos.items;
            console.log(datos_items.length);

            let res= document.querySelector('#res');
            res.innerHTML='';

            for (i=0;i<datos_items.length;i++){
                res.innerHTML += `
                <tr>
                    <td>${datos.items[i].spec.clusterIP}</td>
                    <td>${datos.items[i].metadata.name}</td>
                    <td>${datos.items[i].metadata.namespace}</td>
                    <td>${datos.items[i].metadata.uid}</td>
                </tr>
                `
            }
            
        }
    }
}



