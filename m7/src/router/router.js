import {createBrowserRouter,Router} from 'react-router-dom';

import Default from '../screens/Default';
import Product from '../screens/Product';

import App from '../App';
import LoginForm from '../screens/Forms/LoginForm';

const basename= process.env.NODE_ENV==='production'? '/Proyecto-M7': '/';
const routes = createBrowserRouter([
    {
        
        path: '/',
        element: <App />,
        children: [
            {
                path:'/default',
                element: <Default />
            },
            {
                path:'/products',
                element: <Product />
            },
            {
                path: '/login',
                element: <LoginForm />,
            },

        ]
    }
],
    {
        basename: basename
    });
export default routes;