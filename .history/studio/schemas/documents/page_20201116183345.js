import { format } from 'date-fns'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'SEO Metadata',
      name: 'seo',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'string'
        },
        {
          name: 'image',
          title: 'Social Media Card Image',
          type: 'a11yImage'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        }
      ]
    }
  ]
}
