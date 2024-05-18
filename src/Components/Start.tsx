import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import planoFundo from './Tela-Inicio.png'

export const Start = () => {
    return(
    <>
        <Flex
        w={'100vw'}
        h={'100vh'}
        justify={'center'}
        align={'center'}
        bgImage={planoFundo}
        bgSize={'cover'}
        bgPosition={'center'}
        overflow="hidden">
            <Link to="/sobre"><Button>Iniciar</Button></Link>
        </Flex> 
    </>
    )
}

