import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Games = lazy(() => import('@/pages/games'));
const PlayStationGames = lazy(() => import('@/modules/playstation-store/src/pages/games'));
const XboxGames = lazy(() => import('@/modules/xbox-store/src/pages/games'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Games,
      },
      {
        path: '/playstation',
        exact: true,
        component: PlayStationGames,
      },
      {
        path: '/xbox',
        exact: true,
        component: XboxGames,
      },
    ],
  },
];
export default routerConfig;
