import HeaderOnly from '~/Layout/HeaderOnly';
import Home from '~/pages/Home';
import Volunteering from '~/pages/Volunteering';
import News from '~/pages/News';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import TradicoreSocial from '~/pages/TradicoreSocial';
import Tours from '~/pages/Tours';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/volunteering',
        component: Volunteering,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,

    },
    {
        path: '/tradicoreSocial',
        component: TradicoreSocial,
        layout: null
    },
    {
        path: '/tours',
        component: Tours,
    },
    {
        path: '/news',
        component: News,
        // layout: HeaderOnly
    }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
