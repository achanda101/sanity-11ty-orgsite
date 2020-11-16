import React from 'react'

export default {
  name: 'menuCategoryReference',
  type: 'object',
  title: 'Menu Category Reference',
  fields: [
    {
      name: 'menuCategory',
      type: 'reference',
      to: [
        {
          type: 'menuCategory'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'menuCategory.menuCategoryTitle'
    },
    prepare({ title }) {
      return {
        title: title,
        media: <span style={{ fontSize: '1.5rem' }}>{'📁'}</span>
      }
    }
  }
}
