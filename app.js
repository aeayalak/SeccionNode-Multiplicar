//#region // Variables y constantes //
//Toda constante que esta entre corchetes es una destruracion de la clase
const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];//en los yargs los comandos son un arreglo vamos a tener el listar crear editar, etc
//#endregion

//#region // Metodo //
switch(comando){
    case 'listar' : 
        listarTabla(argv.base, argv.limite);
        // .then(archivo=> console.log(`archivo creado:${archivo}`))
        // .catch(e=>console.log(e));
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then(archivo=> console.log(`archivo creado:${archivo}`.green))
            .catch(e=>console.log(e));
            break;
    default:
        console.log('comando no reconocido'.red);
}

//#endregion