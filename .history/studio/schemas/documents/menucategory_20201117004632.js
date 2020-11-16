import React from 'react'

export default {
  name: 'menuCategory',
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
      name: 'pageList',
      type: 'array',
      title: 'List of Pages',
      description:
        'Add pages that will appear under this menu catergory. If there are no pages under this category, you can add an external link.',
      of: [{ type: 'pageReference' }, { type: 'linkReference' }],
      validation: Rule => Rule.min(1).unique()
    }
  ],
  orderings: [
    {
      name: 'menuCategoryByColour',
      title: 'Group by Colour of Menu Category',
      by: [
        {
          field: 'menuColour',
          direction: 'asc'
        },
        {
          field: 'menuIndex',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'menuCategoryTitle',
      colour: 'menuColour',
      index: 'menuIndex'
    },
    prepare({ title = 'No title', colour, index }) {
      return {
        title,
        subtitle: `Index: ${index} ${colour}`,
        media: <span style={{ fontSize: '1.5rem' }}>{'📁'}</span>
      }
    }
  }
}
