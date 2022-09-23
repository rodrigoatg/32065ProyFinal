import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        return await this.coleccion.find({id: id })
    }

    async listarAll() {
        return await this.coleccion.find({})
    }

    async guardar(nuevoElem) {
        const newElement = new mongoose.model(nombreColeccion, esquema);
        await this.coleccion.save(newElement);
    }

    async actualizar(nuevoElem) {
        
    }

    async borrar(id) {
        await this.coleccion.deleteOne({ id: id});
    }

    async borrarAll() {
        await this.coleccion.deleteOne({});
    }
}

export default ContenedorMongoDb