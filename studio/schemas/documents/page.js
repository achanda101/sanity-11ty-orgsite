import { format } from 'date-fns'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  initialValue: {
    hidePage: false,
    childPages: []
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug will appear in the URL of this page on the frontend',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      name: 'hidePage',
      type: 'boolean',
      title: 'Hide Page'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media'
    },
    {
      name: 'heroImage',
      type: 'a11yImage',
      title: 'Hero image',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroText',
      type: 'string',
      title: 'Hero Text',
      description: 'Hero text will be overlayed on top of the Hero image',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'childPages',
      type: 'array',
      title: 'Child Pages',
      description:
        'Choose child pages which will appear under this page in the menu. Leave blank if there are no child pages.',
      of: [{ type: 'pageReference' }]
    }
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title',
      by: [
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'heroImage',
      childList: 'childPages'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media, childList = [] }) {
      const dateSegment = format(publishedAt, 'DD/MM/YYYY')
      const path = `/${slug.current}/`
      const publishDate = publishedAt ? ` :: ${dateSegment}` : ' Missing publishing date'
      const children = childList.length > 0 ? ' :: Has Child Pages' : ''
      return {
        title,
        media,
        subtitle: path + publishDate + children
      }
    }
  }
}
