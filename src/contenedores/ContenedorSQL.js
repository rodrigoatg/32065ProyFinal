import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config)
        this.this.tabla = tabla
    }

    async listar(id) {
        this.knex.from(this.tabla).select('*')
        .where('id', '=', id)
        .then((rows) => {
            return rows
        })
        .catch((err) => {console.log(err); throw err });
        // .finally(() => {
        //     this.knex.destroy()
        // });
    }

    async listarAll(criterio = {}) {
        this.knex.from(this.tabla).select('*')
        .then((rows) => {
            return rows
        })
        .catch((err) => {console.log(err); throw err });
    }

    async guardar(elem) {
        this.knex(this.tabla).insert(elem)
        .then(() => console.log('datos insertados'))
        .catch((err) => {console.log(err); throw err })
        // .finally(() => {
        //     knexConnection.destroy()
        // });
    }

    async actualizar(elem) {
 
    }

    async borrar(id) {
        this.knex(this.tabla).where('id', id)
        .delete()
        .then(() => console.log('registro eliminado'))
        .catch((err) => {console.log(err); throw err });
        // .finally(() => {
        //     this.knex.destroy()
        // });
    }

    async borrarAll(criterio = {}) {
        this.knex(this.tabla)
        .delete()
        .then(() => console.log('registro eliminado'))
        .catch((err) => {console.log(err); throw err });
        // .finally(() => {
        //     this.knex.destroy()
        // });
    }
}

export default ContenedorSQL