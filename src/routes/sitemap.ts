// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'ri:dashboard-fill',
    active: true,
  },

  // {
  //   id: 'authentication',
  //   subheader: 'Authentication',
  //   icon: 'ic:round-security',
  //   active: true,
  //   items: [
  //     {
  //       name: 'Sign In',
  //       pathName: 'signin',
  //       path: paths.signin,
  //     },
  //     {
  //       name: 'Sign Up',
  //       pathName: 'signup',
  //       path: paths.signup,
  //     },
  //   ],
  // },

  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'ic:outline-settings',
  },
];

export default sitemap;
