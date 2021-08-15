//---------------------CLASES Y CONSTRUCTORES------------------------------------

class Combo{
    constructor(num, precio, personas){
        this.num= num;
        this.precio= precio;
        this.personas= personas;
    }
    descripcion(){
        console.log(`Este es el combo número: ${this.num}. Cuesta un total de: ${this.precio}. El combo esta destinado a grupos de ${this.personas} personas`)
        alert(`El combo número: ${this.num}. Cuesta un total de: $${this.precio}. Este combo esta destinado a grupos de ${this.personas} personas.`)
    }
}

//----------------------------GENERO LOS OBJETOS Y LOS GUARDO EN UN ARRAY EN EL STORAGE--------------------------------------------

combosArray = []
combosArray.push(new Combo(1, 2100, 3))
combosArray.push(new Combo(2, 3000, 5))
combosArray.push(new Combo(3, 4200, 8))

guardarEnStorage(combosArray)

function guardarEnStorage(combos){
    localStorage.setItem('combos', JSON.stringify(combos))     
}

//---------------------------------FUNCIONES Y EVENTOS--------------------------------------------------------------------

const btnArrayCuotas = [1, 3, 6];
const btnArrayCombos = [1, 2, 3];

const btnsColumnCombos = $('#btns-column-combos');
const btnsColumnCuotas = $('#btns-column-cuotas');
const tablaHTML = $('#tabla')

//-----------------------------------Tabla--------------------------------------------------------------------------------

btnArrayCombos.forEach((combo)=>{

    tablaHTML.append(`
    <tr>
        <td>${combo}°</td>
        <td>${combosArray[combo -1].personas}</td>
        <td>${combosArray[combo -1].precio}</td>
    </tr>`)
})

//-----------------------------------Btns Combos---------------------------------------------------------------------------

let comboUsuario

btnArrayCombos.forEach((btn)=>{
    btnsColumnCombos.append(`
    <button type="button" class="btn_combos" id="btn_combos${btn}">${btn}</button>
    `)
    asignarClickCombos(btn)
})

function asignarClickCombos(btn){
    $(`#btn_combos${btn}`).click(function(){
    mensajeCombos(btn);

    })
}

function mensajeCombos(btn){
    console.log(`Clickeaste el botón ${btn}`);
    comboUsuario = btn;
}


//-----------------------------------Btns Cuotas-------------------------------------------------------------------------------

let cuotaUsuario

btnArrayCuotas.forEach((btn)=>{
    btnsColumnCuotas.append(`
    <button type="button" class="btn_cuotas" id="btn_cuotas${btn}">${btn}</button>
    `)
    asignarClickCuotas(btn)
})

function asignarClickCuotas(btn){
    $(`#btn_cuotas${btn}`).click(function(){
    mensajeCuotas(btn);
    })
}

function mensajeCuotas(btn){
    console.log(`Clickeaste el botón ${btn}`);
    cuotaUsuario = btn;
}

//--------------------------------------Btn Calcular Cuotas------------------------


$('#btnCalcular').click(function(){
    if (cuotaUsuario != null || comboUsuario != null){
         calcularPago(comboUsuario, cuotaUsuario)
    }

})

function calcularPago(combo_usuario, cuotas){
    $("#rta").empty()

    if(combo_usuario==1){
        pago = combosArray[0].precio/cuotas
        $("#rta").append(`<p> Cada cuota a pagar será de $${pago} </p>`)}

    else if(combo_usuario==2){
        pago = combosArray[1].precio/cuotas

        $("#rta").append(`<p> Cada cuota a pagar será de $${pago} </p>`)}
    else if(combo_usuario==3){
        pago = combosArray[2].precio/cuotas

        $("#rta").append(`<p> Cada cuota a pagar será de $${pago} </p>`)}
    else{

        $("#rta").append(`<p class="text-danger">Ha habido un error, vuelva a intentarlo</p>`)}
}




