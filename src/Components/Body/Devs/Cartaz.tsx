import cartazKaynan from '../../css/Imagens/Cartaz/meu-cartaz.png'
import cartazJoao from '../../css/Imagens/Cartaz/Joao-Cartaz.png'
import cartazAlex from '../../css/Imagens/Cartaz/alex-cartaz.png'
import cartazLuiz from '../../css/Imagens/Cartaz/luis-cartaz.png'
import cartazBruno from '../../css/Imagens/Cartaz/bruno-cartaz.png'

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
export const alex = new Cartaz(cartazAlex, "Alexssandro Jesus", 113949, "https://www.linkedin.com/in/alexssandro-matias-jesus-4431b5241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")
export const luiz = new Cartaz(cartazLuiz, "Luiz Augusto", 113363, "https://www.linkedin.com/in/luiz-augusto-884656252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
export const bruno = new Cartaz(cartazBruno, "Bruno Barroso", 114091, "https://www.linkedin.com/in/bruno-barroso-dos-santos-95188b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")


