//Requireds 
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite=10)=>{
    
    console.log('======================================'.green);
    console.log('=======Tabla de multiplicar==========='.green);
    console.log('======================================'.green);
    for(let i=1; i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }

}


let crearArchivo=(base, limite = 10)=>{
    //Se crea una promesa del metod crearArchivo(son como funciones)
    //Toda promesa resive un resolve un reject, como un try & catch, donde en el try va el resolve y catch reject
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject(`la base no es un numero, valor ingresado:${base}`.red)
        }
        let data = '';
        for(let i=1; i<=limite;i++){
            data+= `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err.red);
            else
                resolve(`tabla-${base}.txt`);
          });
    });
}

//Sentencia para compartir el contenido de este archivo, es decir sus metodos
//todos los archivo deriban de module
module.exports={
    crearArchivo,
    listarTabla
}
