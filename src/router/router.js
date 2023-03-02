import { createRouter, createWebHistory } from 'vue-router';
import AddBike from '../pages/bikes/AddBike';
import BikesList from '../pages/bikes/BikesList';
import BikeDetail from '../pages/bikes/BikeDetail';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/bikes', component: BikesList},
        { path: '/bikes/:id', component: BikeDetail, props: true},
        { path: '/bikes/add', component: AddBike},
        {path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;