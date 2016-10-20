class Alive {
    constructor( message ) {
        this.message = message;
    }

    showMessage() {
        console.log( this.message );
    }
}

const alive = new Alive( "I'm alive!" );

alive.showMessage();
