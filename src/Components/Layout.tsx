import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Box } from "@chakra-ui/react";
import image from './css/Imagens/ae3e2598-1018-4f37-b532-ab52aba08b00.jpg'
import { Start } from "./Start";

export const Layout = ({children}:any) => {
  return (
          <>
          <Box bgImage={image}
          bgSize={'Cover'}>
          <Header />
            <div style={{ display: 'flex' }}>
              <Menu />
              <div style={{ flex: 1 }}>
                {children}
              </div>
            </div>
            </Box>
          </>
  );
};
