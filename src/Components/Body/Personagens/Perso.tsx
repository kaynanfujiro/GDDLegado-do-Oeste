import sherifImage from '../../css/Imagens/sherif.jpeg';
import mariaImage from '../../css/Imagens/mari.jpeg';
import cavaleraImage from '../../css/Imagens/cavalera.jpeg';
import bandoImage from '../../css/Imagens/bando.jpeg';

interface perso {
    foto: string
    name: string
    about: string
}

class Person implements perso{
    constructor(public foto: string, public name: string, public about:string){
        this.foto = foto;
        this.name = name;
        this.about = about;
    }
}

export const sherif = new Person(sherifImage, "Sheriff Don Ramon", "A sua função é proteger a civilização e a cidade, combatendo o vilão cavalera");
export const maria = new Person(mariaImage, "Maria", "Garçonete simples e humilde que sempre ajuda o xerife com suas informações.");
export const cavalera = new Person(cavaleraImage, "Cavalera", "Cavalera bandido vilão, conhecido e temido como mais brutal de Saints Louis.");
export const bando = new Person(bandoImage, "Bando Cavalera", "Grupo mais conhecido por roubar e destruir as cidades onde passa.");