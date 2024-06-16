import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import "./styles/global.scss"
import Characters from './pages/CharactersList/Characters';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/characters",
    element: <Characters/>,
  },

]);

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
