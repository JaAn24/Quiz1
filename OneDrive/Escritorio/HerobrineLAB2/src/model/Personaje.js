let mov = 0;

class Personaje extends Elemento {
    constructor(px, py, ancho, alto, estado, texto, propiedad) {
        super(px, py, ancho, alto);
        //areibutos de la imagen 
        this.px = px;
        this.py = py;
        this.ancho = ancho;
        this.alto = alto;
        // interaccion
        this.estado = estado;
        //texto 
        this.texto = texto;
    

    }

    cambiarEstado() {
        this.estado = true;

    }

    interaccion() {

        switch (this.propiedad) {

            //movimiento
            case 0:
                dm = 1;
                this.cambiarEstado();


                break;

            case 1:

                mm = 1;

                this.cambiarEstado();
                break;

            case 2:
                b = 1;

                this.cambiarEstado();
                break;

            case 3:
                d = 1;
                this.cambiarEstado();
                break;
            case 4:
                m = 1;
                this.cambiarEstado();
                break;


        }



    }

    getPosx() {
        return this.px;
    }

    getPosy() {
        return this.py;
    }

    getRuta() {
        return this.ruta;
    }
    getAncho() {
        return this.ancho;
    }

    getAlto() {
        return this.alto;
    }

    getEstado() {
        return this.estado;
    }

    getTexto() {
        return this.texto;
    }

    getPropiedad() {
        return this.propiedad;
    }

}

