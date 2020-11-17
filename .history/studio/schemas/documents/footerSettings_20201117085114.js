export default {
  name: 'footerSettings',
  type: 'document',
  title: 'Footer Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Numbers'
    }
  ]
}
