import {ProductosApi} from './productos';
export class CarritoApi {
    constructor() {
        this.carrito = []
        this.id = 0
    }

    openFile(name){
        this.fs = require('fs'); 
        this.fs.readFile(name, 'utf-8', (error, contenido) => {
            if (error) {
                throw new Error('Error en lectura');
            }
        
            console.log('Lectura exitosa');
            this.info = JSON.parse(contenido);
        });
    }

    save(objeto){
        const nuevoId = this.info[this.info.length() - 1] + 1;
        const nuevoObjeto = {nuevoId, ...objeto};

        this.info = {...this.info, ...nuevoObjeto};
        this.fs.writeFile(this.name, JSON.stringify(this.info, null, 2), error => {
            if (error) {
                throw new Error('Error en escritura');
            }
            console.log('Escritura exitosa');
            return nuevoId;
        })        
    }

    getById(idRecibido){
        for( const producto of this.info){
            if(producto.id === idRecibido){
                return producto;
            }
        }
        return null
    }

    getAll(){
        return this.info
    }

    deleteByID(idRecibido){
        let i = 0;
        for( const producto of this.info){
            if(producto.id === idRecibido){
                this.info.slice(i,1);//esto funciona en array
            }
            i++;
        }
        for(let i = 0; i < this.info.length(); i++){
            if(this.info.id === idRecibido){
                this.info.splice(i,1);
            }
        }
        this.fs.writeFile(this.name, JSON.stringify(this.info, null, 2), error => {
            if (error) {
                throw new Error('Error en eliminación del objeto.');
            }
            console.log('Escritura exitosa');
        })        
    }

    deleteAll(){
        this.fs.writeFile(this.name, "", error => {
            if (error) {
                throw new Error('Error borrando el archivo.');
            }
        });
    }
}

export const carritoCargado = new CarritoApi();
carritoCargados.openFile("../files/carrito.txt");