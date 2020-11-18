export default {
  name: 'pageReference',
  type: 'object',
  title: 'Page reference',
  fields: [
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'page.title',
      media: 'page.heroImage.asset',
      childList: 'page.childPages'
    },
    prepare({ title = 'No title', media, childList = [] }) {
      const children = childList.length > 0 ? 'Has Child Pages' : ''
      return {
        title,
        media,
        subtitle: children
      }
    }
  }
}
