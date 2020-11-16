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
    },
    {
      name: 'menuIndex',
      type: 'number',
      title: 'Menu Position Index',
      description: 'Position at which this URL Title will appear in the drop-down menu',
      validation: Rule => Rule.required()
    }
  ]
}
