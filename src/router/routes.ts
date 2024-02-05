import App from '@/App.vue';
import { Route, RouteName, RoutePath } from '@/interfaces/routes';

const routes: Array<Route> = [
  {
    name: RouteName.CHOOSE_DIFFICULTY,
    path: RoutePath.CHOOSE_DIFFICULTY,
    component: App,
  },
  {
    path: RoutePath.NOT_FOUND,
    redirect: {
      name: RouteName.CHOOSE_DIFFICULTY,
    },
  },
];

export default routes;
