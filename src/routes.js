export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/Home',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            hideInMenu: true,
            component: './Welcome',
          },
          {
            path: '/home',
            name: '首页',
            icon: 'smile',
            component: './Home',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            hideInMenu: true,
            component: './Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
              },
            ],
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            hideInMenu: true,
            component: './ListTableList',
          },
          {
            name: '修改密码',
            path: '/account/editPassword',
            hideInMenu: true,
            component: './user/editPassword',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]
