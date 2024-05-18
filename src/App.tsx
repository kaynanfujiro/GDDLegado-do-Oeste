import { ChakraProvider} from '@chakra-ui/react';
import { Layout } from './Components/Layout';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Start } from './Components/Start';
import { Sobre } from './Components/Body/Sobre';
import { Personagens } from './Components/Body/Personagens/Personagens';
import { Historia } from './Components/Body/Historia';
import { Gameplay } from './Components/Body/Gameplay';
import { Mecanica } from './Components/Body/Mecanica';
import { Desenvolvedores } from './Components/Body/Devs/Desenvolvedores';

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element:
            <Start/>
        },
        {path: "/sobre",
          element: 
          (<Layout>
            <Sobre />
          </Layout>)
        },
        {path: "/personagens",
          element: 
          (<Layout>
            <Personagens />
          </Layout>)
        },
        {path: "/historia",
          element: 
          (<Layout>
            <Historia />
          </Layout>)
        },
        {path: "/gameplay",
          element: 
          (<Layout>
            <Gameplay />
          </Layout>)
        },
        {path: "/mecanica",
          element: 
          (<Layout>
            <Mecanica />
          </Layout>)
        },
        {path: "/devs",
          element: 
          (<Layout>
            <Desenvolvedores />
          </Layout>)
        },

    ])

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
