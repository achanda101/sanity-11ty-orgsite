import React from 'react'
import { BiFoodMenu } from 'react-icons/bi'

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
      title: 'List of Pages/External Links',
      description: 'Add pages or external links that will appear under this menu catergory.',
      of: [{ type: 'pageReference' }, { type: 'linkReference' }],
      validation: Rule => Rule.min(1).unique()
    }
  ],
  preview: {
    select: {
      title: 'menuCategoryTitle'
    },
    prepare({ title = 'No title' }) {
      return {
        title,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            <BiFoodMenu />
          </span>
        )
      }
    }
  }
}
