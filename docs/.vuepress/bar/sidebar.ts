import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarImport: SidebarConfig = {
  '/Handvat/': [
    {
      text: 'IVDR Taskforce Handvat',
      children: [
        '/docs/README.md',
        '/docs/Scope en Afbakening.md',
        '/docs/Afkortingenlijst.md',
        '/docs/Referentielijst.md'
      ],
    },
  ]
}
