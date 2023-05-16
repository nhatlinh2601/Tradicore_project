import HeaderOnly from '~/Layout/HeaderOnly';
import Home from '~/pages/Home';
import Volunteer from '~/pages/Volunteering';
import News from '~/pages/News';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import TradicoreSocial from '~/pages/TradicoreSocial';
import Tours from '~/pages/Tours';
import Profile from '~/Layout/DefaultLayout/TradicoreSocial/profile/Profile';
import EditProfile from '~/Layout/DefaultLayout/TradicoreSocial/editprofile/EditProfile';


const publicRoutes = [

    {
        path: '/',
        component: Home,
    },
    {
        path: '/volunteering',
        component: Volunteer,

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
    },
    {
        path: '/tradicoreSocial/profile/userId',
        component: Profile,
        layout: null
    },
    {
        path: '/tradicoreSocial/profile/userId/edit',
        component: EditProfile,
        layout: null
    },
    {
        path: '/volunteering/actions',
        component: Profile,
        layout: null
    },

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
