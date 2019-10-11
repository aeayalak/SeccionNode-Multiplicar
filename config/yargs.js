
//Objeto de con las opciones de configuracion
const opciones ={
    //Declaracion de argumentos que va a recibir la aplicacion desde la consolda
    base:{
        demand:true //con esta sentencia el valor es obligatorio
        ,alias:'b'
    }, 
    limite:{
        alias:'l',
        default:10
    }
}


//#region Variables Constantes y Requerimiento (require)
const argv = require('yargs')
.command('listar', 'imprime en colosa la tabla de multiplicar',opciones)//metood de listado con sus parametros
.command('crear', 'comando que crea una tabla en la aplicacion con extension txt',opciones).help().argv; //Metodo de crear con sus parametros

//exportamos o publicamos el objeto de conifguracion
module.exports ={
    argv
}