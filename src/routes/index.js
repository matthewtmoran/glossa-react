import { Notebook } from '../views/pages';
import { Corpus } from '../views/pages';
import { Settings } from '../views/pages';
import { CoreLayout } from '../views/layouts';
import { SettingsLayout } from '../views/layouts';

const routes = [
  {
    path: '/notebook',
    component: Notebook,
    exact: true,
    layout: CoreLayout
  },
  {
    path: '/corpus',
    component: Corpus,
    exact: false,
    layout: CoreLayout
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    layout: SettingsLayout
  }
];

export default routes;