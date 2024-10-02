import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Accueil } from './Accueil';
import { Compteur } from './Compteur';
import { Curtain } from './Curtain';
import { Vie } from './Vie';

const router = createBrowserRouter([
    {
        path:"/curtain",
        element: <Accueil/>
      },
      {
        path:"/compteur",
        element: <Compteur/>
      },
      {
        path:"/life",
        element: <Vie/>
      },
      {
        path:"/",
        element: <Curtain/>
      }
])

export function App() {
    return (
        <RouterProvider router={router} />
    )
}