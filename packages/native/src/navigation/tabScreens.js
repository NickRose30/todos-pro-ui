import General from '../components/general';
import Work from '../components/work';
import Purchase from '../components/purchase';

export const SCREEN_NAMES = {
  GENERAL: 'General',
  WORK: 'Work',
  PURCHASE: 'To Purchase',
};

export const TABS = [
  { name: SCREEN_NAMES.WORK, component: Work },
  { name: SCREEN_NAMES.GENERAL, component: General },
  {
    name: SCREEN_NAMES.PURCHASE,
    component: Purchase,
  },
];
