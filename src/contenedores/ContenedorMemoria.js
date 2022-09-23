class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    listar(id) {
        for( const elemento of this.elementos){
            if(elemento.id === id){
                return elemento;
            }
        }
        return null
    }

    listarAll() {
        return this.elementos
    }

    guardar(elem) {
        const nuevoId = this.elementos[this.elementos.length() - 1] + 1;

        const nuevoObjeto = {nuevoId, ...elem};

        this.elementos = {...this.elementos, ...nuevoObjeto};
    }

    actualizar(elem) {
 
    }

    borrar(id) {
        let i = 0;
        for( const elemento of this.elementos){
            if(elemento.id === id){
                this.elementos.slice(i,1);//esto funciona en array
            }
            i++;
        }
        for(let i = 0; i < this.elementos.length(); i++){
            if(this.elementos.id === id){
                this.elementos.splice(i,1);
            }
        }
    }

    borrarAll() {
        this.elementos = [];
    }
}

export default ContenedorMemoria