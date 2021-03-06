import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { FiLayers } from 'react-icons/fi'

const hiddenDocTypes = listItem =>
  !['menuCategory', 'page', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Menu Categories')
        .icon(FiLayers)
        .schemaType('menuCategory')
        .child(S.documentTypeList('menuCategory').title('Menu Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
