export default {
  name: 'menucategory',
  type: 'document',
  title: 'Menu Category',
  fields: [
    {
      name: 'menuCategoryTitle',
      type: 'string',
      title: 'Menu Category Title',
      description: 'Menu category titles should be short for the menu to fit well on the webpage'
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
    },
    {
        name: 'menuIndex',
        type: 'number',
        title: 'Menu Category Position Index',
        description: 'Position at which this menu category will appear in the menu',
        validation: Rule => Rule.required()
      }
    {
      name: 'pageList',
      type: 'array',
      title: 'List of Pages',
      description:
        'Add pages that will appear under this menu catergory. If there are no pages under this category, you can add an external link.',
      of: [{type: 'page'}, {type: 'url'}],
      validation: Rule => Rule.length(1)
    }
  ],
  orderings: [
    {
      name: 'menuCategoryColour',
      title: 'Group by Colour of Menu Category',
      by: [
        {
          field: 'menuColour',
          direction: 'asc'
        },
        {
          field: 'menuIndex',
          direction: 'asc'
        },
        {
            field: 'menuCategoryTitle',
            direction: 'asc'
        }
      ]
    }
  ]
}
