import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '76e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4dd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd68'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b35'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b6f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '423'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '870'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '280'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8b8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c2e'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/poem/chang-jiang-huang-he-bu-hui-dao-liu',
                component: ComponentCreator('/docs/poem/chang-jiang-huang-he-bu-hui-dao-liu', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/poem/mihana',
                component: ComponentCreator('/docs/poem/mihana', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c52'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
