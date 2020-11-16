export default {
  name: 'menucategory',
  type: 'document',
  title: 'Menu Category',
  fields: [
    {
      name: 'menuTitle',
      type: 'string',
      title: 'Menu Title',
      description: 'Menu titles should be short for the menu to fit well on the webpage'
    },
    {
      name: 'menuColour',
      type: 'array',
      title: 'Menu Colour',
      of: [{ type: 'string' }],
      options: {
        list: [{ title: 'Red Menu', value: 'redMenu' }, { title: 'White Menu', value: 'whiteMenu' }]
      },
      validation: Rule => Rule.length(1)
    }
  ]
}
