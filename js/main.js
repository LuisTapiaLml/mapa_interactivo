let tooltip_valido = true;

let informacion = [
    {
        "posiciones" :[
            {"posicion":1,"ip":"10.119.23.159","campaña":"Cobranza","id":"1_"},
            {"posicion":2,"ip":"10.119.23.90","campaña":"Cobranza","id":"2_"},
            {"posicion":3,"ip":"127.0.0.1","campaña":"Banco","id":"3_"},
            {"posicion":"oficina","ip":"10.119.23.395","campaña":"Banco","id":"oficina"}
        ],
        "info":{
            "sede":"Relox"
        }
    }
]


function buscar_posicion(e){
    let pocicion =  e.currentTarget;

    pocicion.classList.add('remarcar_posicion');

    let info_posicion = informacion[0].posiciones.find(posicon => posicon.id == pocicion.id ); 

    console.log(info_posicion);

    pocicion.addEventListener('mouseout',(e)=>{
       e.currentTarget.classList.remove('remarcar_posicion');
    })

    mostrar_info_posicion(e,info_posicion);
   
}

function mostrar_info_posicion(e,info){

    if(!tooltip_valido) return false;

    tooltip_valido = false

    let elemento = e.currentTarget;
    let tooltip = document.createElement('div');

    window.onmousemove = function (e) {
        console.log(e);
        var x = e.clientX,
            y = e.clientY;
            tooltip.style.top = (y + 20) + 'px';
            tooltip.style.left = (x + 20) + 'px';
    };

    tooltip.classList.add('tooltip');

    tooltip.innerHTML=`<p><b>Posicion: </b>${info.posicion}</p>
                        <p><b>IP: </b>${info.ip}</p>
                        <p><b>Campaña: </b>${info.campaña}</p>`

    document.body.append(tooltip);

    elemento.addEventListener('mouseout',(e)=>{
        tooltip_valido = true;
        tooltip.remove();
        tooltip_valido = true;
    });
}