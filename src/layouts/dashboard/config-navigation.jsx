import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Order',
    path: '/order',
    icon: icon('ic_cart'),
  },
  {
    title: 'Show',
    path: '/show',
    icon: icon('ic_show'),
  },
  {
    title: 'Theater',
    path: '/theater',
    icon: icon('ic_theater'),
  },
  {
    title: 'Tiket',
    path: '/tiket',
    icon: icon('ic_ticket'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
];

export default navConfig;
