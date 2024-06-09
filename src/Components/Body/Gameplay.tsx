import {Box} from '@chakra-ui/react'
import '../css/gameplay.css'
import fase1 from '../css/Imagens/ASSETS JOGO/Fase 1.jpeg'
import fase2 from '../css/Imagens/ASSETS JOGO/Fase 2.jpeg'
import fase3 from '../css/Imagens/ASSETS JOGO/Fase 3.jpeg'

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
                    <div className="fases_text">
                        <p><span className="colorText">Fase 1:</span>Saindo do Bar<br/>
                            <span className="colorText">1. Objetivo:</span> Xerife vai atrás dos Bandidos e do Cavalera.
                            <br/>
                            <span className="colorText">2. Ambiente:</span> Música de Velho Oeste e apenas gramado.
                            <br/>
                            <span className="colorText">3. Interatividade:</span> Exploração da primeira fase.
                            <br/>
                            <span className="colorText">4. Desafios:</span> Confronto com bando do cavalera e Obstaculos.
                            <br/>
                            <span className="colorText">5. Recompensa:</span> N/A.
                            <br/>
                        </p>
                    </div>
                    <div className="fase_image">
                        <img className="Images" src={fase1} alt="Saida do Bar"/>
                    </div>
                    </div>
                </Box>
                <Box border={'2px solid'}
                    borderRadius={'10px'}
                    boxShadow={'1px 2px 0px 2px rgba(0, 0, 0, 0.5)'}
                    bg={"#ffffff87"}
                    margin={'5px'}>
                    <div className="fases">
                        <div className="fases_text">
                            <p><span className="colorText">Fase 2:</span>Rio Bravo<br/>

                                <span className="colorText">1. Objetivo:</span> Xerife vai atrás dos Bandidos e do Cavalera.
                                <br/>
                                <span className="colorText">2. Ambiente:</span> Musica de Velho Oeste, gramado e Rio.
                                <br/>
                                <span className="colorText">3. Interatividade:</span> Ao cair no Rio, o Sheriff morre..
                                <br/>
                                <span className="colorText">4. Desafios:</span> Confronto com bando do cavalera e Rio Perigoso.
                                <br/>
                                <span className="colorText">5. Recompensa:</span> N/A.
                            </p>
                        </div>
                        <div className="fase_image">
                            <img className="Images" src={fase2} alt="Gramado com Agua"/>
                        </div>
                    </div>
                </Box>
                <Box border={'2px solid'}
                    borderRadius={'10px'}
                    boxShadow={'1px 2px 0px 2px rgba(0, 0, 0, 0.5)'}
                    bg={"#ffffff87"}
                    margin={'5px'}>
                    <div className="fases">
                        <p><span className="colorText">Fase 3:</span>Confronto Final<br/>

                            <span className="colorText">1. Objetivo:</span> Xerife enfrenta Cavalera.
                            <br/>
                            <span className="colorText">2. Ambiente:</span> Musica de tensão, gramado e Água.
                            <br/>
                            <span className="colorText">3. Interatividade:</span> Cobertura, movimento e precisão essenciais.
                            <br/>
                            <span className="colorText">4. Desafios:</span> Salto sobre a Água, Confronto final com o Cavalera.
                            <br/>
                            <span className="colorText">5. Recompensa:</span> Paz restaurada na cidade.
                        </p>
                        <img className="Images" src={fase3} alt="Chefão"/>
                    </div>
                </Box>
                </div>
            </div>
    )
}