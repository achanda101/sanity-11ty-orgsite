import React from 'react'

export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'menuColour',
      type: 'array',
      title: 'Menu Colour',
      of: [{ type: 'string' }],
      options: {
        list: [{ title: 'Red Menu', value: 'RED' }, { title: 'White Menu', value: 'WHITE' }]
      },
      validation: Rule => Rule.required().max(1)
    },
    {
      name: 'menuCategoryList',
      type: 'array',
      title: 'List of Menu Categories',
      description: 'Add menu categories that will appear in this menu.',
      of: [{ type: 'menuCategoryReference' }],
      validation: Rule => Rule.min(1).unique()
    }
  ],
  orderings: [
    {
      name: 'menusByColour',
      title: 'Group by Colour of Menus',
      by: [
        {
          field: 'menuColour',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'menuColour'
    },
    prepare({ title }) {
      return {
        title: title,
        media: <span style={{ fontSize: '1.5rem' }}>{'🗂️'}</span>
      }
    }
  }
}
