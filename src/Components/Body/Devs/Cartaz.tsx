import cartazKaynan from '../../css/Imagens/Cartaz/meu-cartaz.png'
import cartazJoao from '../../css/Imagens/Cartaz/Joao-Cartaz.png'

interface cartazes {
    cartaz:string
    nome:string
    ra:number
    linkedin:string
}

class Cartaz implements cartazes{
    constructor(public cartaz:string, public nome:string, public ra:number, public linkedin:string){
        this.cartaz = cartaz;
        this.nome = nome;
        this.ra = ra;
        this.linkedin = linkedin;
    }
}

export const kaynan = new Cartaz(cartazKaynan, "Kaynan Santos", 113766, "https://www.linkedin.com/in/kaynan-felipe")
export const joao = new Cartaz(cartazJoao, "João Magrin", 113164, "https://www.linkedin.com/in/jo%C3%A3o-pedro-magrin-396b4b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")

