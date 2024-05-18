import { Flex } from "@chakra-ui/react"
import '../css/sobre.css'


export const Sobre = () =>{
    return(
        <Flex 
        marginTop={'25px'} 
        justify={'center'}
        align={'center'}>
            <div className='right-page_sobre'>
              <div className="right-content_sobre">
                <h1>Sobre</h1>
                <p className='textoPrincipal_sobre'>Legado do Oeste é um jogo de plataforma desenvolvido em Python com Pygame, focado em ação e aventura.
                    Com um menu principal interativo, uma trilha sonora envolvente, os jogadores enfrentarão desafios de fases, 
                    combatendo inimigos e explorando cenários.
                    Prepare-se para uma jornada e prove suas habilidades como o Xerife definitivo!</p>
                </div>
            </div>
        </Flex>
    )
}