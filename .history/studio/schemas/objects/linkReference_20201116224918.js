export default {
  name: 'linkReference',
  type: 'object',
  title: 'URL',
  fields: [
    {
      title: 'URL Title',
      name: 'urlTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url'
    }
  ]
}
