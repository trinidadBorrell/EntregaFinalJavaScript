localStorage.clear()
//----------------------------------------------ENTIDADES----------------------------------------------------------

class Usuario{
    constructor(nombre, apellido, mail, telefono, id){
        this.nombre= nombre;
        this.apellido= apellido;
        this.mail=mail;
        this.telefono=telefono;
        this.id = id;
    }
    descripcion(){
        console.log(`El usuario se llama ${this.nombre} ${this.apellido}. Su mail es ${this.mail}. Su número es ${this.telefono}.`)
    }
}

//----------------------------------------------SELECTORES-----------------------------------------------------------

let btnE = document.getElementById("btnE");
let des1 = document.getElementById("des1");
let telefono = document.getElementById("telefono");

//----------------------------------Array---------------------------------------------------------------

let usuarios = []

//---------------------------------------------------EVENTOS-----------------------------------------------------------------

btnE.addEventListener("click", enviarDatos)

telefono.addEventListener("click", aparecer);
telefono.addEventListener("focusout", desaparecer);

//--------------------------------------------------FUNCIONES---------------------------------------------------------

//---------------------------------Enviar Datos------------------------------------------------------
function enviarDatos(e){
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let mail = document.getElementById("mail").value
    let telefono = document.getElementById("telefono").value
    let adv1= document.getElementById("adv1")

    if (nombre=="" || apellido=="" || mail=="" || telefono==""){
        adv1.style.display = "block";
        let elemento = document.getElementById("respuesta")
        elemento.innerHTML = ``;}
    else{
        adv1.style.display = "none";

        let elemento = document.getElementById("respuesta")
        elemento.innerHTML = `¡Gracias ${nombre}! Ya se han guardado los datos. En breve nos contactaremos con vos.`

        let usuariosAnteriores= JSON.parse(localStorage.getItem("usuarios"))

        if(usuariosAnteriores != null){
 
            let index = Math.random()
            
            const usuario1= new Usuario(nombre, apellido, mail, telefono, index)
            usuario1.descripcion()

            usuariosAnteriores.push(usuario1)
            localStorage.setItem("usuarios", JSON.stringify(usuariosAnteriores))

    
        }
        else{
            let index= Math.random()

            const usuario1= new Usuario(nombre, apellido, mail, telefono, index)
            usuario1.descripcion()

            usuarios.push(usuario1)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
        }
    }
}

//----------------------Advertencia Numero Telefono----------------------------

function aparecer(){
    des1.style.display = "block";
}

function desaparecer(){
    des1.style.display = "none";
}



