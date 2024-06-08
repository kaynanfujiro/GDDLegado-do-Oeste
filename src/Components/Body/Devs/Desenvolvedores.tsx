import '../../css/devs.css'
import { kaynan, joao, luiz, alex,bruno } from './Cartaz'

export const Desenvolvedores = () =>{
    return(
        <div className="right-page_Devs">
            <div className="Cabecalho_Devs">
                <h1>Desenvolvedores</h1>
            </div>
            <div className="Devs">
                <div className="infoDevs">
                    <img src={kaynan.cartaz} className="imagensDevs" alt="Kaynan"/>
                    <div className="sobreDevs">
                        <p className="name_dev">{kaynan.nome}</p>
                        <p className="about_dev">{kaynan.ra}</p>
                        <a className="rede" href={kaynan.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="infoDevs">
                    <img src={joao.cartaz} className="imagensDevs" alt="Kaynan"/>
                    <div className="sobreDevs">
                        <p className="name_dev">{joao.nome}</p>
                        <p className="about_dev">{joao.ra}</p>
                        <a className="rede" href={joao.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="infoDevs">
                    <img src={alex.cartaz} className="imagensDevs" alt="Kaynan"/>
                    <div className="sobreDevs">
                        <p className="name_dev">{alex.nome}</p>
                        <p className="about_dev">{alex.ra}</p>
                        <a className="rede" href={alex.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="infoDevs">
                    <img src={luiz.cartaz} className="imagensDevs" alt="Kaynan"/>
                    <div className="sobreDevs">
                        <p className="name_dev">{luiz.nome}</p>
                        <p className="about_dev">{luiz.ra}</p>
                        <a className="rede" href={luiz.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="infoDevs">
                    <img src={bruno.cartaz} className="imagensDevs" alt="Kaynan"/>
                    <div className="sobreDevs">
                        <p className="name_dev">{bruno.nome}</p>
                        <p className="about_dev">{bruno.ra}</p>
                        <a className="rede" href={bruno.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}