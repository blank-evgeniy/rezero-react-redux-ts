import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import "./styles/global.scss";
import Spinner from './components/Spinner/Spinner';

const Home = lazy( () => import('./pages/Home/Home'));
const Characters = lazy( () => import('./pages/Characters/Characters'));
const AboutCharacter = lazy( () => import('./pages/AboutCharacter/AboutCharacter'));

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/characters",
    element: <Characters/>,
  },
  {
    path: "/characters/:id",
    element: <AboutCharacter/>,
  }

]);

const App = () => {
    return (
      <Suspense fallback={<Spinner/>}>
        <RouterProvider router={router}/>
      </Suspense>
    );
};

export default App;
