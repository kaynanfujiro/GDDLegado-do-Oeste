import { Switch } from '@chakra-ui/react'
import '../css/mecanica.css'


import TeclaW from '../css/Imagens/Tecla W.png';
import TeclaA from '../css/Imagens/Tecla A.png';
import TeclaD from '../css/Imagens/Tecla-D.png';
import TeclaEnter from '../css/Imagens/tecla-enter.png';
import TeclaQ from '../css/Imagens/Tecla Q.png';

export const Mecanica = () =>{
    return(
        <div className="right-page_mecanica">
        <div className="Cabecalho_mecanica">
            <h1>Mecânica</h1>
        </div>
        <div className="right-content_mecanica">
            <p className="textoPrincipal_mecanica">Principais teclas de movimentação</p>
            <div className="Teclas">
            <div className="teclasMove">
                <img className="imagemControl" src={TeclaA} alt="Tecla A"/>
                <p id="AButton">Anda para Trás</p>
                <img className="imagemControl" src={TeclaD} alt="Tecla D"/>
                <p id="DButton">Anda para Frente</p>
                <img className="imagemControl" src={TeclaW} alt="Tecla W"/>
                <p id="WButton">Pular</p>
            </div>
            <div className="teclasContent">
                <img className="imagemControl" src={TeclaEnter} alt="Tecla Enter"/>
                <p id="EnterButton">Dispara</p>
                <img className="imagemControl" src={TeclaQ} alt="Botão Direito"/>
                <p id="QButton">Granada</p>
            </div>
            </div>
        </div>
    </div>
    )
}