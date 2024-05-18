import {Box} from '@chakra-ui/react'
import '../css/gameplay.css'
import bar from '../css/Imagens/maps/vecteezy_wild-west-bar-door_10460111.jpg'
import ruas from '../css/Imagens/maps/41b9c371a801eed2c2200fbaf2b04f27.jpg'

export const Gameplay = () =>{
    return(
        <div className="right-page_game">
            <div className="Cabecalho_game">
                <h1>Gameplay</h1>
            </div>
                <div className="right-content_game">
                <Box border={'2px solid'}
            borderRadius={'10px'}
            boxShadow={'1px 2px 0px 2px rgba(0, 0, 0, 0.5)'}
            bg={"#ffffff87"}
            margin={'5px'}>
                    <div className="fases">
                        <p><span className="colorText">Fase 1:</span> O Bar<br/>

                            <span className="colorText">1. Objetivo:</span> Xerife busca informações sobre os bandidos.
                            <br/>
                            <span className="colorText">2. Ambiente:</span> Bar do Velho Oeste com música de banjo.
                            <br/>
                            <span className="colorText">3. Interatividade:</span> Diálogo com garçonete para obter informações.
                            <br/>
                            <span className="colorText">4. Desafios:</span> Garçonete evasiva, clientes bêbados.
                            <br/>
                            <span className="colorText">5. Recompensa:</span> Informações vitais para a história.
                        </p>
                        <img className="Images" src={bar} alt="Bar"/>
                    </div>
                </Box>
                <Box border={'2px solid'}
                    borderRadius={'10px'}
                    boxShadow={'1px 2px 0px 2px rgba(0, 0, 0, 0.5)'}
                    bg={"#ffffff87"}
                    margin={'5px'}>
                    <div className="fases">
                        <p><span className="colorText">Fase 2:</span> O Bar<br/>

                            <span className="colorText">1. Objetivo:</span> Xerife enfrenta os bandidos nas ruas.
                            <br/>
                            <span className="colorText">2. Ambiente:</span> Ruas estreitas e empoeiradas.
                            <br/>
                            <span className="colorText">3. Interatividade:</span> Cobertura, movimento e precisão essenciais.
                            <br/>
                            <span className="colorText">4. Desafios:</span> Confronto final com o líder dos bandidos.
                            <br/>
                            <span className="colorText">5. Recompensa:</span> Paz restaurada na cidade.
                        </p>
                        <img className="Images" src={ruas} alt="Ruas"/>
                    </div>
                </Box>
                </div>
            </div>
    )
}