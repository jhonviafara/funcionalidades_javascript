// function arreglarCuarto(){
//     var decicion = new Promise((resolve, reject) => {
//         //resolve ("cuanrto arreglado");
//         reject("no lo arregle");
//     })
//     return decicion;
// }
//  async function procesar() {
//     try{
//     var procesado = await arreglarCuarto()
//     console.log(procesado)}
//     catch(error){
//         console.log("error", error)
//     } 
    
//     }
 
//para lanxzar ecxepciones de manera intencional pormos uzar el 
// throw("lanzar exepcion");

// finally {
// codigo que se ejecuta indistintivamente si hai o no una ecepcion 
// }


// procesar()
function numeroAlterno() {
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        const number = parseInt(Math.random() * 10);
        if (number % 2 == 0) {
            resolve(number)
        }
        else {
            reject(number+""+"rechazado")
        }
    },
 1000)
})
return promise;
}

async function procesarNumero() {
    try {
var valida = await numeroAlterno()
console.log(valida)}
 catch (error){
    console.log("error",error)
} 
finally{
    console.log("prueba")
}
}
procesarNumero()