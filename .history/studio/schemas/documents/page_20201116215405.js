import { format } from 'date-fns'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'heroImage',
      type: 'a11yImage',
      title: 'Hero image'
    },
    {
      name: 'heroText',
      type: 'string',
      title: 'Hero Text',
      description: 'Hero text will be overlayed on top of the Hero image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media'
    },
    {
      name: 'childPages',
      type: 'array',
      title: 'Child Pages',
      description:
        'Choose child pages which will appear under this page in the menu. Leave blank if are no child pages.',
      of: [
        {
          type: 'reference',
          to: {
            type: 'page'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'menuIndex',
      type: 'number',
      title: 'Menu Position Index',
      description: 'Position at which this page will appear in the drop-down menu',
      validation: Rule => Rule.required()
    }
  ],
  orderings: [
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
      media: 'heroImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM/DD')
      const path = `/${slug.current}/`
      const publishDate = publishedAt ? ` published on ${dateSegment}` : ' Missing publishing date'
      return {
        title,
        media,
        subtitle: path + publishDate
      }
    }
  }
}
