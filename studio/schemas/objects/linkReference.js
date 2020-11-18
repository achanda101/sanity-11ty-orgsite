import React from 'react'
import { BiLink } from 'react-icons/bi'

export default {
  name: 'linkReference',
  type: 'object',
  title: 'URL',
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
      type: 'url',
      description: 'URL needs to start with http:// or https://',
      validation: Rule =>
        Rule.required().uri({
          allowRelative: false, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ['https', 'http'] // Default is ["https", "http"]
        })
    },
    {
      title: 'Icon Name (optional)',
      name: 'iconName',
      type: 'string',
      description:
        'Visit https://react-icons.github.io/search to search for a suitable icon and copy & paste the name of the icon here'
    }
  ],
  preview: {
    select: {
      title: 'urlTitle',
      iconName: 'iconName'
    },
    prepare({ title, iconName = '' }) {
      return {
        title: title,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            <BiLink />
          </span>
        ),
        subtitle: iconName
      }
    }
  }
}
