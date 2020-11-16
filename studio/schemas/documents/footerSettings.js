export default {
  name: 'footerSettings',
  type: 'document',
  title: 'Footer Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'tagline',
      type: 'text',
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
    },
    {
      name: 'address',
      type: 'text',
      title: 'Address'
    },
    {
      name: 'infoLine1',
      type: 'excerptPortableText',
      title: 'Information Line 1'
    },
    {
      name: 'infoLine2',
      type: 'excerptPortableText',
      title: 'Information Line 2'
    },
    {
      name: 'footerLinks',
      type: 'array',
      title: 'Page Links in the Footer',
      description:
        'Add pages which will be linked in the footer such as Privacy Policy, Terms & Conditions, Site Credits, etc.',
      of: [
        {
          type: 'reference',
          to: {
            type: 'page'
          }
        }
      ]
    },
    {
      name: 'copyright',
      type: 'text',
      title: 'Copyright'
    },
    {
      name: 'disclaimer',
      type: 'text',
      title: 'Disclaimer'
    }
  ]
}
