import React from 'react'

export default {
  name: 'linkReference',
  type: 'object',
  title: 'URL',
  fields: [
    {
      title: 'URL Title',
      name: 'urlTitle',
      type: 'string',
      validation: Rule =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ['https', 'http', 'mailto'] // Default is ["https", "http"]
        })
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'urlTitle'
    },
    prepare({ title }) {
      return {
        title: title,
        media: <span style={{ fontSize: '1.5rem' }}>{'🔗'}</span>
      }
    }
  }
}
