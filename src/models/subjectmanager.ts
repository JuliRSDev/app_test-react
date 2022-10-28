import {Subject} from "rxjs";

/* Es una clase que ve recibir un tipo(x tipo) */
export class SubjectManager<T> {
    /* se crea un nuevo observable de tipo Subject */
    private subject = new Subject<T>();

    /* vamos a tener un get y un set.
       - En el tipo get tenemos un asObservable, porque de esta manera siempre va hacer iunicas, quiere decir que si
         alguien esta obteniendo el subject, no va poder emitir datos por el mismo, solo obtenerlo */
    get getSubject() {
        return this.subject.asObservable();
    }

    /* con el set vamos a controlar que es lo que vieja por nuestro object */
    set setSubject( value: T ) {
        this.subject.next( value );
    }
}

