import { Switch } from '@chakra-ui/react'
import '../css/mecanica.css'

import TeclaA from '../css/Imagens/Tecla A.png';
import TeclaD from '../css/Imagens/Tecla-D.png';
import MouseLeft from '../css/Imagens/Mouse Left.png';
import MouseRight from '../css/Imagens/Mouse Right.png';

export const Mecanica = () =>{
    return(
        <div className="right-page_mecanica">
        <div className="Cabecalho_mecanica">
            <h1>Mecânica</h1>
        </div>
        <div className="right-content_mecanica">
            <p className="textoPrincipal_mecanica">Principais teclas de movimentação</p>
            <div className="teclasContent">
                <div className="teclasContent">
                    <img className="imagemControl" src={TeclaA} alt="Tecla A"/>
                    <p id="AButton">Anda para trás</p>
                </div>
                <img className="imagemControl" src={TeclaD} alt="Tecla D"/>
                <p id="DButton">Anda para frente</p>
            </div>
            <div className="teclasContent">
                <img className="imagemControl" src={MouseLeft} alt="Botão Esquerdo"/>
                <p id="LeftMouse">Dispara</p>
            </div>
            <div className="teclasContent">
                <img className="imagemControl" src={MouseRight} alt="Botão Direito"/>
                <p id="RightMouse">Recarrega</p>
            </div>
        </div>
    </div>
    )
}