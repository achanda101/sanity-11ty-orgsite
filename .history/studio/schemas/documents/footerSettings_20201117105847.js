export default {
  name: 'footerSettings',
  type: 'document',
  title: 'Footer Settings',
  fields: [
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false // Boolean to allow any value that does NOT match pattern
          }
        )
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
        'Add pages which will be linked to in the footer such as Privacy Policy, Terms & Conditions, Site Credits, etc.',
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
      type: 'string',
      title: 'Copyright'
    },
    {
      name: 'disclaimer',
      type: 'string',
      title: 'Disclaimer'
    }
  ]
}
