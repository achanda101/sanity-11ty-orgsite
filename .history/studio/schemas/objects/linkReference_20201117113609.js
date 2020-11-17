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
      validation: Rule =>
        Rule.required().uri({
          allowRelative: false, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ['https', 'http', 'mailto'] // Default is ["https", "http"]
        })
    }
  ],
  preview: {
    select: {
      title: 'urlTitle'
    },
    prepare({ title }) {
      return {
        title: title,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            <BiLink />
          </span>
        )
      }
    }
  }
}
