import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import CharacterList from './pages/CharactersList/CharacterList';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/characters",
    element: <CharacterList/>,
  },

]);

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
