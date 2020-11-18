export default {
  name: 'socialMediaMenubar',
  type: 'document',
  title: 'Social Media Menubar',
  fields: [
    {
      name: 'smLinksList',
      type: 'array',
      title: 'List of links to Social Media Accounts, Blog(s) and Calendar(s)',
      description:
        'Add links to social media accounts, blog(s) and calendar(s) which will appear in the sidebar or in the footer. Please do not add email and phone number - they need to be added in the Footer Settings.',
      of: [{ type: 'linkReference' }],
      validation: Rule => Rule.unique()
    }
  ]
}
