export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb230917cbead68aa9d2782',
                  title:
                    'Sanity Studio (to be on the safe side, only admins should access this deploy)',
                  name: 'sanity-11-ty-orgsite-studio',
                  apiId: '91eb4eeb-7692-4479-ad9c-4703f9adde3f'
                },
                {
                  buildHookId: '5fb2309186dab35fcbb8c148',
                  title: 'Production Website (Click on deploy after making changes to the content)',
                  name: 'sanity-11-ty-orgsite',
                  apiId: '1f17a95c-28b2-4fa2-a4b1-837ce3d4ff7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/achanda101/sanity-11ty-orgsite',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-11-ty-orgsite.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent pages', order: '_createdAt desc', types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
