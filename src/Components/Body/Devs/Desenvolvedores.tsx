import '../../css/devs.css'
import { kaynan, joao} from './Cartaz'

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
            </div>
        </div>
    )
}