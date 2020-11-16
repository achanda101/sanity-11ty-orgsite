// import React from 'react'
import { FiExternalLink } from 'react-icons/md'

export default {
  name: 'linkReference',
  type: 'object',
  title: 'URL',
  icon: FiExternalLink,
  fields: [
    {
      title: 'URL Title',
      name: 'urlTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url'
    },
    {
      name: 'menuIndex',
      type: 'number',
      title: 'Menu Position Index',
      description: 'Position at which this URL Title will appear in the drop-down menu',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'urlTitle',
      index: 'menuIndex'
    },
    prepare({ title, index }) {
      return {
        title: title,
        subtitle: index
        // media: <span style={{ fontSize: '1.5rem' }}>{'🔗'}</span>
      }
    }
  }
}
