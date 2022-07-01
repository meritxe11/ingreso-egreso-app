

export class Usuario {

    static fromFirebase({email, uid, nombre}: any) {
        return new Usuario( uid, nombre, email);
    }

    constructor(
        public uid: any,
        public nombre: string,
        public email: any
    ){}

}
