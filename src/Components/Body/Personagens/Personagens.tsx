import '../../css/personagens.css'
import { sherif, maria,cavalera,bando } from './Perso';

export const Personagens = () =>{
    return(
        <div className="right-page_Perso">
        <div className="Cabecalho_Perso">
            <h1>Personagens</h1>
        </div>
        <div className="Personagens_Perso">
            <div className="infoPerso_Perso">
                <img src={sherif.foto} className="imagensPerso" alt="Sheriff"/>
                <div className="sobrePerso">
                    <p className="name">{sherif.name}</p>
                    <p className="about">{sherif.about}</p>
                </div>
            </div>
            <div className="infoPerso_Perso">
                <img src={maria.foto} className="imagensPerso" alt="Maria"/>
                <div className="sobrePerso">
                    <p className="name">{maria.name}</p>
                    <p className="about">{maria.about}</p>
                </div>
            </div>
            <div className="infoPerso_Perso">
                <img src={cavalera.foto} className="imagensPerso" alt="Cavalera"/>
                <div className="sobrePerso">
                    <p className="name">{cavalera.name}</p>
                    <p className="about">{cavalera.about}</p>
                </div>
            </div>
            <div className="infoPerso_Perso">
                <img src={bando.foto} className="imagensPerso" alt="Bando"/>
                <div className="sobrePerso">
                    <p className="name">{bando.name}</p>
                    <p className="about">{bando.about}</p>
                </div>
            </div>
            </div>
        </div>
    )
}